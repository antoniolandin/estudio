// Banco de preguntas con conceptos + sinónimos para evaluación semántica.
// Cada concepto se considera "cubierto" si CUALQUIERA de sus variantes (sinónimos)
// aparece en la transcripción normalizada. Esto evalúa contenido, no fraseo.

export const QUESTIONS = [
  {
    unit:"U1", id:1, points:15,
    q:"Define qué es una Empresa y qué es una Empresa Digital.",
    concepts:[
      {label:"Es una entidad/organización de personas", syn:["entidad","organizacion","conjunto de personas","grupo de personas","ente","institucion"]},
      {label:"Aspiraciones/realizaciones", syn:["aspiracion","aspiraciones","realizacion","metas","objetivos","ambicion"]},
      {label:"Bienes materiales", syn:["bienes materiales","bienes","recursos materiales","activos","patrimonio"]},
      {label:"Capacidades técnicas y financieras", syn:["capacidades tecnicas","capacidad tecnica","capacidades financieras","recursos financieros","capital","tecnica","financiera"]},
      {label:"Producción/transformación o servicios", syn:["produccion","produce","fabricar","transformacion","transforma","prestacion de servicios","servicios","fabricacion"]},
      {label:"Satisfacer necesidades/deseos", syn:["necesidades","deseos","satisfacer","cubrir necesidades","demandas","cubrir deseos"]},
      {label:"Finalidad: utilidad o beneficio", syn:["beneficio","utilidad","lucro","ganancia","rentabilidad","ganar dinero","obtener beneficio"]},
      {label:"Empresa digital usa TIC intensamente", syn:["tic","tecnologias de la informacion","tecnologia","tecnologias","intensamente","intensivamente","intensivo","de forma intensa"]},
      {label:"Para competir/diferenciarse/liderar", syn:["competir","competencia","diferenciarse","diferenciacion","liderar","liderazgo","ventaja","ser lider"]},
      {label:"Eficiencia / más ventas / nuevos mercados", syn:["eficiente","eficiencia","vender mas","mas ventas","nuevos mercados","alcanzar mercados","llegar a mercados","mercados nuevos","ampliar mercado"]},
    ],
    model:"<b>Empresa:</b> entidad conformada por personas, aspiraciones, realizaciones, bienes materiales y capacidades técnicas y financieras. Le permite dedicarse a la producción/transformación de productos y/o prestación de servicios para satisfacer necesidades y deseos de la sociedad, con la finalidad de obtener una utilidad o beneficio.<br><br><b>Empresa Digital:</b> la que usa intensamente las TIC para competir, diferenciarse, liderar el escenario, vender más, ser más eficiente y llegar a mercados a los que de otro modo no tendría acceso."
  },
  {
    unit:"U1", id:2, points:15,
    q:"Concepto de cadena de valor y los tipos de actividades que la componen.",
    concepts:[
      {label:"Cadena de actividades/eslabones", syn:["cadena","eslabones","eslabon","secuencia","encadenadas","etapas","fases"]},
      {label:"Añaden valor al producto", syn:["añaden valor","aporta valor","añadir valor","agregan valor","valor al producto","incrementan valor","sumar valor"]},
      {label:"Desagregar la empresa", syn:["desagregar","desglosar","descomponer","separar","dividir"]},
      {label:"Identificar fortalezas/debilidades", syn:["fortalezas","debilidades","puntos fuertes","puntos debiles"]},
      {label:"Fuentes de ventajas competitivas", syn:["ventaja competitiva","ventajas competitivas","ventaja","competitividad"]},
      {label:"Identificar costes por actividad", syn:["costes","coste","costos","costo","gasto","gastos"]},
      {label:"Desde diseño hasta postventa", syn:["diseño","postventa","post venta","distribucion","obtencion de bienes","servicio postventa","todo el proceso"]},
      {label:"Actividades primarias o de línea", syn:["actividades primarias","primarias","de linea","linea","principales"]},
      {label:"Actividades de apoyo o soporte", syn:["actividades de apoyo","apoyo","soporte","secundarias","de soporte"]},
    ],
    model:"La <b>cadena de valor</b> considera las principales actividades de la empresa como eslabones que van añadiendo valor al producto a medida que pasa por cada una. Desagregar la empresa permite identificar fortalezas, debilidades, fuentes de ventajas competitivas y costes asociados. Va desde el diseño y obtención de bienes hasta la distribución y postventa.<br><br>Clasifica las actividades en:<br>• <b>Primarias o de línea</b><br>• <b>De apoyo o soporte</b>"
  },
  {
    unit:"U1", id:3, points:20,
    q:"¿Cuántas y cuáles son las posibles estrategias tras un análisis DAFO? Explícalas.",
    concepts:[
      {label:"Son cuatro estrategias", syn:["cuatro","4","cuatro estrategias","4 estrategias"]},
      {label:"Defensiva: enfrentar amenazas/diferenciarse", syn:["defensiva","enfrentar amenazas","resaltar diferencia","diferenciar de competencia","resalta"]},
      {label:"Ofensiva: crecimiento/atacar competencia", syn:["ofensiva","crecimiento","atacar","ataque","exaltar ventajas","crecer"]},
      {label:"Supervivencia: esperar a que asienten cambios", syn:["supervivencia","sobrevivir","esperar","dejar las cosas","observar","aguantar","mantener"]},
      {label:"Supervivencia: amenazas sin fuerzas internas", syn:["amenazas externas","sin fuerzas","debiles internamente","no tiene fuerzas","debilidad"]},
      {label:"Reorientación: oportunidades sin preparación", syn:["reorientacion","reorientar","oportunidades","sin preparacion","falta preparacion","carece"]},
      {label:"Reorientación: cambiar política/productos", syn:["cambiar politica","cambiar productos","cambio de politica","cambio de producto","reorientar productos"]},
      {label:"DAFO: debilidades/fortalezas/oportunidades/amenazas", syn:["debilidades","fortalezas","oportunidades","amenazas"]},
    ],
    model:"Cuatro estrategias:<br>• <b>Defensiva:</b> empresa preparada para enfrentar amenazas. Resalta lo que la diferencia de la competencia.<br>• <b>Ofensiva:</b> crecimiento. Cuando las fortalezas son reconocidas, ataca a la competencia para exaltar sus ventajas.<br>• <b>Supervivencia:</b> amenazas externas sin fuerzas internas. Deja las cosas como están hasta que se asienten los cambios.<br>• <b>Reorientación:</b> hay oportunidades pero falta preparación. Cambia de política o productos."
  },
  {
    unit:"U2", id:4, points:20,
    q:"Define el Lienzo de Modelo de Negocio. ¿Cuáles son sus módulos y los beneficios de usarlo?",
    concepts:[
      {label:"Nueve módulos básicos", syn:["nueve modulos","9 modulos","nueve bloques","9 bloques","nueve casillas"]},
      {label:"Refleja lógica para conseguir ingresos", syn:["ingresos","obtener ingresos","conseguir ingresos","generar ingresos","logica","como gana dinero"]},
      {label:"Área: clientes", syn:["clientes"]},
      {label:"Área: oferta", syn:["oferta","propuesta de valor","propuesta"]},
      {label:"Área: infraestructura", syn:["infraestructura"]},
      {label:"Área: viabilidad económica", syn:["viabilidad economica","viabilidad","economica","finanzas","economico"]},
      {label:"Beneficio: práctico (modificable)", syn:["practico","practica","modificar","flexible","iterar","cambiar facilmente"]},
      {label:"Beneficio: intuitivo (post-its)", syn:["intuitivo","post-it","postit","rotuladores","colores"]},
      {label:"Beneficio: trabajo en equipo", syn:["en equipo","equipo","grupo","colaborativo","trabajar juntos","pared","visible"]},
      {label:"Beneficio: visual / vista global", syn:["visual","vision global","vistazo","global","ver todo"]},
    ],
    model:"Modelo de negocio dividido en <b>nueve módulos básicos</b> que reflejan la lógica para conseguir ingresos. Cubren cuatro áreas: <b>clientes, oferta, infraestructura, viabilidad económica</b>.<br><br><b>Beneficios:</b><br>• Práctico: permite modificar a medida que se avanza.<br>• Intuitivo: post-its y rotuladores.<br>• En equipo: visible en la pared.<br>• Visual: visión global de un vistazo."
  },
  {
    unit:"U2", id:5, points:20,
    q:"Define y diferencia los módulos «Actividades clave» y «Asociaciones clave» del Lienzo.",
    concepts:[
      {label:"Actividades clave: Producción", syn:["produccion","diseño","fabricacion","entrega","cubrir demanda","manufactura"]},
      {label:"Producción: ejemplo Tesla", syn:["tesla","baterias","megafactoria","factoria"]},
      {label:"Actividades clave: Resolución de problemas", syn:["resolucion de problemas","resolver problemas","soluciones nuevas","problemas individuales"]},
      {label:"Resolución: ejemplo consultoría", syn:["consultoria","consultor","despacho","asesoria"]},
      {label:"Actividades clave: Plataforma/red", syn:["plataforma","red","sistema","plataforma red"]},
      {label:"Plataforma: ejemplos (Airbnb/Spotify/Blablacar)", syn:["airbnb","spotify","blablacar","uber"]},
      {label:"Asociaciones clave: alianzas con terceros", syn:["alianzas","asociaciones","terceros","socios","partners","colaboraciones"]},
      {label:"Optimizar modelo / reducir riesgos / adquirir recursos", syn:["optimizar","reducir riesgos","adquirir recursos","menos riesgo","obtener recursos"]},
      {label:"Red de proveedores clave", syn:["proveedores","red de proveedores","suministradores"]},
      {label:"Diferencia: actividades=qué hace, asociaciones=con quién", syn:["a diferencia","mientras que","en cambio","por el contrario","diferencia","se diferencia"]},
    ],
    model:"<b>Actividades clave</b> — tipos:<br>• <b>Producción:</b> diseño, fabricación, entrega. Ej: megafactoría baterías Tesla.<br>• <b>Resolución de problemas:</b> soluciones nuevas a problemas individuales. Ej: consultoría.<br>• <b>Plataforma/red:</b> sistema como elemento clave. Ej: Airbnb, Blablacar, Spotify.<br><br><b>Asociaciones clave:</b> alianzas con terceros para que el modelo funcione. Optimizar modelo, reducir riesgos o adquirir recursos. Incluye proveedores y socios clave."
  },
  {
    unit:"U3", id:6, points:25,
    q:"Define: negocios de larga cola, plataformas multilaterales, gratis como modelo de negocio y modelos de negocio abierto.",
    concepts:[
      {label:"Larga cola: vender menos de más", syn:["vender menos de mas","menos de mas","menos de muchos","gran variedad","mucha variedad"]},
      {label:"Larga cola: amplia gama de especializados", syn:["amplia gama","gama especializada","nicho","productos especializados","catalogo amplio","muchos productos"]},
      {label:"Larga cola: volumen bajo individual", syn:["volumen bajo","ventas bajas","poco volumen","pocas ventas por producto"]},
      {label:"Multilaterales: dos o más grupos clientes", syn:["dos grupos","mas de un grupo","varios grupos","dos o mas","multiples segmentos","dos lados","multilateral"]},
      {label:"Multilaterales: grupos interdependientes", syn:["interdependientes","interdependencia","se necesitan","dependen entre si","dependen uno del otro"]},
      {label:"Gratis: un segmento se beneficia gratis", syn:["segmento gratuito","oferta gratuita","gratis","sin coste","sin pagar","ofrecer gratis","servicio gratuito"]},
      {label:"Gratis: constantemente/permanente", syn:["constantemente","permanente","continuamente","siempre gratis"]},
      {label:"Abierto: crear y captar valor", syn:["crear valor","captar valor","crear y captar","generar valor"]},
      {label:"Abierto: colaboración sistemática con socios externos", syn:["colaboracion","colaborar","socios externos","externos","abrir empresa","abierto al exterior","cooperar"]},
    ],
    model:"• <b>Larga cola:</b> vender menos de más; amplia gama de productos especializados que, por separado, tienen volumen bajo.<br>• <b>Plataformas multilaterales:</b> reúnen dos o más grupos de clientes distintos pero interdependientes.<br>• <b>Gratis:</b> al menos un segmento se beneficia constantemente de una oferta gratuita.<br>• <b>Abierto:</b> crear y captar valor mediante colaboración sistemática con socios externos."
  },
  {
    unit:"U4", id:7, points:20,
    q:"¿Qué es y en qué consiste el Lienzo de Propuesta de Valor?",
    concepts:[
      {label:"Tiene dos lados: Mapa Valor y Segmento Cliente", syn:["dos lados","dos partes","mapa de valor","segmento de clientes","mapa valor","perfil del cliente"]},
      {label:"Diseñar vs Observar", syn:["diseñar","observar","diseño","observacion"]},
      {label:"Jobs: trabajos del cliente", syn:["jobs","trabajos","tareas","lo que quiere hacer","funcion","quiere realizar"]},
      {label:"Gains: ganancias / resultados positivos", syn:["gains","ganancias","alegrias","beneficios","resultados positivos","maximizar","conseguir"]},
      {label:"Pains: dolores / resultados negativos", syn:["pains","dolores","frustraciones","resultados negativos","perdidas","riesgos","evitar","minimizar"]},
      {label:"Gain creators: crean ganancias", syn:["gain creator","creadores de ganancias","creadores de alegrias","facilitan ganancias"]},
      {label:"Pain relievers: alivian dolores", syn:["pain reliever","aliviadores","alivian dolores","evitan dolores","quitan dolores"]},
      {label:"Productos y servicios (tangibles/intangibles)", syn:["productos","servicios","tangibles","intangibles","productos y servicios"]},
      {label:"Encaje / relevancia / importancia", syn:["relevancia","encaje","fit","importancia","alinear","ajuste","encajar"]},
    ],
    model:"Herramienta que conecta <b>Mapa de Valor (DISEÑAR)</b> con <b>Segmento de Clientes (OBSERVAR)</b>.<br><br><b>Cliente:</b> Jobs (lo que quiere hacer), Gains (resultados positivos a maximizar), Pains (negativos a evitar).<br><b>Mapa de valor:</b> Productos y servicios (tangibles/intangibles), Gain creators (crean ganancias), Pain relievers (alivian dolores).<br><br>Se evalúa por relevancia/importancia para el cliente."
  },
  {
    unit:"U5", id:8, points:20,
    q:"En la adopción de innovaciones, ¿cómo se distribuye la población? Nombra y define los grupos.",
    concepts:[
      {label:"Entusiastas/Innovators: exploran, aceptan riesgo", syn:["innovators","entusiastas","exploran","aceptan riesgo","sin presupuesto","lo nuevo"]},
      {label:"Visionarios/Early Adopters: mejoras radicales", syn:["early adopters","visionarios","mejoras radicales","ventaja radical","lideres de opinion","solucion personalizada"]},
      {label:"Pragmáticos/Early Majority: soluciones probadas", syn:["early majority","pragmaticos","soluciones probadas","soluciones completas","productos lideres","referencias","mejorar operaciones"]},
      {label:"Conservadores/Late Majority: cuando no queda remedio", syn:["late majority","conservadores","no queda remedio","obligados","tarde","mayoria tardia"]},
      {label:"Escépticos/Laggards: rechazan lo nuevo", syn:["laggards","escepticos","rechazan","rezagados","no quieren","contra"]},
      {label:"Son cinco grupos", syn:["cinco","5","cinco grupos","5 grupos"]},
    ],
    model:"Cinco grupos:<br>• <b>Entusiastas (Innovators):</b> exploran, aceptan riesgo, sin presupuesto.<br>• <b>Visionarios (Early Adopters):</b> mejoras radicales, líderes de opinión, aceptan solución incompleta.<br>• <b>Pragmáticos (Early Majority):</b> soluciones completas y probadas, compran líderes, se fían de referencias.<br>• <b>Conservadores (Late Majority):</b> adoptan cuando no queda remedio.<br>• <b>Escépticos (Laggards):</b> rechazan lo nuevo."
  },
  {
    unit:"U5", id:9, points:20,
    q:"¿Qué es el valor para el cliente y cómo se define o describe?",
    concepts:[
      {label:"Utilidad percibida de ventajas", syn:["utilidad percibida","utilidad","ventajas","percibe","percepcion"]},
      {label:"A cambio de costes totales", syn:["a cambio","costes totales","costos","coste total","sacrificio"]},
      {label:"Considerando ofertas competitivas", syn:["ofertas competitivas","competencia","alternativas","competidores"]},
      {label:"Considerando contexto de uso", syn:["contexto","contexto de uso","situacion","entorno","aplicacion"]},
      {label:"Lo definen los clientes (percepciones)", syn:["lo definen los clientes","percepciones","subjetivo","subjetiva","punto de vista del cliente"]},
      {label:"Es opaco", syn:["opaco","poco claro","no transparente","dificil de ver","no se ve"]},
      {label:"Varias dimensiones: funcional/emocional/económica", syn:["funcional","emocional","economica","dimensiones","racional","sentimientos"]},
      {label:"Compromiso beneficios-costes", syn:["beneficios","trade off","compromiso","balance","beneficios y costes","beneficios menos costes"]},
      {label:"Es relativo (vs alternativas/statu quo)", syn:["relativo","relativa","statu quo","comparado","frente a alternativas","con respecto a"]},
    ],
    model:"<b>Utilidad percibida</b> del conjunto de ventajas que un cliente recibe a cambio de los <b>costes totales</b> de un producto, teniendo en cuenta <b>ofertas competitivas</b> y <b>contexto de uso</b>.<br><br>• Lo definen los clientes (percepciones).<br>• Es opaco.<br>• Depende del contexto.<br>• Varias dimensiones: funcional, emocional, económica.<br>• Compromiso beneficios–costes.<br>• Es relativo (vs alternativas como statu quo)."
  },
  {
    unit:"U5", id:10, points:20,
    q:"Detección de necesidades de clientes: cómo se hace y cuáles son las dos técnicas principales.",
    concepts:[
      {label:"Identificar PROBLEMAS no soluciones", syn:["problemas","no soluciones","no productos","no soluciones ni productos","necesidades como problemas"]},
      {label:"Expresadas en palabras del cliente", syn:["palabras del cliente","palabras","como lo dice el cliente","voz del cliente","propias palabras"]},
      {label:"Estructuradas en jerarquía", syn:["jerarquia","estructurado","jerarquica","arbol","organizado"]},
      {label:"Priorizadas por importancia", syn:["importancia","priorizar","priorizadas","prioridad"]},
      {label:"Y por satisfacción actual", syn:["satisfaccion","satisfecho","satisfacen","cubiertas","actualmente"]},
      {label:"Técnica 1: Entrevistas en profundidad", syn:["entrevistas en profundidad","entrevistas","entrevista profunda","entrevista cualitativa"]},
      {label:"Técnica 2: Diseño empático", syn:["diseño empatico","empatico","empatia","empatica"]},
      {label:"Cualitativas / focus groups mencionados", syn:["cualitativa","cualitativas","focus group","focus groups","grupos focales"]},
      {label:"Tradicionales se quedan en la superficie", syn:["superficie","superficial","se quedan en la superficie","no profundizan"]},
    ],
    model:"<b>Detectar necesidades:</b> identificar PROBLEMAS (no soluciones), en palabras del cliente, estructurados en jerarquía, priorizados por importancia y satisfacción actual.<br><br>Dos técnicas principales:<br>• <b>Entrevistas en profundidad</b> (cualitativa, junto a focus groups).<br>• <b>Diseño empático</b> (las técnicas tradicionales se quedan en la superficie)."
  },
  {
    unit:"U5", id:11, points:15,
    q:"¿Qué son las «personas» y cómo se caracterizan?",
    concepts:[
      {label:"Son arquetipos de comprador/usuario", syn:["arquetipo","arquetipos","modelo","representacion","perfil tipo"]},
      {label:"Información personal: nombre/foto/frase", syn:["nombre","foto","frase representativa","frase","informacion personal","datos personales"]},
      {label:"Perfil sociodemográfico", syn:["sociodemografico","demografico","edad","sexo","formacion","nivel economico","educacion","clase social"]},
      {label:"Situación/puesto actual", syn:["situacion actual","puesto","puesto actual","funciones","responsabilidades","retos","desempeño"]},
      {label:"Objetivos: sentirse/hacer/ser", syn:["objetivos","sentirse","ser","hacer","metas","quiere ser","quiere hacer"]},
      {label:"Comportamientos", syn:["comportamiento","comportamientos","conducta","habitos","como actua"]},
      {label:"Actitudes", syn:["actitudes","actitud","como piensa","creencias"]},
    ],
    model:"Las <b>personas</b> son <b>arquetipos</b> que caracterizan a compradores y usuarios. Se definen con:<br>• Información personal (nombre, foto, frase).<br>• Perfil sociodemográfico (sexo, edad, formación, nivel económico…).<br>• Situación/puesto actual (funciones, responsabilidades, objetivos, retos).<br>• Objetivos (sentirse, hacer, ser).<br>• Comportamientos.<br>• Actitudes."
  },
  {
    unit:"U6", id:12, points:25,
    q:"¿En qué consiste la segmentación de clientes y los criterios para B2C y B2B?",
    concepts:[
      {label:"Dividir mercado en grupos similares", syn:["dividir","mercado","grupos","grupos de compradores","subdivisiones","clasificar"]},
      {label:"Requieren productos / marketing similares", syn:["productos similares","marketing similar","enfoque similar","mismas necesidades","mismo enfoque"]},
      {label:"Crear valor", syn:["crear valor","donde crear valor","generar valor"]},
      {label:"Segmento: homogéneo", syn:["homogeneo","uniforme"]},
      {label:"Segmento: medible / sostenible / accesible / accionable", syn:["medible","sostenible","accesible","accionable","medir","alcanzable"]},
      {label:"B2C: criterios demográficos", syn:["demograficos","demografico","edad","sexo","ubicacion","ingresos","ocupacion","clase social"]},
      {label:"B2C: comportamiento respecto al producto", syn:["comportamiento","ocasiones de compra","frecuencia de uso","fidelidad","uso del producto"]},
      {label:"B2C: psicográficos", syn:["psicografico","psicograficos","valores","estilo de vida","personalidad","actitud"]},
      {label:"B2B: firmográficos", syn:["firmograficos","firmografico","sector","tamaño empresa","tamaño","ubicacion empresa"]},
      {label:"B2B: enfoques de compra", syn:["enfoques de compra","politicas","procedimientos","criterios de compra","como compra","proceso de compra","naturaleza relacion"]},
      {label:"B2B: personales", syn:["personales","similitud con proveedor","lealtad","actitud","relacion personal"]},
    ],
    model:"<b>Segmentación:</b> dividir el mercado en grupos de compradores que requieren productos y enfoques de marketing similares para crear valor. Buen segmento: <b>homogéneo, medible, sostenible, accesible, accionable</b>.<br><br><b>B2C:</b><br>• Demográficos (edad, sexo, ingresos, ocupación, clase social…).<br>• Comportamiento (ocasiones, frecuencia, fidelidad).<br>• Psicográficos (valores, estilo de vida, personalidad).<br><br><b>B2B:</b><br>• Firmográficos (sector, tamaño, ubicación).<br>• Enfoques de compra (políticas, criterios, procedimientos, relación).<br>• Personales (similitud, actitud, lealtad)."
  },
  {
    unit:"U6", id:13, points:20,
    q:"¿Cómo se estima el tamaño del mercado? Tipos y definiciones (TAM, SAM, SOM).",
    concepts:[
      {label:"TAM: Total Addressable/Available Market", syn:["tam","total addressable","total available","mercado total","mercado total disponible"]},
      {label:"TAM: 100% potenciales clientes / mercado potencial", syn:["100","cien por ciento","mercado potencial","todos los clientes","todo el mercado"]},
      {label:"SAM: Served/Segmented Available Market", syn:["sam","served available","segmented available","servido","segmentado"]},
      {label:"SAM: parte del TAM según estrategia/modelo", syn:["parte del tam","al que nos dirigimos","estrategia","modelo de negocio","segmento objetivo"]},
      {label:"SOM: Serviceable Obtainable Market", syn:["som","serviceable obtainable","obtainable market","serviceable"]},
      {label:"SOM: realista teniendo en cuenta limitaciones", syn:["realista","realistas","limitaciones","recursos","competidores","tiempo","podemos vender"]},
      {label:"Idea: lo que podría vs lo que me dejarán vender", syn:["podria vender","me dejaran","podriamos","puedo llegar a vender","alcance real"]},
    ],
    model:"Lo que podría vender y lo que me dejarán vender:<br>• <b>TAM</b> (Total Available/Addressable Market): mercado potencial total (€) si compra el 100% de potenciales clientes.<br>• <b>SAM</b> (Served/Segmented Available Market): parte del TAM a la que nos dirigimos con nuestra estrategia y modelo.<br>• <b>SOM</b> (Serviceable and Obtainable Market): lo que realistamente podemos vender, considerando recursos, competidores y tiempo."
  },
  {
    unit:"U6", id:14, points:15,
    q:"¿Qué es posicionar?",
    concepts:[
      {label:"Lugar distintivo en la mente del cliente", syn:["lugar distintivo","mente","mentes","corazon","corazones","en la cabeza","ocupar lugar"]},
      {label:"Respecto a alternativas que consideran", syn:["alternativas","competencia","frente a","en relacion","comparacion"]},
      {label:"Define percepciones que se quieren cambiar/influir", syn:["percepciones","cambiar percepcion","influenciar","influir","modificar","percepcion del cliente"]},
      {label:"Énfasis en marco competitivo y diferenciadores", syn:["marco competitivo","competitivo","diferenciadores","diferenciacion","diferencial","unico","diferenciador clave"]},
      {label:"Desde la perspectiva del cliente", syn:["perspectiva del cliente","optica del cliente","ojos del cliente","punto de vista del cliente"]},
      {label:"Posicionamiento: actividad de diseñar oferta/imagen", syn:["posicionamiento","diseñar oferta","diseñar imagen","construir imagen","oferta e imagen"]},
    ],
    model:"<b>Posición:</b> lugar distintivo que queremos ocupar en la mente (y corazones) de los potenciales clientes respecto a las alternativas que pudieran considerar.<br>• Se define en términos de percepciones clave que se quieren cambiar o influenciar.<br>• Enfatiza marco competitivo y diferenciadores clave desde la perspectiva del cliente.<br>• <b>Posicionamiento:</b> actividad de diseñar la oferta y la imagen para alcanzar esa posición."
  },
  {
    unit:"U7", id:15, points:20,
    q:"Define y diferencia Inbound Marketing y Outbound Marketing.",
    concepts:[
      {label:"Outbound: basado en interrumpir", syn:["interrumpir","interrupcion","interruptivo","intrusivo","interrumpe"]},
      {label:"Outbound: medios pagados (y propios)", syn:["medios pagados","pago","pagar","paid media","propios"]},
      {label:"Outbound: anuncios display", syn:["display","banner","anuncios display","anuncios graficos"]},
      {label:"Outbound: SPAM / emails no deseados", syn:["spam","email no deseado","correos no deseados","emails masivos"]},
      {label:"Outbound: llamadas a puerta fría", syn:["puerta fria","llamadas frias","cold call","llamada en frio"]},
      {label:"Inbound: atraer y conseguir permiso", syn:["atraer","permiso","conseguir permiso","ganar permiso","permission"]},
      {label:"Inbound: medios ganados y propios", syn:["medios ganados","earned","owned","propios","ganados"]},
      {label:"Inbound: SEO", syn:["seo","posicionamiento organico","busqueda organica"]},
      {label:"Inbound: medios sociales", syn:["medios sociales","redes sociales","social media","redes"]},
      {label:"Inbound: anuncios basados en intención", syn:["intencion","basados en intencion","sem","search ads","busqueda"]},
      {label:"Inbound: contenido valioso", syn:["contenido valioso","contenido","content","marketing de contenidos","contenido util"]},
    ],
    model:"<b>Outbound Marketing:</b> basado en <b>interrumpir</b>. Medios pagados (y propios). Tácticas: anuncios display, emails no deseados (SPAM), llamadas a puerta fría.<br><br><b>Inbound Marketing:</b> basado en <b>atraer y conseguir permiso</b>. Medios ganados y propios. Tácticas: SEO, medios sociales, anuncios basados en intención, contenido valioso."
  },
  {
    unit:"U7", id:16, points:15,
    q:"¿Cuáles son los cuatro pasos del posicionamiento en redes (POST)?",
    concepts:[
      {label:"Acrónimo POST", syn:["post","p o s t","pe o ese te"]},
      {label:"P — People (personas/actividades sociales)", syn:["people","personas","actividades sociales","actividades de tus clientes","quienes son"]},
      {label:"O — Objectives (objetivos y métricas)", syn:["objectives","objetivos","metricas","metrics","que quieres conseguir","medir"]},
      {label:"S — Strategy (cambiar relaciones)", syn:["strategy","estrategia","cambiar relaciones","planear","como","relaciones con clientes"]},
      {label:"T — Technology (tecnologías sociales)", syn:["technology","tecnologia","tecnologias sociales","que tecnologia","herramientas"]},
    ],
    model:"Método <b>POST</b>:<br>• <b>P — People:</b> evalúa las actividades (sociales) de tus clientes.<br>• <b>O — Objectives (and Metrics):</b> qué quieres conseguir y cómo medirlo.<br>• <b>S — Strategy:</b> planea cómo cambiar las relaciones con tus clientes.<br>• <b>T — Technology:</b> qué tecnologías sociales debes usar."
  },
  {
    unit:"U1", id:17, points:15,
    q:"¿Qué tipos de organizaciones existen según las clasificaciones de Kotler y Hernangómez?",
    concepts:[
      {label:"Kotler clasifica por propiedad y objetivos", syn:["kotler","propiedad","objetivos","tipo de propiedad"]},
      {label:"Propiedad: privada o pública", syn:["privada","publica","privadas","publicas"]},
      {label:"Objetivo: ánimo de lucro o sin ánimo de lucro", syn:["animo de lucro","sin animo de lucro","lucrativo","no lucrativo","lucro"]},
      {label:"Empresas: privadas con ánimo de lucro", syn:["empresas privadas","privadas lucrativas"]},
      {label:"Organizaciones benéficas / Administraciones públicas / Universidades", syn:["beneficas","ong","administraciones","universidades publicas","organismos","administracion"]},
      {label:"Hernangómez clasifica por actividades y objetivos", syn:["hernangomez","actividades y objetivos","actividades economicas","actividades no economicas"]},
      {label:"Actividades económicas vs no económicas", syn:["economicas","no economicas","economica","no economica"]},
      {label:"Objetivos económicos vs no económicos", syn:["objetivos economicos","objetivos no economicos"]},
    ],
    model:"<b>Kotler (1982)</b>: clasifica por <b>propiedad</b> (privada/pública) y <b>objetivos</b> (ánimo de lucro/sin ánimo).<br>• Privada + lucro = Empresas.<br>• Pública + lucro = Empresas Públicas.<br>• Privada + sin lucro = Organizaciones Benéficas.<br>• Pública + sin lucro = Administraciones, organismos, universidades públicas.<br><br><b>Hernangómez (1988)</b>: clasifica por <b>actividades</b> (económicas/no económicas) y <b>objetivos</b> (económicos/no económicos).<br>• Actividades económicas + objetivos económicos = Empresas.<br>• Actividades económicas + objetivos no económicos = Servicios públicos.<br>• Actividades no económicas + objetivos económicos = Compañías de teatro, exhibiciones deportivas.<br>• Actividades no económicas + objetivos no económicos = Partidos políticos, museos, iglesia, ejército."
  },
  {
    unit:"U1", id:18, points:15,
    q:"¿Cuáles son las actividades primarias o de línea de la cadena de valor? Enuméralas.",
    concepts:[
      {label:"Logística interior / suministros / entrada", syn:["logistica interior","logistica de entrada","suministros","aprovisionamiento entrada","entrada"]},
      {label:"Operaciones", syn:["operaciones","produccion","fabricacion","operativa"]},
      {label:"Logística exterior / distribución / salida", syn:["logistica exterior","logistica de salida","distribucion","salida","entrega"]},
      {label:"Marketing y ventas", syn:["marketing","ventas","marketing y ventas","comercializacion"]},
      {label:"Servicios / postventa", syn:["servicios","servicio","postventa","servicio postventa","atencion al cliente"]},
      {label:"Generan margen de utilidad", syn:["margen","margen de utilidad","beneficio","valor al producto"]},
    ],
    model:"Las <b>actividades primarias o de línea</b> de la cadena de valor son:<br>• <b>Logística interior</b> (suministros comprados y logística de entrada).<br>• <b>Operaciones</b> (producción, fabricación).<br>• <b>Logística exterior</b> (distribución y logística de salida).<br>• <b>Marketing y ventas</b>.<br>• <b>Servicios</b> (postventa).<br><br>Generan directamente el <b>margen de utilidad</b> del producto."
  },
  {
    unit:"U1", id:19, points:15,
    q:"¿Cuáles son las actividades de apoyo o soporte de la cadena de valor? Defínelas brevemente.",
    concepts:[
      {label:"Infraestructura de la organización", syn:["infraestructura","planificacion","contabilidad","finanzas","administracion general"]},
      {label:"Infraestructura: planificación, contabilidad, finanzas", syn:["planificacion","contabilidad","finanzas"]},
      {label:"Dirección de recursos humanos / RRHH", syn:["recursos humanos","rrhh","direccion de recursos humanos","gestion de personal","contratacion"]},
      {label:"RRHH: búsqueda/contratación/motivación", syn:["busqueda","contratacion","motivacion","seleccion","formacion"]},
      {label:"Desarrollo de tecnología / I+D", syn:["desarrollo de tecnologia","tecnologia","investigacion","i+d","i mas d","investigacion y desarrollo"]},
      {label:"Aprovisionamiento", syn:["aprovisionamiento","compras","abastecimiento","almacenaje","insumos"]},
      {label:"Aprovisionamiento: almacenaje/acumulación de materiales", syn:["almacenaje","acumulacion","materiales","articulos","mercaderia"]},
    ],
    model:"<b>Actividades de soporte o apoyo</b>:<br>• <b>Infraestructura de la organización</b>: actividades que prestan apoyo a toda la empresa (planificación, contabilidad, finanzas).<br>• <b>Dirección de recursos humanos</b>: búsqueda, contratación y motivación del personal.<br>• <b>Desarrollo de tecnología (I+D)</b>: generadores de costes y valor.<br>• <b>Aprovisionamiento</b>: almacenaje y acumulación de artículos, insumos y materiales."
  },
  {
    unit:"U1", id:20, points:15,
    q:"¿Qué es un análisis DAFO y qué dos partes lo componen?",
    concepts:[
      {label:"DAFO: Debilidades, Amenazas, Fortalezas, Oportunidades", syn:["debilidades","amenazas","fortalezas","oportunidades","dafo","foda"]},
      {label:"Herramienta de estudio de situación", syn:["herramienta","estudio","situacion","analizar situacion","diagnostico"]},
      {label:"Análisis interno: Debilidades y Fortalezas", syn:["interno","analisis interno","fortalezas y debilidades","debilidades y fortalezas","caracteristicas internas"]},
      {label:"Análisis externo: Amenazas y Oportunidades", syn:["externo","analisis externo","amenazas y oportunidades","situacion externa","caracteristicas externas"]},
      {label:"Determinar ventajas competitivas / estrategia", syn:["ventajas competitivas","estrategia generica","planear estrategia","estrategia futura","ventaja"]},
      {label:"Aplicable a cualquier empresa/proyecto/persona", syn:["cualquier empresa","cualquier situacion","aplicable","independientemente"]},
    ],
    model:"<b>DAFO</b> (Debilidades, Amenazas, Fortalezas, Oportunidades): herramienta de estudio de la situación de una empresa, institución, proyecto o persona.<br><br>Dos partes:<br>• <b>Análisis interno</b>: características internas → <b>Debilidades y Fortalezas</b>.<br>• <b>Análisis externo</b>: situación externa → <b>Amenazas y Oportunidades</b>.<br><br>Objetivo: determinar las ventajas competitivas y la estrategia genérica más conveniente. Aplicable a cualquier tipo de empresa, gestión o área de negocio."
  },
  {
    unit:"U1", id:21, points:15,
    q:"¿En qué consiste el análisis interno del DAFO? Cita los factores principales.",
    concepts:[
      {label:"Detecta fortalezas y debilidades internas", syn:["fortalezas y debilidades","puntos fuertes","puntos debiles","internas"]},
      {label:"Origina ventajas o desventajas competitivas", syn:["ventajas competitivas","desventajas competitivas","competitivas"]},
      {label:"Producción (capacidad, costes, calidad, innovación)", syn:["produccion","capacidad de produccion","costes de fabricacion","calidad","innovacion tecnologica"]},
      {label:"Marketing (línea de productos, imagen, precios, distribución)", syn:["marketing","linea de productos","imagen","precios","publicidad","cuota","distribucion","equipo de ventas"]},
      {label:"Organización (estructura, dirección, cultura)", syn:["organizacion","estructura","direccion","cultura","cultura empresa"]},
      {label:"Personal (selección, formación, motivación)", syn:["personal","seleccion","formacion","motivacion","remuneracion","rotacion"]},
      {label:"Finanzas (recursos, endeudamiento, rentabilidad)", syn:["finanzas","recursos financieros","endeudamiento","rentabilidad","liquidez","i+d"]},
    ],
    model:"El <b>análisis interno</b> consiste en detectar las <b>fortalezas y debilidades</b> de la empresa que originan ventajas o desventajas competitivas.<br><br>Factores:<br>• <b>Producción</b>: capacidad, costes de fabricación, calidad, innovación tecnológica.<br>• <b>Marketing</b>: línea y gama de productos, imagen, posicionamiento, precios, publicidad, distribución, equipo de ventas, servicio al cliente.<br>• <b>Organización</b>: estructura, proceso de dirección, cultura.<br>• <b>Personal</b>: selección, formación, motivación, remuneración, rotación.<br>• <b>Finanzas</b>: recursos disponibles, endeudamiento, rentabilidad, liquidez, I+D."
  },
  {
    unit:"U1", id:22, points:15,
    q:"¿En qué consiste el análisis externo del DAFO? Cita las áreas que abarca.",
    concepts:[
      {label:"Identifica amenazas y oportunidades", syn:["amenazas y oportunidades","amenazas","oportunidades","externas"]},
      {label:"Mercado (tamaño, segmento, demanda, deseos)", syn:["mercado","tamaño de mercado","segmento","demanda","deseos del consumidor","comportamiento","conducta"]},
      {label:"Sector (tendencias, fabricantes, proveedores, distribuidores)", syn:["sector","tendencias","fabricantes","proveedores","distribuidores","clientes"]},
      {label:"Competencia (actual y potencial)", syn:["competencia","competidores","competencia actual","competencia potencial","rivales"]},
      {label:"Entorno (económico, político, legal, social, tecnológico)", syn:["entorno","economico","politico","legal","sociologico","social","tecnologico","factores externos","pestel"]},
      {label:"Factores no controlables", syn:["no controlables","no podemos controlar","no controlamos","incontrolables"]},
    ],
    model:"El <b>análisis externo</b> identifica las <b>amenazas y oportunidades</b> del mercado. Abarca:<br>• <b>Mercado</b>: tamaño, segmento, evolución de la demanda, deseos del consumidor, conducta de compra.<br>• <b>Sector</b>: tendencias del mercado, fabricantes, proveedores, distribuidores, clientes.<br>• <b>Competencia</b>: identificar y evaluar a competidores actuales y potenciales.<br>• <b>Entorno</b>: factores que no podemos controlar (económicos, políticos, legales, sociológicos, tecnológicos)."
  },
  {
    unit:"U2", id:23, points:15,
    q:"¿Qué es un modelo de negocio y qué diferencia tiene respecto a una estrategia?",
    concepts:[
      {label:"Describe las bases sobre las que una empresa opera", syn:["bases","describe","fundamento","sobre las que"]},
      {label:"Crea valor", syn:["crea valor","crear valor","creacion de valor"]},
      {label:"Proporciona valor", syn:["proporciona valor","entrega valor","ofrece valor","da valor"]},
      {label:"Capta valor", syn:["capta valor","captura valor","captacion","recoge valor","ingresos"]},
      {label:"Es un anteproyecto, no plan detallado", syn:["anteproyecto","no es un plan detallado","no detallado","esquema","aproximacion","boceto"]},
      {label:"De una estrategia", syn:["estrategia","anteproyecto de estrategia"]},
    ],
    model:"Un <b>modelo de negocio</b> describe las bases sobre las que una empresa <b>crea, proporciona y capta valor</b>.<br><br>Es una especie de <b>anteproyecto de una estrategia</b>, NO un plan detallado. Refleja la lógica que sigue la empresa para conseguir ingresos."
  },
  {
    unit:"U2", id:24, points:15,
    q:"Define el módulo «Propuestas de valor» del Lienzo y su importancia.",
    concepts:[
      {label:"Productos y servicios que la empresa ofrece", syn:["productos","servicios","productos y servicios","oferta","lo que ofrece"]},
      {label:"Dirigidos a los segmentos de mercado", syn:["segmentos","segmentos de mercado","clientes","grupos de clientes"]},
      {label:"Tratar de satisfacer sus necesidades", syn:["satisfacer","satisfacerlos","cubrir necesidades","resolver problemas","atender necesidades"]},
      {label:"Razón por la que el cliente elige a la empresa", syn:["razon","por que eligen","diferenciacion","valor distintivo","ventaja"]},
      {label:"Puede ser cuantitativa o cualitativa", syn:["cuantitativa","cualitativa","precio","velocidad","novedad","comodidad","diseño","marca","status"]},
    ],
    model:"Módulo <b>Propuestas de valor</b>: son los <b>productos y servicios</b> que la empresa ofrece a los <b>segmentos de mercado</b> para tratar de <b>satisfacerlos</b>.<br><br>Es la razón por la que el cliente elige a una empresa frente a otra. Puede ser cuantitativa (precio, velocidad) o cualitativa (diseño, experiencia, novedad, comodidad, status, marca, personalización)."
  },
  {
    unit:"U2", id:25, points:15,
    q:"Define el módulo «Canales» del Lienzo y qué preguntas clave debe responder.",
    concepts:[
      {label:"Medios para llegar a los segmentos de mercado", syn:["medios","llegar","segmentos de mercado","comunicacion","contacto con clientes"]},
      {label:"Hacer llegar la propuesta de valor", syn:["hacer llegar la propuesta","propuesta de valor","entregar valor","comunicar oferta"]},
      {label:"Establecer contacto con los clientes", syn:["contacto","contacto con sus clientes","relacion","comunicacion con clientes"]},
      {label:"¿Qué medios prefieren los clientes?", syn:["que medios prefieren","preferencias","preferidos","gustos"]},
      {label:"¿Usar todos los canales para todas las relaciones?", syn:["todos los canales","todas las relaciones","todos los segmentos","todos los tipos"]},
      {label:"¿Cuál es el coste y rentabilidad?", syn:["coste","rentabilidad","coste y rentabilidad","economia","precio del canal"]},
    ],
    model:"Módulo <b>Canales</b>: recoge la forma en la que la empresa hace llegar a los <b>segmentos de mercado</b> la <b>propuesta de valor</b>; los medios que usa para establecer contacto con sus clientes.<br><br>Preguntas clave:<br>• ¿Qué medios prefieren nuestros clientes?<br>• ¿Debe usar todos los canales para todas las relaciones?<br>• ¿Debemos usarlos de igual forma con todos los segmentos?<br>• ¿Cuál es su coste y rentabilidad?"
  },
  {
    unit:"U2", id:26, points:20,
    q:"¿Qué tipologías de modelos de relación con clientes existen en el Lienzo?",
    concepts:[
      {label:"Autoservicio (100% cliente)", syn:["autoservicio","auto servicio","100 cliente","el cliente realiza","sin atencion"]},
      {label:"Autoservicio: ejemplo cajeros automáticos", syn:["cajeros","cajero automatico","cajero","atm"]},
      {label:"Servicios automáticos (tecnología sofisticada)", syn:["servicios automaticos","automatizado","automatico","tecnologia sofisticada"]},
      {label:"Servicios automáticos: ejemplo Alexa/Amazon Echo/bots", syn:["alexa","amazon echo","echo","bots","bot","asistente virtual"]},
      {label:"Asistencia personal", syn:["asistencia personal","personal","atencion personal","trato personal"]},
      {label:"Asistencia personal: ejemplo call centers", syn:["call center","call centers","centro de llamadas","atencion telefonica"]},
      {label:"Va de relación automática a totalmente personal", syn:["espectro","desde","hasta","gama","completamente personal","100 automatizada","autoservicio a personal"]},
    ],
    model:"Tipología de modelos de relación con clientes:<br>• <b>Autoservicio</b>: el cliente realiza el 100% del servicio. Ejemplo: cajeros automáticos.<br>• <b>Servicios automáticos</b>: combina servicios automáticos con tecnología/procesos sofisticados. Ejemplo: bots de atención (Alexa, Amazon Echo).<br>• <b>Asistencia personal</b>: la empresa pone personas a disposición del cliente en alguna/todas las fases. Ejemplo: call centers.<br><br>Van desde una relación de autoservicio (100% automatizada) hasta una atención completamente personal."
  },
  {
    unit:"U2", id:27, points:15,
    q:"Define los módulos «Fuentes de ingresos» y «Estructura de costes» del Lienzo.",
    concepts:[
      {label:"Fuentes de ingresos: se generan al adquirir cliente productos/servicios", syn:["fuentes de ingresos","ingresos","se generan","cuando los clientes adquieren","cobran"]},
      {label:"Fuentes: propuesta de valor monetizada", syn:["propuesta de valor","monetizar","monetizada","cobrar por","como gana"]},
      {label:"Tipos: venta, suscripción, alquiler, licencia, comisión, publicidad", syn:["venta","suscripcion","alquiler","licencia","comision","publicidad","cuota","pago por uso"]},
      {label:"Estructura de costes: principales costes del funcionamiento", syn:["estructura de costes","costes","gastos","coste","costos"]},
      {label:"Costes generados por el modelo de negocio", syn:["genera el modelo","funcionamiento","operacion","operar"]},
      {label:"Pueden ser fijos o variables / por economías de escala", syn:["fijos","variables","economias de escala","economia de escala"]},
    ],
    model:"<b>Fuentes de ingresos</b>: se generan cuando los <b>clientes adquieren</b> los productos o servicios de la propuesta de valor. Tipos: venta, suscripción, alquiler, licencia, comisión, publicidad.<br><br><b>Estructura de costes</b>: principales costes que el modelo de negocio <b>genera para su funcionamiento</b>. Pueden ser fijos o variables, con economías de escala o no."
  },
  {
    unit:"U2", id:28, points:15,
    q:"Define los módulos «Recursos clave» y «Segmentos de mercado» del Lienzo.",
    concepts:[
      {label:"Recursos clave: activos principales", syn:["recursos clave","activos","activos principales","recursos","activos clave"]},
      {label:"Dan soporte al resto de módulos", syn:["soporte","apoyan","sustentan","resto de modulos","permiten funcionar"]},
      {label:"Tipos: físicos, intelectuales, humanos, financieros", syn:["fisicos","intelectuales","humanos","financieros","tipos de recursos","marca","patentes"]},
      {label:"Segmentos de mercado: grupos de clientes", syn:["segmentos","segmento de mercado","grupos de clientes","clientes objetivo","publico objetivo"]},
      {label:"A los que la empresa se dirige", syn:["se dirige","dirigirse","target","objetivo","atender"]},
      {label:"Necesidades y comportamientos similares", syn:["necesidades similares","mismo comportamiento","mismas necesidades","homogeneo","grupos similares"]},
    ],
    model:"<b>Recursos clave</b>: son los <b>activos principales</b> necesarios para dar soporte al resto de módulos. Pueden ser físicos, intelectuales (marca, patentes), humanos o financieros.<br><br><b>Segmentos de mercado</b>: son los <b>grupos de clientes</b> (segmentos) a los que la empresa se dirige. Cada segmento agrupa clientes con necesidades y comportamientos similares."
  },
  {
    unit:"U3", id:29, points:20,
    q:"¿En qué consiste la desagregación de modelos de negocio? ¿Cuáles son los tres ejes fundamentales?",
    concepts:[
      {label:"Tres ejes/dimensiones diferentes", syn:["tres ejes","3 ejes","tres dimensiones","3 dimensiones","tres tipos","tres focos"]},
      {label:"Relación con el cliente (fidelizar, love brand)", syn:["relacion con el cliente","fidelizar","love brand","relacion duradera","nuevos clientes"]},
      {label:"Innovación del producto o servicio", syn:["innovacion","innovacion de producto","innovacion del producto","nuevos productos","novedoso","primero en llegar"]},
      {label:"Infraestructuras (gestión, mantenimiento)", syn:["infraestructura","infraestructuras","gestionar","mantener","plataformas","servidores","instalaciones"]},
      {label:"Pueden coexistir pero idealmente separados", syn:["coexisten","coexistir","separados","entidades independientes","conflictos","renuncias"]},
      {label:"Evita conflictos o renuncias", syn:["conflictos","renuncias","trade off","conflicto de intereses"]},
      {label:"Ejemplo: Amazon (AWS, retail, prime)", syn:["amazon","aws","retail","prime","ejemplo amazon"]},
    ],
    model:"La <b>desagregación</b> consiste en separar los modelos de negocio en entidades independientes con el fin de evitar conflictos o renuncias no deseadas.<br><br>Tres ejes fundamentales:<br>• <b>Relación con el cliente</b>: fidelizar y encontrar nuevos clientes, llegar a ser un <i>love Brand</i>.<br>• <b>Innovación del producto/servicio</b>: llevar productos innovadores al mercado, ser el primero en posicionarse.<br>• <b>Infraestructuras</b>: gestionar y mantener instalaciones, plataformas y servidores.<br><br>Los tres pueden coexistir, pero lo ideal es desagregarlos. Ejemplo: Amazon (retail, AWS, Prime)."
  },
  {
    unit:"U3", id:30, points:15,
    q:"¿En qué consiste el modelo «Freemium» y por qué funciona dentro de la categoría «Gratis»?",
    concepts:[
      {label:"Lo básico es gratis", syn:["basico gratis","gratuito basico","funcionalidad basica gratis","servicio basico gratis","lo basico es gratis"]},
      {label:"Los extras tienen precio / premium", syn:["extras","premium","funcionalidades premium","pagar extras","caracteristicas adicionales","pago por extras"]},
      {label:"Un segmento financia al otro", syn:["financia","subsidia","segmento financia","usuarios pagan","una parte financia"]},
      {label:"Variante del modelo Gratis", syn:["modelo gratis","variante del gratis","tipo de gratis","modelo gratuito"]},
      {label:"Conversion: convertir usuarios free en pagos", syn:["conversion","convertir","upgrade","pasar a premium","usuarios pagos"]},
      {label:"Ejemplos: juegos, software, Spotify", syn:["spotify","juegos","candy crush","dropbox","linkedin","software freemium"]},
    ],
    model:"<b>Freemium</b>: lo básico es <b>gratis</b>, los extras tienen un precio (versión <b>premium</b>).<br><br>Es una variante del modelo de negocio <b>Gratis</b>: una parte del modelo (usuarios premium) financia los productos/servicios que se ofrecen gratuitamente a otra parte (usuarios free).<br><br>Funciona porque el coste marginal de servir un usuario free es muy bajo, mientras que la masa de usuarios gratuitos permite captar una pequeña fracción que paga. Ejemplos: Spotify, Dropbox, Candy Crush, LinkedIn."
  },
  {
    unit:"U3", id:31, points:15,
    q:"En los modelos de negocio abiertos, ¿qué significa «de fuera adentro» y «de dentro afuera»?",
    concepts:[
      {label:"Crear y captar valor con socios externos", syn:["crear valor","captar valor","socios externos","colaboracion sistematica","colaboracion con externos"]},
      {label:"De fuera adentro: aprovechar ideas externas", syn:["fuera adentro","ideas externas","de fuera","ideas de fuera","aprovechar fuera","absorber"]},
      {label:"De dentro afuera: proporcionar a terceros lo no usado", syn:["dentro afuera","de dentro","proporcionar a terceros","compartir","liberar","ideas no usadas","activos no usados"]},
      {label:"Innovación abierta", syn:["innovacion abierta","open innovation","abierto"]},
      {label:"Ejemplo: software libre adaptado", syn:["software libre","open source","codigo abierto","software open"]},
    ],
    model:"Los modelos de negocio <b>abiertos</b> crean y captan valor mediante <b>colaboración sistemática con socios externos</b>.<br><br>• <b>De fuera adentro</b>: aprovechar las <b>ideas externas</b> de la empresa para innovar.<br>• <b>De dentro afuera</b>: proporcionar a terceros ideas o activos que la empresa no está utilizando.<br><br>Ejemplo: software libre. Adaptar código abierto a tus necesidades (fuera adentro) y liberar las mejoras (dentro afuera) para que otros las usen y mejoren — <b>innovación abierta</b>."
  },
  {
    unit:"U5", id:32, points:20,
    q:"¿Por qué el ser humano es un «animal irracional» en sus decisiones de consumo? Cita sesgos cognitivos.",
    concepts:[
      {label:"Decisiones no se toman en vacío, con referencia", syn:["decisiones","no se toman en vacio","relativo a referencia","con respecto a","comparado"]},
      {label:"Difícil asignar valor monetario", syn:["valor monetario","precio","cuanto vale","cuantificar","poner precio"]},
      {label:"Valor exagerado a lo que poseemos / efecto dotación", syn:["valor exagerado","poseemos","lo nuestro","endowment","efecto dotacion","mas valor a lo propio"]},
      {label:"No soportamos perder lo que tenemos / aversión a pérdida", syn:["perder","aversion a perdida","perdida","no soportamos perder","loss aversion"]},
      {label:"Expectativas modifican experiencias", syn:["expectativas","modifican experiencias","esperamos","sesgo expectativa"]},
      {label:"GRATIS tiene atractivo irresistible", syn:["gratis","atractivo","irresistible","cero","lo gratis"]},
      {label:"Inconsistencia: inmediato vs futuro", syn:["inmediato","futuro","recompensas futuras","satisfacciones inmediatas","descuento temporal","corto plazo"]},
    ],
    model:"Las decisiones humanas NO son puramente racionales. Sesgos cognitivos:<br>• <b>Referencia</b>: las decisiones no se toman en vacío, sino en relación con una referencia.<br>• <b>Valor monetario</b>: resulta difícil asignar un valor monetario a un producto.<br>• <b>Efecto Dotación</b>: otorgamos valor exagerado a lo que poseemos (más valor a posesiones propias que ajenas idénticas).<br>• <b>Aversión a la pérdida</b>: no soportamos perder lo que tenemos (más dolor por perder que alegría por ganar lo mismo).<br>• <b>Expectativas</b>: nuestras expectativas modifican nuestras experiencias.<br>• <b>¡GRATIS!</b>: tiene un atractivo casi irresistible.<br>• <b>Inconsistencia temporal</b>: tratamos de manera inconsistente las satisfacciones inmediatas frente a las recompensas futuras."
  },
  {
    unit:"U5", id:33, points:15,
    q:"Diferencia entre innovaciones continuas y discontinuas. ¿Qué dimensiones tiene la innovación desde el punto de vista comercial?",
    concepts:[
      {label:"Continuas/incrementales: mejoras pequeñas", syn:["continuas","incrementales","mejoras pequeñas","mejora incremental","sutil","progresivo"]},
      {label:"Ejemplo continua: detergente mejorado", syn:["detergente","mejorado","ejemplo continua","mejora producto","actualizacion"]},
      {label:"Discontinuas/radicales: cambio profundo", syn:["discontinuas","radicales","disruptivas","radical","rupturas","disruptiva"]},
      {label:"Ejemplo discontinua: coche hidrógeno", syn:["coche hidrogeno","hidrogeno","ejemplo radical","tecnologia nueva"]},
      {label:"Innovación = discontinuidad (tradicional)", syn:["innovacion igual discontinuidad","tradicionalmente","sinonimo","tradicional"]},
      {label:"Acelerador: beneficios de adoptarla", syn:["acelerador","beneficios","beneficios de adoptarla","ganancias","ventajas adopcion"]},
      {label:"Freno: costes de adoptarla", syn:["freno","costes","costes de adoptarla","perdidas","barreras adopcion","resistencia"]},
    ],
    model:"<b>Continuas (incrementales)</b>: mejoras pequeñas sobre lo existente. Ejemplo: detergente mejorado.<br><b>Discontinuas (radicales)</b>: cambio profundo o ruptura. Ejemplo: coche de hidrógeno.<br><br>Tradicionalmente <b>INNOVACIÓN = DISCONTINUIDAD</b>.<br><br>Desde el punto de vista comercial, dos dimensiones:<br>• <b>Acelerador</b>: beneficios de adoptarla.<br>• <b>Freno</b>: costes de adoptarla.<br><br>El riesgo es cegarse con los beneficios (habitual en tecnólogos) y olvidar los costes percibidos por el cliente."
  },
  {
    unit:"U5", id:34, points:20,
    q:"Según Rogers, ¿qué factores hacen que un producto sea fácil de adoptar?",
    concepts:[
      {label:"Ventaja relativa (+)", syn:["ventaja relativa","ventajas","mas beneficios","menos costes","superior a alternativas","mejor que alternativa"]},
      {label:"Ventaja: beneficios funcionales/emocionales/económicos", syn:["funcional","emocional","economico","beneficios funcionales","dimensiones beneficios"]},
      {label:"Compatibilidad (+)", syn:["compatibilidad","compatible","encaja","encaje","valores","experiencias","practicas","infraestructuras"]},
      {label:"Complejidad (−)", syn:["complejidad","complejo","dificil","sencillez","simple","facil de entender","dificultad uso"]},
      {label:"Facilidad de prueba (+)", syn:["facilidad de prueba","probar","prueba","testear","trial","probable","probabilidad"]},
      {label:"Observabilidad (+)", syn:["observabilidad","observable","visible","resultados aportados","ver el uso","se ve"]},
      {label:"Cinco factores de Rogers", syn:["rogers","cinco factores","5 factores","cinco caracteristicas"]},
    ],
    model:"Según <b>Rogers</b>, cinco factores hacen un producto fácil de adoptar:<br>• <b>Ventaja relativa</b> (+): más beneficios o menos costes (funcionales, emocionales, económicos) que las alternativas.<br>• <b>Compatibilidad</b> (+): con valores, experiencias, prácticas e infraestructuras del cliente.<br>• <b>Complejidad</b> (−): cuanto más simple/fácil de entender, mejor.<br>• <b>Facilidad de prueba</b> (+): cuanto más fácil de probar antes de comprar, mejor.<br>• <b>Observabilidad</b> (+): cuanto más visibles sean su uso y resultados, mejor."
  },
  {
    unit:"U5", id:35, points:15,
    q:"¿Cuáles son las tres dimensiones del valor para el cliente y qué pregunta clave responde cada una?",
    concepts:[
      {label:"Tres dimensiones", syn:["tres dimensiones","3 dimensiones","tres tipos","tres aspectos"]},
      {label:"Valor funcional (la razón)", syn:["funcional","la razon","racional","logica","utilidad"]},
      {label:"Funcional: ¿qué permite hacer / eficaz?", syn:["que permite hacer","eficaz","eficacia","trabajo bien","funciona","hacer mejor"]},
      {label:"Valor emocional (el corazón)", syn:["emocional","corazon","sentimientos","afectivo","emociones"]},
      {label:"Emocional: ¿cómo me hace sentir?", syn:["como me hace sentir","sentirse","seguro","valorado","respetado","querido","status"]},
      {label:"Valor económico (la cartera)", syn:["economico","cartera","dinero","monetario","racional economico"]},
      {label:"Económico: ¿recursos/tiempo/dinero?", syn:["recursos","tiempo","dinero","mas eficiente","mas barato","ahorro","precio"]},
      {label:"Multidimensional con alto componente emocional", syn:["multidimensional","componente emocional","emocional dominante","percepciones"]},
    ],
    model:"Tres dimensiones del valor para el cliente:<br>• <b>Valor funcional (la razón)</b>: ¿qué me permite hacer (más y mejor)? ¿Hace su trabajo bien? ¿Es eficaz?<br>• <b>Valor emocional (el corazón)</b>: ¿cómo me hace sentir? ¿Seguro? ¿Valorado? ¿Respetado? ¿Querido?<br>• <b>Valor económico (la cartera)</b>: ¿qué significa en recursos, tiempo y dinero? ¿Me hace más eficiente? ¿Es más barato?<br><br>El valor es <b>multidimensional</b> con un <b>alto componente emocional</b>, y lo definen las <b>percepciones</b> del cliente — no los atributos del producto."
  }
];
