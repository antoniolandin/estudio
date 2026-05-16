// Duelo Digital — servidor multijugador LAN (modo simultáneo)
// Node 18+ (usa fetch nativo). Dependencia: ws.
//
// Arrancar:
//   npm install
//   node server.js
//
// Eval semántica: usa Claude / Gemini con PDF de referencia (reference.js).
// Fallback local por conceptos+sinónimos si no hay API key.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";
import { WebSocketServer } from "ws";
import { QUESTIONS } from "./questions.js";
import { REFERENCE } from "./reference.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || "";
const GEMINI_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || "claude-haiku-4-5-20251001";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const AI_PROVIDER = ANTHROPIC_KEY ? "claude" : GEMINI_KEY ? "gemini" : "local";

/* ---------- HTTP server (estáticos) ---------- */
const MIME = { ".html":"text/html; charset=utf-8", ".js":"application/javascript; charset=utf-8", ".css":"text/css; charset=utf-8", ".png":"image/png", ".svg":"image/svg+xml", ".ico":"image/x-icon" };
const httpServer = http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url === "/") url = "/index.html";
  if (url === "/proyector" || url === "/projector") url = "/projector.html";
  const file = path.join(__dirname, "public", url);
  const root = path.join(__dirname, "public");
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("404"); }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

/* ---------- Estado partida ---------- */
const game = {
  phase: "lobby",       // lobby | answer | eval | end
  players: [],          // [{id, name, ws, score, connected}]
  hostId: null,
  rounds: 5,
  timeLimit: 90,
  turnIndex: 0,         // 0..rounds-1
  currentQ: null,
  currentEvent: null,
  currentMods: null,
  questionPool: [],
  submissions: {},      // { playerId: text }
  evalResult: null,     // { p0:{covered,missed,comment}, p1:{...}, source }
  proposedScores: [0, 0],
  evaluating: false,
};

function makeId() { return Math.random().toString(36).slice(2, 10); }

function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

const observers = new Set();

function broadcast(msg) {
  const data = JSON.stringify(msg);
  for (const p of game.players) {
    if (p.ws && p.ws.readyState === 1) p.ws.send(data);
  }
  for (const ws of observers) {
    if (ws.readyState === 1) ws.send(data);
  }
}

function publicState() {
  return {
    type: "state",
    phase: game.phase,
    rounds: game.rounds,
    timeLimit: game.timeLimit,
    turnIndex: game.turnIndex,
    currentQ: game.currentQ ? { unit: game.currentQ.unit, id: game.currentQ.id, q: game.currentQ.q, points: game.currentQ.points } : null,
    currentEvent: game.currentEvent,
    currentMods: game.currentMods,
    submissions: Object.fromEntries(game.players.map(p => [p.id, game.submissions[p.id] != null])),
    submissionsText: game.phase === "eval" ? game.submissions : null,
    evalResult: game.evalResult,
    proposedScores: game.proposedScores,
    evaluating: game.evaluating,
    roundDeadline: game.phase === "answer" ? game.roundDeadline : null,
    serverNow: Date.now(),
    hostId: game.hostId,
    players: game.players.map(p => ({ id: p.id, name: p.name, score: p.score, connected: !!(p.ws && p.ws.readyState === 1) })),
    aiProvider: AI_PROVIDER,
  };
}

/* ---------- Eventos aleatorios (simultáneo: sin robo/escudo/duelo) ---------- */
const EVENTS = [
  { id:"normal", chance:55, title:"RONDA NORMAL", desc:"Ambos responden. Sin modificadores.", icon:"⚡", cls:"ev-tiempo", apply:s=>s },
  { id:"doble", chance:18, title:"DOBLE PUNTOS ×2", desc:"Puntos duplicados para ambos.", icon:"💎", cls:"ev-doble", apply:s=>{s.mult=2;return s} },
  { id:"triple", chance:6, title:"JACKPOT ×3", desc:"¡Triple de puntos!", icon:"🎰", cls:"ev-doble", apply:s=>{s.mult=3;return s} },
  { id:"tiempo", chance:8, title:"TIEMPO EXTRA +30s", desc:"30 segundos adicionales.", icon:"⏰", cls:"ev-tiempo", apply:s=>{s.timeBonus=30;return s} },
  { id:"rapida", chance:7, title:"RONDA RÁPIDA −30s", desc:"30s menos. ¡Habla rápido!", icon:"⚡", cls:"ev-rapida", apply:s=>{s.timeBonus=-30;return s} },
  { id:"misterio", chance:6, title:"PREGUNTA MISTERIOSA", desc:"Puntos secretos hasta el final.", icon:"❓", cls:"ev-misterio", apply:s=>{s.hidden=true;s.mult=1+Math.random()*2;return s} },
];
function pickEvent() {
  const total = EVENTS.reduce((a,b)=>a+b.chance,0);
  let r = Math.random()*total;
  for (const e of EVENTS) { if ((r -= e.chance) <= 0) return e; }
  return EVENTS[0];
}

/* ---------- Eval semántica ---------- */
function normalize(s) {
  return (s || "").toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ").trim();
}

function evalLocalOne(text, concepts) {
  const norm = normalize(text);
  let hits = 0;
  for (const c of concepts) {
    for (const s of c.syn) {
      if (norm.includes(normalize(s))) { hits++; break; }
    }
  }
  const total = concepts.length || 1;
  const score = Math.round((hits / total) * 100);
  return { comment: "", score };
}

function buildBothEvalPrompts(textA, textB, question, nameA, nameB) {
  const sys = `Eres un profesor experto que corrige exámenes universitarios de "Negocio y Modelos Digitales". Tienes el PDF de referencia con las respuestas oficiales.

Tu trabajo: para CADA estudiante asigna una puntuación holística de 0 a 100 y redacta un comentario detallado en español, tipo feedback de profesor.

CRITERIOS DE NOTA (juicio cualitativo, NO conteo):
- Comprensión real de la idea (no basta nombrar el término).
- Precisión técnica respecto al PDF.
- Profundidad, ejemplos correctos, claridad expositiva.
- Completitud respecto a lo que pide la pregunta.

REGLAS DE PUNTUACIÓN:
- NO calcules la nota como "porcentaje de palabras clave mencionadas". Ignora si aparecen o no términos literales: lo que cuenta es si el estudiante demuestra entender el contenido.
- Una respuesta que repite vocabulario sin entender = baja. Una respuesta que explica la idea con otras palabras correctas = alta.
- 0 = nada o totalmente incorrecto. 50 = idea parcial con errores. 80 = correcta y suficiente. 100 = excelente, completa y precisa.
- Acepta sinónimos, paráfrasis, ejemplos equivalentes.

FORMATO DEL COMENTARIO (estructurado, 3-6 frases en total):
- "✅ Lo que está bien:" qué partes ha acertado el alumno (concreto, citando lo que dijo).
- "⚠️ Lo que falta o está mal:" qué conceptos ha omitido, equivocado o tratado superficialmente.
- "💡 Cómo mejorar:" sugerencia concreta de qué añadir o reformular para tener nota máxima.

Si la respuesta está vacía o es incoherente, di brevemente que no se puede evaluar y da 0.

Responde SOLO con JSON válido, sin texto adicional, formato exacto:
{"p0":{"score":0-100,"comment":"texto con los 3 bloques separados por saltos de línea"},"p1":{"score":0-100,"comment":"texto con los 3 bloques separados por saltos de línea"}}

Los saltos de línea en el comentario van como \\n dentro del string JSON.

PDF DE REFERENCIA (FUENTE AUTORITATIVA):
"""
${REFERENCE}
"""`;
  const usr = `PREGUNTA:
${question.q}

RESPUESTA DEL JUGADOR 0 (${nameA}):
"""${textA || "(sin respuesta)"}"""

RESPUESTA DEL JUGADOR 1 (${nameB}):
"""${textB || "(sin respuesta)"}"""

Evalúa cada respuesta de forma independiente. Para cada una: nota 0-100 + comentario estructurado con "✅ Lo que está bien", "⚠️ Lo que falta o está mal" y "💡 Cómo mejorar".`;
  return { sys, usr };
}

function parseBothEvalJson(raw, question, source) {
  const m = raw.match(/\{[\s\S]*\}/);
  if (!m) return null;
  let parsed;
  try { parsed = JSON.parse(m[0]); } catch { return null; }
  if (!parsed.p0 || !parsed.p1) return null;
  const result = { source };
  for (const k of ["p0", "p1"]) {
    let score = Number(parsed[k].score);
    if (!Number.isFinite(score)) return null;
    score = Math.max(0, Math.min(100, Math.round(score)));
    result[k] = { comment: parsed[k].comment || "", score };
  }
  return result;
}

async function evalBothClaude(textA, textB, question, nameA, nameB) {
  const { sys, usr } = buildBothEvalPrompts(textA, textB, question, nameA, nameB);
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: CLAUDE_MODEL, max_tokens: 2500, system: sys, messages: [{ role:"user", content: usr }] }),
    });
    if (!res.ok) { console.warn("Claude API err", res.status, await res.text()); return null; }
    const data = await res.json();
    const raw = data.content?.[0]?.text || "";
    return parseBothEvalJson(raw, question, "claude");
  } catch (e) { console.warn("Claude err", e); return null; }
}

async function evalBothGemini(textA, textB, question, nameA, nameB) {
  const { sys, usr } = buildBothEvalPrompts(textA, textB, question, nameA, nameB);
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sys }] },
        contents: [{ role: "user", parts: [{ text: usr }] }],
        generationConfig: { responseMimeType: "application/json", temperature: 0.2, maxOutputTokens: 2500 },
      }),
    });
    if (!res.ok) { console.warn("Gemini API err", res.status, await res.text()); return null; }
    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return parseBothEvalJson(raw, question, "gemini");
  } catch (e) { console.warn("Gemini err", e); return null; }
}

async function evaluateBoth(textA, textB, question, nameA, nameB) {
  if (ANTHROPIC_KEY) {
    const r = await evalBothClaude(textA, textB, question, nameA, nameB);
    if (r) return r;
  }
  if (GEMINI_KEY) {
    const r = await evalBothGemini(textA, textB, question, nameA, nameB);
    if (r) return r;
  }
  return {
    p0: evalLocalOne(textA, question.concepts),
    p1: evalLocalOne(textB, question.concepts),
    source: "local",
  };
}

/* ---------- Flujo de partida ---------- */
function startGame(rounds, timeLimit) {
  const maxRounds = QUESTIONS.length;
  game.rounds = Math.min(rounds, maxRounds);
  game.timeLimit = timeLimit;
  game.turnIndex = 0;
  game.players.forEach(p => { p.score = 0; });
  game.questionPool = shuffle([...QUESTIONS]).slice(0, game.rounds);
  nextTurn();
}

function clearRoundTimer() {
  if (game.roundTimer) { clearTimeout(game.roundTimer); game.roundTimer = null; }
}

function nextTurn() {
  clearRoundTimer();
  game.evalResult = null;
  game.proposedScores = [0, 0];
  game.submissions = {};
  game.evaluating = false;
  if (game.turnIndex >= game.rounds) { game.phase = "end"; broadcast(publicState()); return; }
  game.currentQ = game.questionPool.shift();
  game.currentEvent = pickEvent();
  game.currentMods = { mult:1, timeBonus:0, hidden:false };
  game.currentEvent.apply(game.currentMods);
  game.phase = "answer";
  game.roundDeadline = Date.now() + (game.timeLimit + (game.currentMods.timeBonus||0)) * 1000 + 1500; // 1.5s gracia red
  game.roundTimer = setTimeout(forceTimeoutSubmit, game.roundDeadline - Date.now());
  broadcast(publicState());
}

function forceTimeoutSubmit() {
  game.roundTimer = null;
  if (game.phase !== "answer") return;
  for (const p of game.players) {
    if (game.submissions[p.id] == null) game.submissions[p.id] = "";
  }
  broadcast(publicState());
  maybeEvaluate();
}

function computeProposedScores(question, mods, evalResult) {
  const s0 = Number(evalResult.p0?.score) || 0;
  const s1 = Number(evalResult.p1?.score) || 0;
  const mult = mods?.mult || 1;
  return [
    Math.round(question.points * (s0 / 100) * mult),
    Math.round(question.points * (s1 / 100) * mult),
  ];
}

async function maybeEvaluate() {
  if (game.phase !== "answer") return;
  if (game.evaluating) return;
  // Sólo jugadores conectados al iniciar la ronda cuentan; aquí simple: ambos slots
  const ids = game.players.map(p => p.id);
  if (ids.length < 2) return;
  const allSubmitted = ids.every(id => typeof game.submissions[id] === "string");
  if (!allSubmitted) return;
  game.evaluating = true;
  clearRoundTimer();
  broadcast(publicState());
  const [p0, p1] = game.players;
  const r = await evaluateBoth(game.submissions[p0.id], game.submissions[p1.id], game.currentQ, p0.name, p1.name);
  game.evalResult = r;
  game.proposedScores = computeProposedScores(game.currentQ, game.currentMods, r);
  game.phase = "eval";
  game.evaluating = false;
  broadcast(publicState());
}

function submitAnswer(playerId, text) {
  if (game.phase !== "answer") return;
  if (game.submissions[playerId] != null) return;
  game.submissions[playerId] = String(text || "");
  broadcast(publicState());
  maybeEvaluate();
}

function confirmScore() {
  if (game.phase !== "eval") return;
  game.players[0].score += game.proposedScores[0] || 0;
  game.players[1].score += game.proposedScores[1] || 0;
  game.turnIndex += 1;
  nextTurn();
}

function skipTurn() {
  game.turnIndex += 1;
  nextTurn();
}

function resetGame() {
  clearRoundTimer();
  game.phase = "lobby";
  game.players.forEach(p => { p.score = 0; });
  game.turnIndex = 0;
  game.currentQ = null; game.currentEvent = null; game.currentMods = null;
  game.submissions = {};
  game.evalResult = null;
  game.proposedScores = [0, 0];
  broadcast(publicState());
}

/* ---------- WebSocket ---------- */
const wss = new WebSocketServer({ server: httpServer, path: "/ws" });

wss.on("connection", (ws) => {
  let player = null;

  ws.on("message", async (raw) => {
    let m;
    try { m = JSON.parse(raw); } catch { return; }

    if (m.type === "hello") {
      if (m.role === "observer") {
        observers.add(ws);
        ws.send(JSON.stringify({ type:"welcome", observer: true }));
        ws.send(JSON.stringify(publicState()));
        return;
      }
      const name = String(m.name || "Jugador").slice(0, 20);
      const reconnect = m.id ? game.players.find(p => p.id === m.id) : null;
      if (reconnect) {
        reconnect.ws = ws; reconnect.name = name; player = reconnect;
      } else if (game.players.length < 2) {
        player = { id: makeId(), name, ws, score: 0 };
        game.players.push(player);
        if (!game.hostId) game.hostId = player.id;
      } else {
        ws.send(JSON.stringify({ type:"error", msg:"Partida llena (2 jugadores)" }));
        return;
      }
      ws.send(JSON.stringify({ type:"welcome", you: player.id, isHost: game.hostId === player.id }));
      broadcast(publicState());
      return;
    }

    if (!player) return;

    if (m.type === "start" && player.id === game.hostId && game.phase === "lobby" && game.players.length === 2) {
      const rounds = Math.min(20, Math.max(1, Number(m.rounds) || 5));
      const timeLimit = Math.min(600, Math.max(20, Number(m.timeLimit) || 90));
      startGame(rounds, timeLimit);
      return;
    }

    if (m.type === "submit" && game.phase === "answer") {
      submitAnswer(player.id, m.text);
      return;
    }

    if (m.type === "skip" && game.phase === "answer") {
      if (player.id !== game.hostId) return;
      skipTurn();
      return;
    }

    if (m.type === "confirm" && game.phase === "eval") {
      if (player.id !== game.hostId) return;
      confirmScore();
      return;
    }
    if (m.type === "reset" && player.id === game.hostId) {
      resetGame();
      return;
    }
  });

  ws.on("close", () => {
    observers.delete(ws);
    if (player) {
      player.ws = null;
      broadcast(publicState());
    }
  });
});

/* ---------- Arranque ---------- */
httpServer.listen(PORT, "0.0.0.0", () => {
  const ips = [];
  for (const [name, addrs] of Object.entries(os.networkInterfaces())) {
    for (const a of addrs || []) {
      if (a.family === "IPv4" && !a.internal) ips.push({ name, ip: a.address });
    }
  }
  console.log("\n╔══════════════════════════════════════════════════╗");
  console.log("║         🎮 DUELO DIGITAL — servidor activo         ║");
  console.log("╚══════════════════════════════════════════════════╝\n");
  console.log(`Local:           http://localhost:${PORT}`);
  for (const {name, ip} of ips) console.log(`LAN (${name}):  http://${ip}:${PORT}`);
  const aiLabel = AI_PROVIDER === "claude" ? `Claude (${CLAUDE_MODEL})` : AI_PROVIDER === "gemini" ? `Gemini (${GEMINI_MODEL}) — gratis` : "Local (sinónimos)";
  console.log(`\nEvaluación: ${aiLabel}  · referencia: PDF`);
  if (AI_PROVIDER === "local") {
    console.log(`\nTip eval semántica con PDF:`);
    console.log(`  export GEMINI_API_KEY=...     # gratis · https://aistudio.google.com/apikey`);
    console.log(`  export ANTHROPIC_API_KEY=...  # de pago\n`);
  } else console.log("");
});
