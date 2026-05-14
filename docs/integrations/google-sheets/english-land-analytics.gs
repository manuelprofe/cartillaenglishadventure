/**
 * English Land Analytics - Google Sheets setup
 *
 * Usage:
 * 1. Create a blank Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this file, save, and run setupEnglishLandAnalytics().
 * 4. Optional: deploy as Web App to receive events from English Land.
 */

const EL_SHEETS = {
  readme: 'README',
  raw: 'Raw_Events',
  activities: 'Activities',
  resources: 'Resources',
  metrics: 'Metrics',
  dashboard: 'Dashboard',
  webhook: 'Webhook_Log',
};

const RAW_HEADERS = [
  'event_id',
  'timestamp',
  'session_id',
  'user_role',
  'student_id',
  'group_id',
  'level',
  'activity_id',
  'activity_name',
  'activity_type',
  'resource_type',
  'resource_label',
  'action',
  'question_id',
  'prompt',
  'answer',
  'expected_answer',
  'is_correct',
  'score',
  'stars',
  'duration_sec',
  'device',
  'user_agent',
  'source_page',
  'notes',
];

const ACTIVITY_HEADERS = [
  'activity_id',
  'level',
  'activity_name',
  'topic',
  'style',
  'activity_type',
  'resource_base',
  'dba',
  'standards',
  'active',
];

const RESOURCE_HEADERS = [
  'resource_id',
  'level',
  'topic',
  'resource_type',
  'resource_label',
  'url',
  'active',
];

const WEBHOOK_HEADERS = ['timestamp', 'status', 'message', 'payload'];

const ACTIVITIES = [
  ['ACT-N1-001', 'N1', 'Picture Bingo', 'School Objects', 'visual', 'bingo', 'Flashcard + Carton Bingo', 'Reconocer objetos del aula en ingles mediante imagen y palabra.', 'Reconoce vocabulario basico relacionado con objetos del entorno.', true],
  ['ACT-N1-002', 'N1', 'Color Finder Race', 'Colors', 'visual', 'game', 'Flashcard + Plantilla Cubo', 'Identificar colores en objetos cercanos.', 'Asocia color, imagen y pronunciacion.', true],
  ['ACT-N1-003', 'N1', 'Song and Fill', 'Numbers', 'auditivo', 'song', 'Flashcards + Guia Cancion', 'Reconocer numeros mediante repeticion, ritmo y completar espacios.', 'Cuenta y reconoce numeros del 1 al 20.', true],
  ['ACT-N1-004', 'N1', 'Simon Says', 'Body Parts', 'auditivo', 'simon', 'Flashcards', 'Responder a comandos corporales simples.', 'Comprende instrucciones orales basicas.', true],
  ['ACT-N1-005', 'N1', 'Human Clock', 'Time and Numbers', 'kinestesico', 'movement', 'Flashcards de Relojes', 'Representar numeros y horas con el cuerpo.', 'Relaciona numeros con rutinas y tiempo.', true],
  ['ACT-N2-001', 'N2', 'Listen and Draw', 'Emotions', 'auditivo', 'drawing', 'Flashcards', 'Reconocer emociones por escucha y representacion grafica.', 'Identifica estados de animo en ingles.', true],
  ['ACT-N2-002', 'N2', 'Memory Match', 'Food', 'visual', 'memory', 'Flashcards', 'Emparejar alimento, imagen y palabra.', 'Asocia vocabulario con significado visual.', true],
  ['ACT-N2-003', 'N2', 'Whispering Challenge', 'Clothes', 'auditivo', 'speaking', 'Flashcards', 'Transmitir vocabulario oralmente en cadena.', 'Fortalece escucha y pronunciacion.', true],
  ['ACT-N2-004', 'N2', 'Relay Race', 'Food & Numbers', 'kinestesico', 'movement', 'Flashcards + Cesta', 'Clasificar alimentos y cantidades.', 'Usa numeros para reportar hallazgos.', true],
  ['ACT-N2-005', 'N2', 'Sound Safari', 'Animals', 'auditivo', 'listening', 'Flashcards + Audio', 'Conectar sonidos, imagenes y nombres de animales.', 'Reconoce vocabulario de animales.', true],
  ['ACT-N3-001', 'N3', 'Sentence Strip Puzzle', 'Daily Routine', 'visual', 'sentence_builder', 'Flashcards + Tiras', 'Ordenar rutinas y construir frases simples.', 'Organiza frases sobre actividades diarias.', true],
  ['ACT-N3-002', 'N3', 'Board Game Bottle', 'Vocabulary General', 'social', 'board_game', 'Plantilla tablero + Dado', 'Reforzar vocabulario mediante tablero colaborativo.', 'Recupera vocabulario en contexto ludico.', true],
  ['ACT-N3-003', 'N3', 'Charades', 'Verbs', 'kinestesico', 'mime', 'Flashcards de Verbos', 'Representar verbos y adivinarlos oralmente.', 'Produce verbos de accion en ingles.', true],
  ['ACT-N3-004', 'N3', 'Order Race', 'Days of the Week', 'kinestesico', 'ordering', 'Tarjetas + Calendario', 'Ordenar dias de la semana.', 'Secuencia vocabulario temporal.', true],
  ['ACT-N3-005', 'N3', 'Action Cards Challenge', "Can / Can't", 'kinestesico', 'challenge', 'Flashcards de Acciones', 'Expresar habilidades y limitaciones.', 'Usa can/cant en frases simples.', true],
  ['ACT-N4-001', 'N4', 'Spot the Difference', 'There is / There are', 'visual', 'observation', 'Plantilla dos imagenes', 'Describir diferencias usando there is/there are.', 'Describe escenas con estructuras simples.', true],
  ['ACT-N4-002', 'N4', 'My Town Map', 'Places in Town', 'visual', 'project', 'Flashcards + Mapa', 'Construir y presentar un mapa del pueblo.', 'Nombra y ubica lugares de la comunidad.', true],
  ['ACT-N4-003', 'N4', 'Letter to a Friend', 'Adjectives', 'lectoescritor', 'writing', 'Plantilla carta + Worksheet', 'Escribir una carta breve con adjetivos.', 'Describe personas usando oraciones simples.', true],
  ['ACT-N4-004', 'N4', 'Speed Dating', 'Dialogues', 'social', 'dialogue', 'Tarjetas de preguntas', 'Practicar dialogos breves por turnos.', 'Interactua en situaciones cotidianas.', true],
  ['ACT-N4-005', 'N4', "What's in Your Backpack", 'There is / There are', 'kinestesico', 'speaking', 'Flashcards de Objetos', 'Describir objetos reales de la mochila.', 'Usa there is/there are con objetos cotidianos.', true],
];

const RESOURCES = [
  ['RES-DOWNLOADS', 'ALL', 'All topics', 'downloadable_files', 'Archivos descargables', 'assets/downloads/english-land-archivos-descargables.zip', true],
  ['RES-YOUTUBE', 'ALL', 'All topics', 'youtube', 'YouTube', 'https://www.youtube.com/results?search_query=English+ESL+kids+vocabulary+third+grade', true],
  ['RES-KAHOOT', 'ALL', 'All topics', 'kahoot', 'Kahoot', 'https://create.kahoot.it/search-results/all?query=English%20ESL%20kids%20vocabulary%20third%20grade', true],
  ['RES-WORDWALL', 'ALL', 'All topics', 'wordwall', 'Wordwall', 'https://wordwall.net/en-us/community/english-esl-kids-vocabulary', true],
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('English Land')
    .addItem('Configurar analytics', 'setupEnglishLandAnalytics')
    .addItem('Actualizar dashboard', 'refreshEnglishLandDashboard')
    .addToUi();
}

function setupEnglishLandAnalytics() {
  const ss = SpreadsheetApp.getActive();
  const readme = getOrCreateSheet_(ss, EL_SHEETS.readme);
  const raw = getOrCreateSheet_(ss, EL_SHEETS.raw);
  const activities = getOrCreateSheet_(ss, EL_SHEETS.activities);
  const resources = getOrCreateSheet_(ss, EL_SHEETS.resources);
  const metrics = getOrCreateSheet_(ss, EL_SHEETS.metrics);
  const dashboard = getOrCreateSheet_(ss, EL_SHEETS.dashboard);
  const webhook = getOrCreateSheet_(ss, EL_SHEETS.webhook);

  setupReadme_(readme);
  setupTable_(raw, RAW_HEADERS, []);
  setupTable_(activities, ACTIVITY_HEADERS, ACTIVITIES);
  setupTable_(resources, RESOURCE_HEADERS, RESOURCES);
  setupTable_(webhook, WEBHOOK_HEADERS, []);
  setupMetrics_(metrics);
  setupDashboard_(dashboard);
  setupValidations_(raw);

  ss.setActiveSheet(dashboard);
  SpreadsheetApp.flush();
}

function refreshEnglishLandDashboard() {
  setupMetrics_(getOrCreateSheet_(SpreadsheetApp.getActive(), EL_SHEETS.metrics));
  setupDashboard_(getOrCreateSheet_(SpreadsheetApp.getActive(), EL_SHEETS.dashboard));
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || '{}');
    var events = Array.isArray(payload.events) ? payload.events : [payload];
    var eventRows = events.map(normalizeEvent_);
    var ss = SpreadsheetApp.getActive();
    var raw = getOrCreateSheet_(ss, EL_SHEETS.raw);
    ensureHeaders_(raw, RAW_HEADERS);
    raw.getRange(raw.getLastRow() + 1, 1, eventRows.length, RAW_HEADERS.length).setValues(eventRows);
    logWebhook_('ok', eventRows.length + ' event(s) saved', payload);
    return jsonResponse_({ ok: true, saved: eventRows.length });
  } catch (err) {
    logWebhook_('error', err.message, e && e.postData ? e.postData.contents : '');
    return jsonResponse_({ ok: false, error: err.message });
  }
}

function doGet(e) {
  var mode = e && e.parameter ? e.parameter.mode : '';
  if (mode === 'metrics') {
    var ss = SpreadsheetApp.getActive();
    var metrics = getOrCreateSheet_(ss, EL_SHEETS.metrics);
    return jsonResponse_({
      ok: true,
      summary: metrics.getRange('A4:B11').getDisplayValues(),
      answersByLevel: metrics.getRange('D4:G8').getDisplayValues(),
      resources: metrics.getRange('A15:B20').getDisplayValues(),
      errorsByActivity: metrics.getRange('A25:B40').getDisplayValues()
    });
  }
  return jsonResponse_({ ok: true, service: 'English Land Analytics' });
}

function normalizeEvent_(event) {
  const now = new Date();
  return RAW_HEADERS.map(header => {
    switch (header) {
      case 'event_id':
        return event.event_id || Utilities.getUuid();
      case 'timestamp':
        return event.timestamp ? new Date(event.timestamp) : now;
      case 'is_correct':
        return event.is_correct === true || event.is_correct === 'TRUE';
      case 'score':
      case 'stars':
      case 'duration_sec':
        return Number(event[header] || 0);
      default:
        return event[header] == null ? '' : event[header];
    }
  });
}

function setupReadme_(sheet) {
  sheet.clear();
  const values = [
    ['English Land Analytics'],
    ['Esta hoja recopila uso de actividades y recursos para tomar decisiones pedagogicas.'],
    ['Flujo sugerido'],
    ['1. Raw_Events recibe cada respuesta, click o uso de recurso.'],
    ['2. Metrics calcula resumenes por nivel, actividad, recurso y fecha.'],
    ['3. Dashboard muestra graficas actualizadas automaticamente.'],
    ['Campos clave'],
    ['is_correct: TRUE/FALSE para respuestas; vacio para eventos de solo uso.'],
    ['action: answer_submitted, resource_opened, game_started, game_completed, download_clicked, etc.'],
    ['resource_type: downloadable_files, youtube, kahoot, wordwall.'],
  ];
  sheet.getRange(1, 1, values.length, 1).setValues(values);
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setFontColor('#21124A');
  sheet.getRange('A3').setFontWeight('bold').setFontColor('#5E3AE2');
  sheet.getRange('A7').setFontWeight('bold').setFontColor('#5E3AE2');
  sheet.setColumnWidth(1, 760);
}

function setupTable_(sheet, headers, rows) {
  sheet.clear();
  ensureHeaders_(sheet, headers);
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  const range = sheet.getRange(1, 1, Math.max(rows.length + 1, 2), headers.length);
  range.createFilter();
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground('#21124A')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold');
  sheet.autoResizeColumns(1, headers.length);
}

function ensureHeaders_(sheet, headers) {
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}

function setupValidations_(raw) {
  const validations = [
    { col: 4, values: ['teacher', 'student', 'anonymous'] },
    { col: 7, values: ['N1', 'N2', 'N3', 'N4', 'ALL'] },
    { col: 10, values: ['bingo', 'simon', 'memory', 'sentence_builder', 'runner', 'resource', 'assessment', 'other'] },
    { col: 11, values: ['downloadable_files', 'youtube', 'kahoot', 'wordwall', 'internal_game', 'none'] },
    { col: 13, values: ['answer_submitted', 'resource_opened', 'download_clicked', 'game_started', 'game_completed', 'card_printed', 'card_downloaded'] },
    { col: 18, values: ['TRUE', 'FALSE'] },
  ];
  validations.forEach(rule => {
    const validation = SpreadsheetApp.newDataValidation()
      .requireValueInList(rule.values, true)
      .setAllowInvalid(true)
      .build();
    raw.getRange(2, rule.col, 20000, 1).setDataValidation(validation);
  });
}

function setupMetrics_(sheet) {
  sheet.clear();
  sheet.getRange('A1').setValue('English Land Metrics').setFontSize(18).setFontWeight('bold');

  const blocks = [
    ['A3', 'Resumen general', [
      ['Metric', 'Value'],
      ['Total eventos', '=COUNTA(Raw_Events!A2:A)'],
      ['Respuestas registradas', '=COUNTIF(Raw_Events!M2:M,"answer_submitted")'],
      ['Respuestas correctas', '=COUNTIFS(Raw_Events!M2:M,"answer_submitted",Raw_Events!R2:R,TRUE)'],
      ['Respuestas incorrectas', '=COUNTIFS(Raw_Events!M2:M,"answer_submitted",Raw_Events!R2:R,FALSE)'],
      ['Precision', '=IFERROR(B6/B4,0)'],
      ['Recursos abiertos', '=COUNTIFS(Raw_Events!M2:M,"resource_opened") + COUNTIFS(Raw_Events!M2:M,"download_clicked")'],
      ['Estrellas acumuladas', '=SUM(Raw_Events!T2:T)'],
    ]],
    ['D3', 'Respuestas por nivel', [
      ['Level', 'Correct', 'Incorrect', 'Accuracy'],
      ['N1', '=COUNTIFS(Raw_Events!G:G,D5,Raw_Events!R:R,TRUE)', '=COUNTIFS(Raw_Events!G:G,D5,Raw_Events!R:R,FALSE)', '=IFERROR(E5/(E5+F5),0)'],
      ['N2', '=COUNTIFS(Raw_Events!G:G,D6,Raw_Events!R:R,TRUE)', '=COUNTIFS(Raw_Events!G:G,D6,Raw_Events!R:R,FALSE)', '=IFERROR(E6/(E6+F6),0)'],
      ['N3', '=COUNTIFS(Raw_Events!G:G,D7,Raw_Events!R:R,TRUE)', '=COUNTIFS(Raw_Events!G:G,D7,Raw_Events!R:R,FALSE)', '=IFERROR(E7/(E7+F7),0)'],
      ['N4', '=COUNTIFS(Raw_Events!G:G,D8,Raw_Events!R:R,TRUE)', '=COUNTIFS(Raw_Events!G:G,D8,Raw_Events!R:R,FALSE)', '=IFERROR(E8/(E8+F8),0)'],
    ]],
    ['A14', 'Uso de recursos', [
      ['Resource type', 'Events'],
      ['downloadable_files', '=COUNTIF(Raw_Events!K:K,A16)'],
      ['youtube', '=COUNTIF(Raw_Events!K:K,A17)'],
      ['kahoot', '=COUNTIF(Raw_Events!K:K,A18)'],
      ['wordwall', '=COUNTIF(Raw_Events!K:K,A19)'],
      ['internal_game', '=COUNTIF(Raw_Events!K:K,A20)'],
    ]],
    ['D14', 'Uso por dia', [
      ['Date', 'Events'],
      ["=QUERY({ARRAYFORMULA(IF(Raw_Events!B2:B=\"\",,TO_DATE(INT(Raw_Events!B2:B)))),Raw_Events!A2:A},\"select Col1, count(Col2) where Col1 is not null group by Col1 order by Col1 label Col1 'Fecha', count(Col2) 'Eventos'\",0)", ''],
    ]],
    ['A24', 'Actividad con mas errores', [
      ['Activity', 'Incorrect'],
      ["=QUERY(Raw_Events!I2:R,\"select I, count(R) where R = FALSE and I is not null group by I order by count(R) desc label I 'Actividad', count(R) 'Errores'\",0)", ''],
    ]],
  ];

  blocks.forEach(block => writeBlock_(sheet, block[0], block[1], block[2]));
  sheet.getRange('B8').setNumberFormat('0.0%');
  sheet.getRange('G5:G8').setNumberFormat('0.0%');
  sheet.autoResizeColumns(1, 8);
}

function writeBlock_(sheet, startA1, title, values) {
  const start = sheet.getRange(startA1);
  const row = start.getRow();
  const col = start.getColumn();
  sheet.getRange(row, col).setValue(title).setFontWeight('bold').setFontColor('#5E3AE2');
  sheet.getRange(row + 1, col, values.length, values[0].length).setValues(values);
  sheet.getRange(row + 1, col, 1, values[0].length)
    .setBackground('#21124A')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold');
}

function setupDashboard_(sheet) {
  sheet.clear();
  sheet.getRange('A1').setValue('English Land Dashboard').setFontSize(22).setFontWeight('bold').setFontColor('#21124A');
  sheet.getRange('A2').setValue('Panel actualizado desde Raw_Events. Las graficas cambian cuando se agregan nuevos registros.');

  const cards = [
    ['Total eventos', '=Metrics!B5'],
    ['Precision', '=Metrics!B8'],
    ['Recursos abiertos', '=Metrics!B9'],
    ['Estrellas', '=Metrics!B10'],
  ];
  sheet.getRange(4, 1, 1, 4).setValues([cards.map(c => c[0])]);
  sheet.getRange(5, 1, 1, 4).setValues([cards.map(c => c[1])]);
  sheet.getRange('A4:D4').setBackground('#21124A').setFontColor('#FFFFFF').setFontWeight('bold');
  sheet.getRange('A5:D5').setFontSize(18).setFontWeight('bold').setBackground('#F7F2FF');
  sheet.getRange('B5').setNumberFormat('0.0%');

  sheet.getCharts().forEach(chart => sheet.removeChart(chart));
  addChart_(sheet, 'Metrics!D4:F8', 8, 1, Charts.ChartType.COLUMN, 'Correctas vs incorrectas por nivel');
  addChart_(sheet, 'Metrics!A15:B20', 8, 7, Charts.ChartType.PIE, 'Uso de recursos');
  addChart_(sheet, 'Metrics!D15:E40', 24, 1, Charts.ChartType.LINE, 'Eventos por dia');
  addChart_(sheet, 'Metrics!A25:B40', 24, 7, Charts.ChartType.BAR, 'Actividades con mas errores');

  sheet.setColumnWidths(1, 10, 120);
}

function addChart_(sheet, a1, row, col, type, title) {
  const ss = SpreadsheetApp.getActive();
  const range = ss.getRange(a1);
  const chart = sheet.newChart()
    .setChartType(type)
    .addRange(range)
    .setPosition(row, col, 0, 0)
    .setOption('title', title)
    .setOption('legend', { position: 'right' })
    .setOption('colors', ['#5E3AE2', '#FF4F8B', '#18C8FF', '#FFD447'])
    .build();
  sheet.insertChart(chart);
}

function getOrCreateSheet_(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function logWebhook_(status, message, payload) {
  const ss = SpreadsheetApp.getActive();
  const sheet = getOrCreateSheet_(ss, EL_SHEETS.webhook);
  ensureHeaders_(sheet, WEBHOOK_HEADERS);
  sheet.appendRow([new Date(), status, message, typeof payload === 'string' ? payload : JSON.stringify(payload)]);
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
