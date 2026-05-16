# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install ws dependency
npm start          # node server.js  (listens on PORT env or 3000)
```

No build step, no test suite, no linter. Single entry point: `server.js` (ESM, requires Node 18+ for native `fetch`).

Environment variables consumed by `server.js`:
- `PORT` — HTTP/WebSocket port (default 3000)
- `ANTHROPIC_API_KEY` — selects Claude as evaluator (preferred if set)
- `GEMINI_API_KEY` / `GOOGLE_API_KEY` — selects Gemini as fallback
- `CLAUDE_MODEL` (default `claude-haiku-4-5-20251001`), `GEMINI_MODEL` (default `gemini-2.5-flash`)
- If neither key present, falls back to local synonym-match scoring (`evalLocalOne` in `server.js`).

Routes served by the HTTP layer: `/` → `public/index.html` (players), `/proyector` or `/projector` → `public/projector.html` (read-only observer view). WebSocket path: `/ws`.

## Architecture

This is a 2-player LAN quiz game ("Duelo Digital") for the Spanish university course "Negocio y Modelos Digitales". One Node process serves both static HTML and the WebSocket game protocol; all game state lives in memory on the server.

### Server state machine (`server.js`)

Single global `game` object cycles through phases: `lobby → answer → eval → end`. The host (first joiner) drives transitions via WS messages.

- **`startGame`** shuffles `QUESTIONS` into `questionPool`, slices to `rounds`.
- **`nextTurn`** pops a question, rolls a random `EVENTS` modifier (mult/timeBonus/hidden), sets `roundDeadline`, arms `setTimeout(forceTimeoutSubmit)`.
- **`forceTimeoutSubmit`** fills missing submissions with `""` when the deadline passes, then calls `maybeEvaluate`.
- **`maybeEvaluate`** is the join point: when both players have submitted (or timed out), it calls `evaluateBoth` and transitions to `eval`. Guarded by `game.evaluating` to prevent double-eval races.
- **`confirmScore`** (host only) commits `proposedScores` to player totals and advances `turnIndex`.

Every state change calls `broadcast(publicState())` which fans out to all player sockets plus the `observers` set (projector view). `publicState` hides answer text during `answer` phase and only reveals `submissionsText` during `eval`.

### WebSocket protocol

Client → server message `type`s: `hello` (with `name`+optional `id` for reconnect, or `role:"observer"`), `start` (host, lobby), `submit` (answer text), `skip` (host), `confirm` (host, eval phase), `reset` (host).

Server → client: `welcome` (one-time, includes `you` + `isHost`), `error`, and repeated `state` snapshots (full game state — clients are stateless renderers).

Reconnect: client persists its assigned `id` and replays it in `hello`; server reattaches the new `ws` to the existing player slot, preserving score.

### Semantic evaluation pipeline

Three-tier fallback in `evaluateBoth`:
1. **Claude** (`evalBothClaude`) — POST to Anthropic Messages API with `REFERENCE` (full PDF text from `reference.js`) injected as system prompt.
2. **Gemini** (`evalBothGemini`) — same prompt via `generateContent` with `responseMimeType: "application/json"`.
3. **Local** (`evalLocalOne`) — per-concept synonym match: each question in `questions.js` lists `concepts[].syn[]` arrays; score = `hits/total * 100`.

Both LLM evaluators share `buildBothEvalPrompts` (one round-trip scores both players together to save tokens) and `parseBothEvalJson` (extracts `{p0,p1}` JSON, clamps scores 0–100). Final round points = `question.points * (score/100) * mods.mult`, rounded.

### Data files

- `questions.js` — exported `QUESTIONS` array. Each entry: `{unit, id, points, q, concepts:[{label, syn:[...]}], model}`. `concepts` drives the local fallback; `model` is the HTML answer shown post-eval.
- `reference.js` — exported `REFERENCE` string (transcript of `apuntes/Posibles preguntas de desarrollo.pdf`). Sent verbatim to the LLM as authoritative source.
- `apuntes/*.pdf` — source course material; not loaded at runtime, kept for reference.

### Frontend

Two self-contained HTML files (no bundler, no framework). `public/index.html` is the player UI; `public/projector.html` connects as `role:"observer"` for a shared big-screen view. Both treat every `state` message as a full re-render input.
