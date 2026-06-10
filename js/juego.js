// ==================== CONFIG ====================
const CHARACTERS = [
  { id:'lumi',  name:'Lumi',  file:'assets/characters/lumi-wave.png',     color:'#FFD93D' },
  { id:'cosmo', name:'Cosmo', file:'assets/characters/cosmo-wave.png',    color:'#6B2FBF' },
  { id:'nova',  name:'Nova',  file:'assets/characters/nova-ready.png',    color:'#FF6B35' },
  { id:'pixie', name:'Pixie', file:'assets/characters/pixie-wave.png',    color:'#FF3D9A' },
  { id:'astro', name:'Astro', file:'assets/characters/astro-wave.png',    color:'#B8D9FF' },
];

const LEVELS = [
  { num:1, title:'English Explorer',     topic:'El Bosque de los Sonidos',  pensum:'Yo y mi mundo cercano',     bgFolder:'fondos/nivel1' },
  { num:2, title:'Word Builder',         topic:'El Valle de las Palabras',  pensum:'Mis gustos y mi entorno',   bgFolder:'fondos/nivel2' },
  { num:3, title:'Sentence Hero',        topic:'La Ciudad de las Frases',   pensum:'Mi día a día y rutinas',    bgFolder:'fondos/nivel3' },
  { num:4, title:'English Communicator', topic:'La Plaza del Encuentro',    pensum:'Mi comunidad y el mundo',   bgFolder:'fondos/nivel4' },
];

// ==================== QUESTION_BANK DEL RUNNER ====================
// Adventure Runner usa este banco como fuente unica para estaciones y rescates.
const QUESTION_BANK = {
  1: [
    { q:'Which greeting is used in the morning?', options:['Good afternoon','Good morning','Good night','Hello evening'], correct:1, hint:'Before noon we say "Good morning".', skill:'greetings' },
    { q:'Choose the best answer: "How are you?"', options:['I am fine, thanks.','I am seven.','My name is blue.','It is Monday.'], correct:0, hint:'Answer with a feeling or state.', skill:'greetings' },
    { q:'What color is the sky on a clear day?', options:['Green','Yellow','Blue','Orange'], correct:2, hint:'Look up on a sunny day.', skill:'colors' },
    { q:'Which color is NOT in a traffic light?', options:['Red','Yellow','Green','Purple'], correct:3, hint:'Traffic lights usually have three colors.', skill:'colors' },
    { q:'Count: 5, 10, ___, 20. What is the missing number?', options:['12','16','8','15'], correct:3, hint:'Count by fives.', skill:'numbers' },
    { q:'How do you say the number 7 in English?', options:['Six','Eight','Seven','Nine'], correct:2, hint:'One, two, three, four, five, six...', skill:'numbers' },
    { q:'The number 15 is written as:', options:['Fifteen','Fiveteen','Fitteen','Fiften'], correct:0, hint:'The correct spelling has "fif".', skill:'numbers' },
    { q:'Complete: "This is my ___." (female parent)', options:['brother','father','mother','sister'], correct:2, hint:'Mother means mama.', skill:'family' },
    { q:'What is a family member?', options:['Teacher','Sister','Student','Friend'], correct:1, hint:'A sister can share parents with you.', skill:'family' },
    { q:'Which word means "abuelo"?', options:['Grandfather','Grandmother','Cousin','Uncle'], correct:0, hint:'Grandfather is male.', skill:'family' },
    { q:'Which is a school object?', options:['Apple','Pencil','Chair','Door'], correct:1, hint:'You use it to write.', skill:'classroom' },
    { q:'Choose the classroom object.', options:['Book','Banana','Dog','Shoes'], correct:0, hint:'You read it at school.', skill:'classroom' },
    { q:'Which sentence is correct?', options:['This are a book','This is a book','This am a book','This be a book'], correct:1, hint:'Use "is" with one object.', skill:'to be' },
    { q:'Complete: "I ___ happy."', options:['am','is','are','be'], correct:0, hint:'With "I" use "am".', skill:'to be' },
    { q:'Complete: "She ___ my friend."', options:['am','are','is','be'], correct:2, hint:'With he/she/it use "is".', skill:'to be' },
    { q:'Choose the correct introduction.', options:['My name is Sofia.','My name are Sofia.','I name Sofia.','Me is Sofia.'], correct:0, hint:'Use "My name is...".', skill:'introductions' },
    { q:'What does "Goodbye" mean?', options:['Hola','Gracias','Adios','Perdon'], correct:2, hint:'You say it when you leave.', skill:'greetings' },
    { q:'What does "Please" mean?', options:['Por favor','Gracias','Buenos dias','Azul'], correct:0, hint:'It makes a request polite.', skill:'polite words' },
    { q:'Complete: "Thank you!" "___"', options:['You are welcome.','I am ten.','It is red.','Good night blue.'], correct:0, hint:'This is a polite reply.', skill:'polite words' },
    { q:'Which answer matches "What is your name?"', options:['My name is Leo.','I am fine.','It is a pencil.','I like apples.'], correct:0, hint:'The question asks for a name.', skill:'introductions' },
  ],
  2: [
    { q:'Which is a food item?', options:['Shirt','Apple','Dog','Happy'], correct:1, hint:'Food is something you eat.', skill:'food' },
    { q:'Complete: "I like ___."', options:['dislike','hate','pizza','anger'], correct:2, hint:'Pizza is a food.', skill:'likes' },
    { q:'"I don\'t like" expresses:', options:['Positive feeling','Negative feeling','Neutral feeling','Confused feeling'], correct:1, hint:'Don\'t makes the idea negative.', skill:'likes' },
    { q:'How do you express preference?', options:['I am','I like','I go','I have'], correct:1, hint:'Use "I like" for gustos.', skill:'likes' },
    { q:'What emotion describes feeling glad?', options:['Sad','Angry','Happy','Scared'], correct:2, hint:'Happy is the opposite of sad.', skill:'emotions' },
    { q:'Choose the emotion.', options:['Bread','Angry','Shoes','Bird'], correct:1, hint:'Angry is how you feel when mad.', skill:'emotions' },
    { q:'Which is an animal?', options:['Orange','Skirt','Lion','Bread'], correct:2, hint:'The lion is an animal.', skill:'animals' },
    { q:'Which animal is NOT a pet?', options:['Dog','Cat','Lion','Rabbit'], correct:2, hint:'A lion is a wild animal.', skill:'animals' },
    { q:'Which animal can fly?', options:['Fish','Bird','Cat','Horse'], correct:1, hint:'A bird has wings.', skill:'animals' },
    { q:'What do you wear on your body?', options:['Eat','Clothes','Run','Sleep'], correct:1, hint:'Clothes means ropa.', skill:'clothes' },
    { q:'Which is a clothing item?', options:['Carrot','Fish','Shoes','Bird'], correct:2, hint:'You wear them on your feet.', skill:'clothes' },
    { q:'Choose the plural form of "cat".', options:['Cat','Cats','Cates','Catss'], correct:1, hint:'Regular plurals usually add -s.', skill:'plurals' },
    { q:'Choose the plural form of "box".', options:['Boxs','Boxes','Boxies','Boxen'], correct:1, hint:'Words ending in x often add -es.', skill:'plurals' },
    { q:'Complete: "She ___ a dog."', options:['have','has','is have','haves'], correct:1, hint:'With she/he/it use "has".', skill:'have/has' },
    { q:'Complete: "They ___ two books."', options:['has','is','have','haves'], correct:2, hint:'With they use "have".', skill:'have/has' },
    { q:'What is the opposite of "big"?', options:['Small','Tall','Fast','New'], correct:0, hint:'Big and small are opposites.', skill:'opposites' },
    { q:'What is the opposite of "hot"?', options:['Cold','Happy','Short','Old'], correct:0, hint:'Hot and cold describe temperature.', skill:'opposites' },
    { q:'What\'s your favorite ___? (food category)', options:['shirt','fruit','animal','toy'], correct:1, hint:'Fruit is food.', skill:'food' },
    { q:'Choose the correct sentence.', options:['I like apples.','I likes apples.','I liking apples.','I am like apples.'], correct:0, hint:'Use base verb after I.', skill:'likes' },
    { q:'Complete: "My favorite animal is a ___."', options:['blue','rabbit','happy','shirt'], correct:1, hint:'Rabbit is an animal.', skill:'animals' },
  ],
  3: [
    { q:'Which is a daily routine?', options:['Fly','Eat breakfast','Disappear','Imagine'], correct:1, hint:'Many people do it in the morning.', skill:'routines' },
    { q:'Which activity is part of a daily routine?', options:['Sleep','Fly','Swim','Jump'], correct:0, hint:'You do it at night to rest.', skill:'routines' },
    { q:'Complete: "I ___ to school at 7:00."', options:['eat','play','go','like'], correct:2, hint:'Go means ir.', skill:'routines' },
    { q:'Complete: "I ___ lunch at 12:00."', options:['go','have','like','play'], correct:1, hint:'Have lunch means almorzar.', skill:'routines' },
    { q:'What question asks for the time?', options:['What is it?','What time is it?','When is it?','How time is it?'], correct:1, hint:'Use "What time..." for the hour.', skill:'time' },
    { q:'"What time is it?" is used to ask:', options:['About dates','About the hour','About the day','About the season'], correct:1, hint:'Time can mean hora.', skill:'time' },
    { q:'Choose the correct time answer.', options:['It is seven o\'clock.','It are seven.','It seven clock.','Seven is it.'], correct:0, hint:'Use "It is..." for time.', skill:'time' },
    { q:'What does "Can you play football?" mean?', options:['Is it possible for you to play football?','You don\'t play football','Do you like football?','Football is a game'], correct:0, hint:'Can asks about ability.', skill:'can/can\'t' },
    { q:'"Can\'t" means:', options:['Can do','Cannot do','Can try','Can learn'], correct:1, hint:'Can + not = cannot.', skill:'can/can\'t' },
    { q:'Choose the correct sentence:', options:['I play are football','I can play football','I can plays football','I plays can football'], correct:1, hint:'Can + base verb.', skill:'can/can\'t' },
    { q:'What is the negative form of "I can swim"?', options:['I can\'t swim','I don\'t can swim','I not can swim','I swimming not'], correct:0, hint:'Use can\'t for negative ability.', skill:'can/can\'t' },
    { q:'Complete: "She is ___ a book."', options:['read','reads','reading','to read'], correct:2, hint:'Present continuous: be + verb-ing.', skill:'present continuous' },
    { q:'Choose the present continuous sentence.', options:['They are playing.','They play are.','They is playing.','They playing are.'], correct:0, hint:'They + are + verb-ing.', skill:'present continuous' },
    { q:'Which word means 100% frequency?', options:['Never','Sometimes','Always','Rarely'], correct:2, hint:'Always means siempre.', skill:'frequency' },
    { q:'Which word means 0% frequency?', options:['Always','Usually','Often','Never'], correct:3, hint:'Never means nunca.', skill:'frequency' },
    { q:'Complete: "I ___ my teeth every morning."', options:['brush','brushing','brushes','am brush'], correct:0, hint:'With I use the base verb.', skill:'routines' },
    { q:'Complete: "He ___ breakfast at 6:30."', options:['have','has','having','haves'], correct:1, hint:'With he/she/it use has.', skill:'routines' },
    { q:'Choose the correct question.', options:['Do you play soccer?','Does you play soccer?','Are you play soccer?','You do play soccer?'], correct:0, hint:'Use Do with you.', skill:'do/does' },
    { q:'Choose the correct question.', options:['Does she like music?','Do she like music?','Is she like music?','She does like music?'], correct:0, hint:'Use Does with she.', skill:'do/does' },
    { q:'Complete: "I wake up ___ 6 a.m."', options:['in','on','at','to'], correct:2, hint:'Use at with exact times.', skill:'time' },
  ],
  4: [
    { q:'Which is a place in town?', options:['Happiness','Hospital','Beautiful','Quick'], correct:1, hint:'A hospital is a place.', skill:'places' },
    { q:'Complete: "___ is a hospital near my house."', options:['There are','There is','They are','It is'], correct:1, hint:'Use There is with one place.', skill:'there is/are' },
    { q:'Choose the correct use of "There are":', options:['There are a cat','There are two cats','There are one book','There are is a park'], correct:1, hint:'Use There are with plurals.', skill:'there is/are' },
    { q:'Which sentence correctly uses "There is"?', options:['There is five houses','There is a beautiful park','There is many people','There is are stores'], correct:1, hint:'There is + singular noun.', skill:'there is/are' },
    { q:'Complete the dialogue: "Where is the bank?" "___"', options:['It is big','It is beautiful','It is near the park','It is small'], correct:2, hint:'The answer gives location.', skill:'directions' },
    { q:'Which word gives location?', options:['Near','Friendly','Beautiful','Happy'], correct:0, hint:'Near tells where something is.', skill:'directions' },
    { q:'What does "beautiful" describe?', options:['An emotion','An action','A characteristic or quality','A place name'], correct:2, hint:'Adjectives describe qualities.', skill:'adjectives' },
    { q:'Which adjective means "small in size"?', options:['Big','Small','Large','Enormous'], correct:1, hint:'Small is the opposite of big.', skill:'adjectives' },
    { q:'A friendly person is someone who is:', options:['Angry','Kind and open','Shy','Alone'], correct:1, hint:'Friendly means amable.', skill:'adjectives' },
    { q:'In a simple dialogue, adjectives are used to:', options:['Make sentences shorter','Describe people, places, or things','Ask questions','Give commands'], correct:1, hint:'Adjectives add description.', skill:'adjectives' },
    { q:'What is the comparative of "fast"?', options:['Faster','More fast','Fastest','Fastly'], correct:0, hint:'Short adjectives often add -er.', skill:'comparatives' },
    { q:'Choose the correct comparative.', options:['My town is bigger than yours.','My town is big than yours.','My town bigger yours.','My town more bigger than yours.'], correct:0, hint:'Use adjective + er + than.', skill:'comparatives' },
    { q:'Complete: "If it rains, I ___ stay home."', options:['will','would','am','was'], correct:0, hint:'First conditional: if + present, will + verb.', skill:'conditionals' },
    { q:'Choose the first conditional sentence.', options:['If I study, I will pass.','If I studied, I pass.','If I will study, I pass.','If studying, I passed.'], correct:0, hint:'Present after if, will in the result.', skill:'conditionals' },
    { q:'Choose the passive voice sentence.', options:['The book is read by many students.','Many students read the book.','The book reads students.','Students are book read.'], correct:0, hint:'Passive uses be + past participle.', skill:'passive voice' },
    { q:'Complete the passive: "The song ___ sung by the class."', options:['is','are','do','has'], correct:0, hint:'Song is singular, so use is.', skill:'passive voice' },
    { q:'Which connector shows contrast?', options:['Because','And','However','So'], correct:2, hint:'However means sin embargo.', skill:'connectors' },
    { q:'Which connector gives a reason?', options:['Because','But','However','Although'], correct:0, hint:'Because explains why.', skill:'connectors' },
    { q:'Reported speech: He said, "I am tired." Choose the best report.', options:['He said that he was tired.','He said that I am tired.','He said tired he is.','He said that he tired.'], correct:0, hint:'Present often changes to past.', skill:'reported speech' },
    { q:'What is a simple greeting dialogue?', options:['How are you? I am fine, thanks.','What is your name?','Where are you?','Why are you here?'], correct:0, hint:'It asks and answers about feelings.', skill:'dialogues' },
  ],
};

const QUESTIONS = Object.fromEntries(
  Object.entries(QUESTION_BANK).map(([level, items]) => [
    level,
    items.map((item, index) => ({
      ...item,
      source: 'QUESTION_BANK',
      bankIndex: index + 1,
      level: Number(level),
      topic: LEVELS.find(l => l.num === Number(level))?.pensum || '',
    })),
  ])
);

const RESCUE = Object.fromEntries(
  Object.entries(QUESTIONS).map(([level, items]) => [level, items.slice(-4)])
);

// ==================== TIPS DE ESTRELLAS ====================
const STAR_TIPS = {
  1:[
    '💡 Say "Good morning!" before noon · "Good afternoon!" noon–6pm · "Good evening!" after 6pm.',
    '💡 Colors: red · blue · green · yellow · orange · purple · pink · white · black · brown.',
    '💡 "I am..." = yo soy/estoy · "My name is..." = me llamo... · "I am from..." = soy de...',
    '💡 Numbers: one · two · three · four · five · six · seven · eight · nine · ten.',
    '💡 Hello = hola · Goodbye = adiós · Please = por favor · Thank you = gracias · Sorry = perdón.',
  ],
  2:[
    '💡 Plural regular: solo añade -s. book→books · cat→cats · tree→trees.',
    '💡 "I like pizza." / "I don\'t like vegetables." Habla de tus gustos en inglés.',
    '💡 Opposites: big/small · hot/cold · fast/slow · old/new · tall/short · happy/sad.',
    '💡 She HAS a dog. He HAS a book. (tercera persona usa HAS, no HAVE).',
    '💡 Family: mother · father · sister · brother · grandmother · grandfather · cousin.',
  ],
  3:[
    '💡 Present continuous: I am + verb-ing. "She is reading." "They are playing football."',
    '💡 Frequency: always (100%) · usually · often · sometimes · rarely · never (0%).',
    '💡 Routines: wake up · brush teeth · have breakfast · go to school · do homework · go to bed.',
    '💡 "What time do you wake up?" → "I wake up at 7 a.m." Practica tu horario en inglés.',
    '💡 DO for I/you/we/they · DOES for he/she/it. "Does she like math?" "Do you play soccer?"',
  ],
  4:[
    '💡 Comparatives: big→bigger · fast→faster · beautiful→more beautiful · good→better.',
    '💡 First conditional: "If it rains, I will stay home." If + present → will + verb.',
    '💡 Passive voice: "The book is read by many people." = to be + past participle.',
    '💡 Connectors: and · but · however (sin embargo) · because · so (así que) · although (aunque).',
    '💡 Reported speech: He said, "I am tired." → He said that he WAS tired. ¡El presente se va al pasado!',
  ],
};

// ==================== TIPS DEL ASTRONAUTA (panel de lectura) ====================
const ASTRO_TIPS = {
  1: {
    title: '🚀 Consejo del Astronauta — Nivel 1',
    text: `¡Hola, explorador! 🌟 En este nivel aprendes sobre el mundo que te rodea.

🗣️ SALUDOS:
• Good morning → Buenos días (antes del mediodía)
• Good afternoon → Buenas tardes (12pm–6pm)
• Good evening → Buenas noches (al anochecer)
• Hello / Hi → ¡Hola!   •   Goodbye → Adiós

🎨 COLORES (Colors):
• Red = Rojo   •   Blue = Azul   •   Green = Verde
• Yellow = Amarillo   •   Orange = Anaranjado
• Purple = Morado   •   Pink = Rosado

🔢 NÚMEROS (Numbers):
• One · Two · Three · Four · Five
• Six · Seven · Eight · Nine · Ten
• Fifteen = 15   •   Twenty = 20

📚 OBJETOS DE ESCUELA:
• Pencil = Lápiz   •   Book = Libro   •   Ruler = Regla
• Eraser = Borrador   •   Backpack = Morral

💡 CONSEJO: Di "Good morning!" cuando llegues al colegio cada día.
¡Englishland te espera! 🌍`,
  },
  2: {
    title: '🚀 Consejo del Astronauta — Nivel 2',
    text: `¡Excelente progreso! 🌸 En este nivel aprendes gustos, animales, ropa y emociones.

🍕 ME GUSTA / NO ME GUSTA:
• I like pizza → Me gusta la pizza
• I don't like vegetables → No me gustan las verduras
• Do you like music? → ¿Te gusta la música?

🐾 ANIMALES (Animals):
• Dog = Perro   •   Cat = Gato   •   Lion = León
• Bird = Pájaro   •   Rabbit = Conejo   •   Fish = Pez

👕 ROPA (Clothes):
• Shirt = Camisa   •   Pants = Pantalón
• Shoes = Zapatos   •   Dress = Vestido
• Hat = Sombrero   •   Jacket = Chaqueta

😊 EMOCIONES (Emotions):
• Happy = Feliz   •   Sad = Triste
• Angry = Enojado   •   Scared = Asustado

👨‍👩‍👧 FAMILIA (Family):
• Mother = Mamá   •   Father = Papá
• Sister = Hermana   •   Brother = Hermano

💡 CONSEJO: Practica "I like ___" con tus comidas favoritas en inglés.`,
  },
  3: {
    title: '🚀 Consejo del Astronauta — Nivel 3',
    text: `¡Increíble, héroe de las frases! 🏙️ En este nivel dominas rutinas y la hora.

⏰ RUTINA DIARIA (Daily Routine):
• Wake up → Levantarse
• Brush teeth → Cepillarse los dientes
• Have breakfast → Desayunar
• Go to school → Ir al colegio
• Have lunch → Almorzar
• Do homework → Hacer las tareas
• Go to bed → Irse a dormir

🕐 LA HORA (Telling the time):
• What time is it? → ¿Qué hora es?
• It's 7 o'clock → Son las 7 en punto
• It's half past 8 → Son las 8 y media

✅ CAN / CAN'T (Poder / No poder):
• I can swim → Puedo nadar
• I can't fly → No puedo volar
• Can you dance? → ¿Puedes bailar?

📅 FRECUENCIA:
• Always = Siempre   •   Usually = Normalmente
• Sometimes = A veces   •   Never = Nunca

💡 CONSEJO: Describe tu rutina en inglés esta noche antes de dormir.`,
  },
  4: {
    title: '🚀 Consejo del Astronauta — Nivel 4',
    text: `¡Eres un comunicador experto! ✨ En este nivel exploras la ciudad y los diálogos.

🏙️ LUGARES EN LA CIUDAD (Places in Town):
• Hospital = Hospital   •   School = Colegio
• Park = Parque   •   Bank = Banco
• Market = Mercado   •   Library = Biblioteca

📍 THERE IS / THERE ARE:
• There is a park → Hay un parque (singular)
• There are two schools → Hay dos colegios (plural)
• Is there a bank? → ¿Hay un banco?
• Are there stores? → ¿Hay tiendas?

✨ ADJETIVOS DESCRIPTIVOS:
• Beautiful = Hermoso/a   •   Small = Pequeño/a
• Big = Grande   •   Friendly = Amigable
• Kind = Amable   •   Near = Cerca   •   Far = Lejos

💬 DIÁLOGOS SIMPLES:
• "How are you?" → ¿Cómo estás?
• "I'm fine, thanks." → Estoy bien, gracias.
• "Where is the park?" → ¿Dónde está el parque?
• "It is near the bank." → Está cerca del banco.

💡 CONSEJO: ¡Felicitaciones! Completar este nivel te hace un aventurero del inglés. 🏆`,
  },
};

// ==================== HISTORIAS DE Englishland ====================
// Narrativa oficial de English Adventure Quest, con code-switching progresivo.
// Las palabras en inglés van entre <strong class="en">...</strong>.
// Uso: innerHTML (no textContent) en showStory.

const ENGLISH_LAND_INTRO = `Era un día común en el salón de clase. Los lápices estaban sobre las mesas, los cuadernos esperaban ser abiertos y el tablero parecía listo para una nueva lección.

Pero ese día algo diferente ocurrió.

Sobre el escritorio apareció un cuaderno azul con estrellas doradas. En la portada brillaba una palabra:

<strong class="en">Englishland</strong>

El cuaderno hizo <em>plip, plip</em>. Sus páginas se movieron solas y una luz rosada salió volando.

—¡Cuidado! Soy <strong class="en">Pixie</strong>. Vengo de Englishland y necesitamos ayuda.

El cuaderno mostró un cielo morado, caminos de estrellas, árboles luminosos y palabras flotando. Pero algunas palabras estaban perdiendo su luz: <strong class="en">hello</strong>, <strong class="en">book</strong>, <strong class="en">friend</strong>, <strong class="en">I can</strong>.

Entonces apareció Lumi, una estrella amarilla con mochila de luces.

—<strong class="en">Hi!</strong> Soy Lumi. En Englishland las palabras viven cuando alguien las escucha, las lee, las dice y las usa. Cuando los niños sienten miedo de equivocarse o se quedan callados, las palabras empiezan a apagarse.

Lumi levantó una pequeña estrella.

—Estas son las <strong class="en">Mission Stars</strong>. No son notas ni castigos. Son luces de esfuerzo, participación, ayuda y confianza. Aparecen cada vez que intentas, corriges y te atreves a usar el inglés.

—¿Aunque nos equivoquemos? - preguntó alguien.

—Especialmente cuando lo intentan. <strong class="en">Trying is learning.</strong>

Pixie abrió el mapa del cuaderno: Bosque de los Sonidos, Valle de las Palabras, Ciudad de las Frases y Plaza del Encuentro.

—Entonces, exploradores... ¿vienen a ayudar a Englishland?

El grupo respiró hondo y respondió:

<strong class="en">Yes. We are ready.</strong>`;

// Historias de apertura — se muestran al entrar al nivel
const LEVEL_STORIES = {
  0: ENGLISH_LAND_INTRO,

  1:`🟣 <strong class="en">Nivel 1 · English Explorer</strong>

El portal del cuaderno llevó al grupo hasta el <strong class="en">Bosque de los Sonidos</strong>. Los árboles tenían hojas de colores, los caminos brillaban como polvo de estrellas y en el aire se escuchaban sonidos incompletos.

—<strong class="en">He... he...</strong> - decía una voz entre los árboles.

—<strong class="en">Blu... blu...</strong> - susurraba una hoja azul.

—<strong class="en">One... two...</strong> - cantaban unas piedras pequeñas, pero no podían continuar.

Entonces apareció <strong class="en">Cosmo</strong>, un guardián tranquilo con brillo violeta.

—Bienvenidos al Bosque de los Sonidos. Este es el primer territorio de Englishland. Aquí nacen las palabras, pero muchas están dormidas.

Cosmo señaló una palabra que flotaba:

<strong class="en">hello</strong>

—Para despertar Englishland, primero debemos escuchar y repetir sin miedo. Cada intento enciende un poquito más la palabra.

Lumi sonrió:

—Hoy serán <strong class="en">English Explorers</strong>. Descubrirán saludos, colores, números, objetos del colegio y primeras expresiones.

Cosmo levantó una Mission Star.

—Repeat with me: <strong class="en">Hello!</strong>

Y cuando el grupo lo dijo, una rama del bosque se iluminó.`,

  2:`🟠 <strong class="en">Nivel 2 · Word Builder</strong>

Después de cruzar el bosque, el grupo llegó al <strong class="en">Valle de las Palabras</strong>. Había tarjetas flotantes con animales, comida, ropa y emociones.

Pero las tarjetas estaban confundidas. Una manzana decía <strong class="en">shoes</strong>. Una camiseta decía <strong class="en">lion</strong>. Un rostro feliz decía <strong class="en">sad</strong>.

—¡Oh, no! - exclamó Pixie -. El valle perdió sus conexiones.

Una luz naranja pasó a toda velocidad y frenó frente al grupo.

—<strong class="en">Welcome!</strong> Soy <strong class="en">Nova</strong>. Este es el Valle de las Palabras, donde cada imagen debe encontrar su palabra y cada palabra debe encontrar su significado.

Nova tomó una tarjeta con un perro.

—Si esta imagen recuerda su palabra, vuelve a brillar.

La tarjeta tembló:

<strong class="en">dog</strong>

Al decir <strong class="en">dog</strong>, el dibujo movió la cola y se iluminó.

—En este nivel serán <strong class="en">Word Builders</strong> - dijo Lumi -. Van a conectar palabras, imágenes, gustos y emociones.

Nova mostró dos frases sencillas:

<strong class="en">I like apples.</strong>

<strong class="en">I don't like broccoli.</strong>

—Cada palabra que conecten devolverá color al valle. <strong class="en">Ready?</strong>

—<strong class="en">Ready!</strong>`,

  3:`🌙 <strong class="en">Nivel 3 · Sentence Hero</strong>

El camino llevó al grupo hasta la <strong class="en">Ciudad de las Frases</strong>, una ciudad construida con palabras. Había casas hechas de verbos, puentes formados por preguntas y relojes gigantes que marcaban diferentes horas.

Pero las palabras estaban separadas.

En una calle flotaban:

<strong class="en">I · wake up · at · seven</strong>

En otra avenida aparecían:

<strong class="en">Can · you · run · ?</strong>

Y en una plaza pequeña se leía:

<strong class="en">What time is it?</strong>

Desde una torre de libros bajó <strong class="en">Astro</strong>, con gafas redondas y un cuaderno de notas.

—Bienvenidos a la Ciudad de las Frases. Aquí las palabras necesitan trabajar juntas. Una palabra puede brillar, pero una frase puede abrir caminos.

Astro unió unas palabras:

<strong class="en">I wake up at seven.</strong>

La calle se iluminó. Luego apareció un puente cuando el grupo leyó:

<strong class="en">Can you jump?</strong>

—En este nivel serán <strong class="en">Sentence Heroes</strong> - explicó Lumi -. Su misión es unir palabras para hablar de rutinas, acciones, horas y preguntas sencillas.

Astro sonrió.

—<strong class="en">Let's build sentences.</strong>`,

  4:`☁️ <strong class="en">Nivel 4 · English Communicator</strong>

El último camino llevó al grupo hasta la <strong class="en">Plaza del Encuentro</strong>. Había una escuela, un parque, una biblioteca, un mercado y un hospital. Todo parecía listo para una celebración.

Pero la plaza estaba en silencio.

Las personas querían hablar, pero no encontraban las palabras. Los lugares estaban allí, pero nadie podía describirlos.

Entonces bajó <strong class="en">Nebu</strong>, una nube suave con destellos de luz.

—Bienvenidos a la Plaza del Encuentro. Este es el lugar donde Englishland vuelve a hablar.

Nebu señaló el mapa:

<strong class="en">There is a park.</strong>

El parque se iluminó.

Luego señaló dos escuelas:

<strong class="en">There are two schools.</strong>

Las ventanas se encendieron.

—Ya conocen sonidos, palabras y frases - dijo Lumi -. Ahora serán <strong class="en">English Communicators</strong>. Usarán el inglés para hablar con otros, describir lugares y participar en diálogos sencillos.

Pixie levantó una tarjeta:

<strong class="en">Where is the library?</strong>

Astro respondió:

<strong class="en">It is near the park.</strong>

Nebu sonrió.

—Englishland necesita escuchar sus voces. <strong class="en">Speak with confidence.</strong>`,
};

// Historias de cierre — se muestran al completar el nivel
const LEVEL_CLOSE_STORIES = {
  1:`🏆 <strong class="en">Mission Star ganada</strong>

Al terminar el recorrido, el Bosque de los Sonidos ya no estaba en silencio. Las hojas decían <strong class="en">green</strong>, las flores brillaban con <strong class="en">red</strong>, <strong class="en">yellow</strong> y <strong class="en">blue</strong>, y unas piedras pequeñas saltaban contando:

<strong class="en">one, two, three, four, five...</strong>

Cosmo miró al grupo con orgullo.

—Lo lograron. Aprender inglés no empieza hablando perfecto. Empieza escuchando, intentando y participando.

Lumi colocó la primera Mission Star en el mapa.

—Esta estrella representa su primer paso en Englishland.

El camino hacia el Valle de las Palabras se abrió entre los árboles.

—<strong class="en">Nuevo territorio desbloqueado.</strong> Nova nos espera.`,

  2:`🏆 <strong class="en">Nueva palabra encendida</strong>

Al finalizar la misión, las tarjetas ya no estaban confundidas. Los animales encontraron sus nombres, la comida recuperó su sabor, la ropa volvió a sus colores y las emociones pudieron expresarse.

Una nube sonrió y dijo:

<strong class="en">I am happy.</strong>

Un conejo levantó una zanahoria y dijo:

<strong class="en">I like carrots.</strong>

Nova giró emocionada.

—Hoy no solo aprendieron palabras. Aprendieron a relacionarlas con imágenes, gustos y sentimientos.

Lumi encendió la segunda Mission Star.

—Esta estrella representa la valentía de nombrar el mundo y expresar preferencias.

El valle abrió un camino de tarjetas luminosas hacia la Ciudad de las Frases.

—<strong class="en">The adventure continues...</strong> Astro espera.`,

  3:`🏆 <strong class="en">Nuevo territorio desbloqueado</strong>

La Ciudad de las Frases volvió a tener movimiento. Los relojes marcaron la hora, los puentes conectaron preguntas con respuestas y las casas de palabras encendieron sus ventanas.

El grupo formó frases como:

<strong class="en">I go to school.</strong>

<strong class="en">I have lunch at twelve.</strong>

<strong class="en">Can you dance?</strong>

<strong class="en">Yes, I can.</strong>

Astro cerró su cuaderno con satisfacción.

—Comunicarse no es repetir palabras sueltas. Es organizarlas para expresar una idea.

Lumi encendió la tercera Mission Star.

—Esta estrella representa la construcción de sentido.

Desde la ciudad se abrió un camino hacia una gran plaza llena de voces.

—<strong class="en">The final mission is waiting.</strong>`,

  4:`🏆 <strong class="en">Englishland vuelve a brillar</strong>

Al completar la misión, la Plaza del Encuentro despertó por completo. Los lugares recuperaron sus nombres, las personas pudieron preguntar y responder, y las voces volvieron a llenar Englishland.

Un estudiante dijo:

<strong class="en">There is a library.</strong>

Otro respondió:

<strong class="en">It is near the school.</strong>

Una nube preguntó:

<strong class="en">How are you?</strong>

Y todos contestaron:

<strong class="en">I am fine, thanks.</strong>

Lumi colocó la cuarta Mission Star en el mapa. Las cuatro estrellas se unieron formando una constelación sobre Englishland.

—Aprender inglés no significa no equivocarse - dijo Lumi -. Significa atreverse a escuchar, intentar, practicar, corregir y volver a hablar.

El cuaderno apareció lleno de luz. Pero al final del mapa se abrió un pequeño portal nuevo.

Pixie lo miró con curiosidad.

—Parece que Englishland tiene otros territorios...

Nebu sonrió.

—Pero esa será otra aventura.

Sobre la última página apareció una frase brillante:

<strong class="en">The adventure continues...</strong>`,
};

// ==================== FÍSICA Y MUNDO ====================
const GRAVITY = 0.85;
const JUMP_VEL = -18;
const JUMP_HOLD_BOOST = -0.55;
const MAX_JUMP_HOLD_FRAMES = 14;
const GROUND_Y = 575;   // suelo visual en GROUND_Y + PLAYER_H = 695
const PLAYER_X = 200;
const PLAYER_W = 120;
const PLAYER_H = 120;
const DUCK_H   = 70;
const MOVE_SPEED = 7.8;   // más rápido → menos tiempo de reacción
const WORLD_LENGTH = 16000;
const STATIONS_PER_LEVEL = 10;

// ==================== ESTADO ====================
const state = {
  scene: 'loading', selectedChar: null, level: 1, unlockedLevel: 1,
  player: { x: PLAYER_X, y: GROUND_Y, vy: 0, onGround: true, ducking: false, jumpHold: 0, facing: 1 },
  worldOffset: 0, lives: 3, stars: 0, combo: 0, comboTimer: 0, questionsDone: 0,
  invulnerableUntil: 0, events: [], pendingStation: null, particles: [],
  paused: false, questionPool: [], questionIndex: 0, startTime: 0,
  rescueUsed: false, hintActive: false, inputLocked: false, muted: false, moving: false,
  lastTipTime: 0, runnerSessionId: '',
};
let tipIdx = 0;
let storyCallback = null;

function loadProgress(){
  try{ const d = JSON.parse(localStorage.getItem('eaq_progress') || '{}'); state.unlockedLevel = d.unlockedLevel || 1; }
  catch(e){ state.unlockedLevel = 1; }
}
function saveProgress(){ localStorage.setItem('eaq_progress', JSON.stringify({ unlockedLevel: state.unlockedLevel })); }

function logRunnerEvent(type, payload = {}){
  try{
    const raw = localStorage.getItem('eaq_game_events');
    const parsed = raw ? JSON.parse(raw) : [];
    const events = Array.isArray(parsed) ? parsed : [];
    events.push({
      type,
      game: 'adventure-runner',
      sessionId: state.runnerSessionId || `runner-${Date.now()}`,
      at: new Date().toISOString(),
      ...payload,
    });
    localStorage.setItem('eaq_game_events', JSON.stringify(events.slice(-500)));
  }catch(e){
    console.warn('No se pudo registrar el evento del runner:', e);
  }
}

// ==================== ASSETS ====================
const assets = { chars:{}, bgs:{} };
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function loadImage(src){
  return new Promise((resolve)=>{
    const img = new Image();
    img.onload = ()=>{ resolve(img); };
    img.onerror = ()=>{ console.warn('No cargó:', src); resolve(null); };
    img.src = src;
  });
}

// Intenta cargar con ruta primaria; si falla, usa ruta alternativa (sin doble extensión)
function loadImageFallback(primary, fallback){
  return new Promise((resolve)=>{
    const img = new Image();
    img.onload = ()=>{ resolve(img); };
    img.onerror = ()=>{
      if(fallback && fallback !== primary){
        const img2 = new Image();
        img2.onload = ()=>{ resolve(img2); };
        img2.onerror = ()=>{ console.warn('No se pudo cargar:', primary, 'ni', fallback); resolve(null); };
        img2.src = fallback;
      } else {
        console.warn('No cargó:', primary); resolve(null);
      }
    };
    img.src = primary;
  });
}

async function loadAllAssets(){
  const tasks = [];
  let total = CHARACTERS.length + LEVELS.length * 3;
  let done = 0;
  const update = ()=>{ done++; document.getElementById('load-progress').textContent = Math.round(done/total*100) + '%'; };
  for(const c of CHARACTERS){ tasks.push(loadImage(c.file).then(img=>{ assets.chars[c.id]=img; update(); })); }
  for(const lvl of LEVELS){
    for(const layer of ['far','mid','near']){
      const primary  = `${lvl.bgFolder}-bg-${layer}.png`;
      const fallback = `${lvl.bgFolder}-bg-${layer}.png`;
      tasks.push(loadImageFallback(primary, fallback).then(img=>{
        if(!assets.bgs[lvl.num]) assets.bgs[lvl.num] = {};
        assets.bgs[lvl.num][layer] = img;
        update();
      }));
    }
  }
  await Promise.all(tasks);
}

// ==================== INPUT ====================
const keys = {};
let jumpQueued = false;
window.addEventListener('keydown', e=>{
  const k = e.key.toLowerCase();
  if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(k)) e.preventDefault();
  if(state.inputLocked) return;
  if(!keys[k]){
    if(k===' ' || k==='arrowup' || k==='w') jumpQueued = true;
    if(k==='p') togglePause();
    if(k==='m') toggleMute();
  }
  keys[k] = true;
});
window.addEventListener('keyup', e=>{ keys[e.key.toLowerCase()] = false; });

canvas.addEventListener('pointerdown', e=>{
  if(state.scene !== 'playing') return;
  ensureAudio();
  const rect = canvas.getBoundingClientRect();
  const y = (e.clientY - rect.top) / rect.height;
  const x = (e.clientX - rect.left) / rect.width;
  if(y < 0.55) jumpQueued = true;
  else if(y > 0.85) keys['arrowdown'] = true;
  else if(x < 0.5) keys['arrowleft'] = true;
  else keys['arrowright'] = true;
});
canvas.addEventListener('pointerup', ()=>{
  keys['arrowdown'] = false; keys['arrowleft'] = false; keys['arrowright'] = false;
  keys[' ']=false; keys['arrowup']=false; keys['w']=false;
});

// ==================== AUDIO ====================
let audioCtx = null;
function ensureAudio(){
  if(audioCtx){ if(audioCtx.state === 'suspended') audioCtx.resume().catch(()=>{}); return audioCtx; }
  try{ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){ audioCtx = null; }
  return audioCtx;
}

function tone({freq, freq2, dur=0.15, type='sine', gain=0.15, delay=0}){
  const ac = ensureAudio();
  if(!ac || state.muted) return;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = type;
  o.connect(g); g.connect(ac.destination);
  const t0 = ac.currentTime + delay;
  o.frequency.setValueAtTime(freq, t0);
  if(freq2 !== undefined) o.frequency.exponentialRampToValueAtTime(Math.max(1, freq2), t0 + dur);
  g.gain.setValueAtTime(gain, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

function playSound(kind){
  if(state.muted) return;
  switch(kind){
    case 'jump':
      tone({freq:380, freq2:780, dur:0.16, type:'square', gain:0.10}); break;
    case 'star':
      tone({freq:880, freq2:1760, dur:0.10, type:'triangle', gain:0.14});
      tone({freq:1320, dur:0.08, type:'sine', gain:0.08, delay:0.06}); break;
    case 'correct':
      tone({freq:523, dur:0.12, type:'triangle', gain:0.14});
      tone({freq:659, dur:0.12, type:'triangle', gain:0.14, delay:0.10});
      tone({freq:784, dur:0.18, type:'triangle', gain:0.16, delay:0.20});
      tone({freq:1047, dur:0.22, type:'triangle', gain:0.14, delay:0.32}); break;
    case 'wrong':
      tone({freq:280, freq2:140, dur:0.30, type:'sawtooth', gain:0.12}); break;
    case 'hit':
      tone({freq:200, freq2:60, dur:0.22, type:'square', gain:0.16}); break;
    case 'powerup':
      [600, 800, 1000, 1300].forEach((f, i)=> tone({freq:f, dur:0.10, type:'triangle', gain:0.12, delay:i*0.06})); break;
    case 'win':
      [523, 659, 784, 1047].forEach((f, i)=> tone({freq:f, dur:0.20, type:'triangle', gain:0.15, delay:i*0.12}));
      tone({freq:1568, dur:0.40, type:'triangle', gain:0.16, delay:0.55}); break;
    case 'plip':
      tone({freq:1200, freq2:900, dur:0.08, type:'sine', gain:0.10});
      tone({freq:1800, dur:0.05, type:'sine', gain:0.07, delay:0.05}); break;
    case 'portal':
      [300,450,600,800,1100,1500].forEach((f,i)=> tone({freq:f, freq2:f*1.5, dur:0.18, type:'sine', gain:0.10, delay:i*0.07}));
      tone({freq:2000, freq2:800, dur:0.5, type:'sine', gain:0.08, delay:0.48}); break;
    case 'book-open':
      tone({freq:440, freq2:880, dur:0.25, type:'triangle', gain:0.12});
      tone({freq:660, dur:0.18, type:'sine', gain:0.09, delay:0.18});
      tone({freq:1320, freq2:660, dur:0.30, type:'sine', gain:0.07, delay:0.32}); break;
  }
}

function toggleMute(){
  state.muted = !state.muted;
  const btn = document.getElementById('btn-mute');
  if(btn) btn.textContent = state.muted ? '🔇' : '🔊';
  if(state.muted){ stopBGM(); }
  else if(state.scene === 'playing'){ startBGM(); }
}

// ==================== MÚSICA DE FONDO — 4 temas por nivel ====================
// [frecuencia Hz, duración en beats] — 0 = silencio

// Nivel 1 · Cosmo · La minor · BPM 126 · Misterioso / exploratorio
const BGM_1 = [
  [440,0.5],[392,0.5],[349,0.5],[330,0.5],[294,1],[0,0.5],
  [440,0.5],[494,0.5],[523,0.75],[440,0.25],[392,1],
  [349,0.5],[392,0.5],[440,1.5],[0,0.75],
  [330,0.5],[349,0.5],[392,0.5],[440,0.5],[494,0.75],[440,0.25],
  [523,0.5],[494,0.5],[440,2],[0,0.75],
  [523,0.5],[587,0.5],[659,0.5],[523,0.5],[587,1],
  [494,0.5],[440,0.5],[392,2],[0,1],
  [220,0.5],[247,0.5],[262,0.5],[294,0.5],[330,1],
  [294,0.5],[262,0.5],[247,0.5],[220,2],[0,1],
];
const BGM_1_BASS = [
  [110,2],[110,2],[131,2],[110,2],
  [98,2],[110,2],[88,2],[110,2],
];

// Nivel 2 · Nova · Re mayor · BPM 210 · Frenético / carrera
const BGM_2 = [
  [587,0.25],[659,0.25],[784,0.25],[880,0.25],[880,0.5],[784,0.5],[0,0.25],
  [587,0.25],[659,0.25],[740,0.25],[784,0.25],[880,0.5],[784,0.25],[659,0.25],[587,0.5],[0,0.25],
  [587,0.5],[587,0.25],[659,0.25],[784,0.5],[784,0.25],[880,0.25],
  [988,0.5],[880,0.5],[784,1],[0,0.5],
  [587,0.25],[659,0.25],[740,0.25],[784,0.25],[880,0.25],[988,0.25],[1109,0.25],[988,0.25],
  [880,0.5],[784,0.5],[659,0.5],[587,0.5],[0,0.5],
  [880,0.5],[784,0.5],[659,0.5],[784,0.5],
  [880,1],[659,1],[587,1.5],[0,0.5],
];
const BGM_2_BASS = [
  [147,1],[147,1],[185,1],[147,1],
  [196,1],[147,1],[185,1],[147,1],
];

// Nivel 3 · Astro · Do mayor · BPM 90 · Suave / biblioteca
const BGM_3 = [
  [523,1],[659,1],[784,1],[0,1],
  [523,0.5],[659,0.5],[784,0.5],[880,0.5],[784,0.5],[659,0.5],[523,1],[0,0.5],
  [880,1],[784,1],[659,1],[523,0.5],[587,0.5],[659,2],[0,1],
  [659,0.5],[698,0.5],[784,0.5],[698,0.5],[659,1],[523,1],[0,0.5],
  [523,0.5],[587,0.5],[659,0.5],[698,0.5],[784,1],
  [880,0.5],[784,0.5],[698,0.5],[659,0.5],[523,2],[0,1.5],
];
const BGM_3_BASS = [
  [131,2],[131,2],[196,2],[131,2],
  [175,2],[131,2],[196,2],[131,2],
];

// Nivel 4 · Nebu · Sol mayor · BPM 176 · Festivo / alegre
const BGM_4 = [
  [392,0.25],[440,0.25],[494,0.25],[523,0.25],[587,0.5],[523,0.25],[494,0.25],[440,0.5],[0,0.25],
  [784,0.5],[659,0.5],[784,0.25],[880,0.25],[784,0.5],[659,1],[0,0.5],
  [523,0.5],[587,0.5],[659,0.5],[587,0.5],[523,0.5],[494,0.5],[440,1],[0,0.5],
  [440,0.25],[494,0.25],[523,0.25],[587,0.25],[659,0.25],[784,0.25],[880,0.5],
  [784,0.25],[659,0.25],[784,0.5],[880,1],[0,0.5],
  [880,0.5],[784,0.5],[659,0.5],[784,0.5],
  [880,0.5],[784,0.5],[659,0.5],[523,0.5],
  [587,1],[523,1.5],[0,0.5],
];
const BGM_4_BASS = [
  [196,1],[196,1],[247,1],[196,1],
  [220,1],[196,1],[220,1],[196,1],
];

// Mapa de temas: nivel → { mel, bass, bpm, wave }
const LEVEL_BGMS = {
  1: { mel: BGM_1, bass: BGM_1_BASS, bpm: 126, wave: 'square' },
  2: { mel: BGM_2, bass: BGM_2_BASS, bpm: 210, wave: 'square' },
  3: { mel: BGM_3, bass: BGM_3_BASS, bpm: 90,  wave: 'triangle' },
  4: { mel: BGM_4, bass: BGM_4_BASS, bpm: 176, wave: 'square' },
};

let bgmActive = false;
let bgmNoteIdx = 0;
let bgmBassIdx = 0;
let bgmNextTime = 0;
let bgmBassNextTime = 0;
let bgmTimer = null;
let bgmBeat = 60 / 168; // se actualiza en startBGM
let bgmTrack = LEVEL_BGMS[1];

function bgmSchedule(){
  const ac = audioCtx;
  if(!ac || !bgmActive || state.muted) return;
  const ahead = 0.35;
  const mel  = bgmTrack.mel;
  const bass = bgmTrack.bass;
  const wave = bgmTrack.wave;
  // Melodía
  while(bgmNextTime < ac.currentTime + ahead){
    const [freq, dur] = mel[bgmNoteIdx % mel.length];
    if(freq > 0){
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = wave;
      o.frequency.value = freq;
      o.connect(g); g.connect(ac.destination);
      const t = bgmNextTime, nd = dur * bgmBeat;
      g.gain.setValueAtTime(0.055, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + nd * 0.88);
      o.start(t); o.stop(t + nd);
    }
    bgmNextTime += dur * bgmBeat;
    bgmNoteIdx = (bgmNoteIdx + 1) % mel.length;
  }
  // Bajo
  while(bgmBassNextTime < ac.currentTime + ahead){
    const [freq, dur] = bass[bgmBassIdx % bass.length];
    if(freq > 0){
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = 'triangle';
      o.frequency.value = freq;
      o.connect(g); g.connect(ac.destination);
      const t = bgmBassNextTime, nd = dur * bgmBeat;
      g.gain.setValueAtTime(0.04, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + nd * 0.5);
      o.start(t); o.stop(t + nd);
    }
    bgmBassNextTime += dur * bgmBeat;
    bgmBassIdx = (bgmBassIdx + 1) % bass.length;
  }
}

function startBGM(){
  const ac = ensureAudio();
  if(!ac || state.muted) return;
  bgmTrack = LEVEL_BGMS[state.level] || LEVEL_BGMS[1];
  bgmBeat  = 60 / bgmTrack.bpm;
  bgmActive = true;
  bgmNoteIdx = 0; bgmBassIdx = 0;
  bgmNextTime = ac.currentTime + 0.08;
  bgmBassNextTime = ac.currentTime + 0.08;
  if(bgmTimer) clearInterval(bgmTimer);
  bgmTimer = setInterval(bgmSchedule, 80);
}

function stopBGM(){
  bgmActive = false;
  if(bgmTimer){ clearInterval(bgmTimer); bgmTimer = null; }
}

// ==================== MENÚ ====================
function rollCharacter(){
  const idx = Math.floor(Math.random() * CHARACTERS.length);
  state.selectedChar = CHARACTERS[idx];
  document.getElementById('char-img').src = state.selectedChar.file;
  document.getElementById('char-name').textContent = state.selectedChar.name;
  document.getElementById('char-name').style.color = state.selectedChar.color;
}

function buildLevelButtons(){
  const cont = document.getElementById('level-buttons');
  cont.innerHTML = '';
  for(const lvl of LEVELS){
    const locked = lvl.num > state.unlockedLevel;
    const btn = document.createElement('button');
    btn.className = 'lvl-btn';
    btn.disabled = locked;
    btn.innerHTML = `<span class="lock">${locked?'🔒':'▶'}</span><div class="num">NIVEL ${lvl.num}</div><div class="title">${lvl.title}</div><div class="topic">${lvl.topic}</div>`;
    btn.onclick = ()=>startLevel(lvl.num);
    cont.appendChild(btn);
  }
}

function showMenu(){
  state.scene = 'menu'; state.paused = false;
  stopBGM();
  hideAllOverlays();
  document.getElementById('menu').classList.remove('hidden');
  document.getElementById('hud').style.display = 'none';
  hideTouchControls();
  if(!state.selectedChar) rollCharacter();
  buildLevelButtons();
  showBookBtn();
}
function goToMenu(){ showMenu(); }

function showBookBtn(){
  const btn = document.getElementById('book-btn');
  if(btn) btn.classList.remove('hidden');
}
function hideBookBtn(){
  const btn = document.getElementById('book-btn');
  if(btn) btn.classList.add('hidden');
}

function openBookStory(){
  // Only respond in states where the book makes sense
  const scene = state.scene;
  if(scene !== 'menu' && scene !== 'playing') return;

  playSound('portal');
  setBookOpen(true);

  const LEVEL_CHARS  = {1:'assets/characters/cosmo-wave.png',2:'assets/characters/nova-ready.png',3:'assets/characters/astro-wave.png',4:'assets/characters/nebu-float-cutout.png'};
  const LEVEL_EMOJIS = {1:'🟣',2:'🟠',3:'🌙',4:'☁️'};
  const LEVEL_TITLES = {
    1:'Cosmo y el Bosque de los Sonidos',
    2:'Nova y el Valle de las Palabras Perdidas',
    3:'Astro y la Ciudad de las Frases',
    4:'Nebu y la Plaza del Encuentro'
  };

  if(scene === 'menu'){
    showStory(
      '📖 EL CUADERNO QUE ABRIÓ ENGLISHLAND',
      'Bienvenido a Englishland',
      'El inicio de English Adventure Quest',
      ENGLISH_LAND_INTRO,
      'assets/characters/lumi-wave.png',
      'Cerrar 📖',
      ()=>{ setBookOpen(false); showMenu(); },
      true
    );
  } else {
    // scene === 'playing'
    const lvl = (state.level >= 1 && state.level <= 4) ? state.level : 1;
    const prevPaused = state.paused;
    state.paused = true;
    hideBookBtn();
    showStory(
      `${LEVEL_EMOJIS[lvl]||'📖'} CAPÍTULO ${lvl}`,
      LEVEL_TITLES[lvl] || `Nivel ${lvl}`,
      LEVELS.find(l => l.num === lvl)?.topic || '',
      LEVEL_STORIES[lvl] || LEVEL_STORIES[1],
      LEVEL_CHARS[lvl] || null,
      'Continuar jugando ▶',
      ()=>{
        setBookOpen(false);
        state.paused = prevPaused;
        document.getElementById('hud').style.display = 'flex';
        showTouchControls();
        showBookBtn();
      },
      true
    );
  }
}

function setBookOpen(isOpen){
  const btn = document.getElementById('book-btn');
  if(!btn) return;
  const img = btn.querySelector('img');
  if(img) img.src = isOpen ? 'assets/story/his-book-2.png' : 'assets/story/his-book-1.png';
}

function hideAllOverlays(){
  ['menu','question','rescue','win','gameover','loading','pause','story','astro-tip'].forEach(id=>{
    document.getElementById(id).classList.add('hidden');
  });
}

// ==================== TIP DEL ASTRONAUTA ====================
function showAstroTip(level){
  const tip = ASTRO_TIPS[level] || ASTRO_TIPS[1];
  document.getElementById('astro-tip-title').textContent = tip.title;
  document.getElementById('astro-tip-text').textContent  = tip.text;
  hideAllOverlays();
  document.getElementById('astro-tip').classList.remove('hidden');
  state.scene = 'astrotip';
  state.paused = true;
  for(const k in keys) keys[k] = false;
  stopBGM();
}

function closeAstroTip(){
  document.getElementById('astro-tip').classList.add('hidden');
  state.scene = 'playing';
  state.paused = false;
  state.invulnerableUntil = performance.now() + 1800;
  startBGM();
}

// ==================== HISTORIA DE NIVEL ====================
function showStory(badge, title, topic, text, charFile, btnTxt, onClose, skipable){
  storyCallback = onClose;
  document.getElementById('story-badge').innerHTML = badge;
  document.getElementById('story-title').innerHTML = title;
  document.getElementById('story-topic').textContent = topic || '';
  document.getElementById('story-text').innerHTML = text;
  document.getElementById('story-play-btn').textContent = btnTxt || '¡Jugar! ▶';
  const ci = document.getElementById('story-char-img');
  if(charFile){ ci.src = charFile; ci.style.display = ''; }
  else { ci.style.display = 'none'; }
  const skipBtn = document.getElementById('story-skip-btn');
  if(skipBtn) skipBtn.style.display = (skipable === false) ? 'none' : '';
  playSound('book-open');
  hideAllOverlays();
  document.getElementById('hud').style.display = 'none';
  hideTouchControls();
  document.getElementById('story').classList.remove('hidden');
}

function closeStory(){
  document.getElementById('story').classList.add('hidden');
  if(storyCallback){ const cb = storyCallback; storyCallback = null; cb(); }
}

function launchLevel(num){
  buildLevel(num);
  state.scene = 'playing';
  hideAllOverlays();
  document.getElementById('hud').style.display = 'flex';
  showTouchControls();
  showBookBtn();
  ensureAudio();
  startBGM();
  updateHUD();
}

// ==================== CONSTRUCCIÓN DE NIVEL ====================
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function buildLevel(num){
  state.level = num;
  state.player = { x: PLAYER_X, y: GROUND_Y, vy: 0, onGround: true, ducking: false, jumpHold: 0, facing: 1 };
  state.worldOffset = 0;
  state.lives = 3; state.stars = 0; state.combo = 0; state.comboTimer = 0; state.questionsDone = 0;
  state.events = []; state.particles = []; state.invulnerableUntil = 0;
  state.startTime = performance.now();
  state.runnerSessionId = `runner-l${num}-${Date.now()}`;
  state.rescueUsed = false; state.hintActive = false;
  state.lastTipTime = 0;

  const pool = QUESTIONS[num] || [];
  state.questionPool = shuffle(pool.map(q => ({ ...q, options: q.options.slice() })));
  state.questionIndex = 0;
  logRunnerEvent('runner_level_start', {
    level: num,
    bankSize: state.questionPool.length,
    stations: STATIONS_PER_LEVEL,
  });

  const stationGap = WORLD_LENGTH / (STATIONS_PER_LEVEL + 1);
  const stationXs = [];
  for(let i=1; i<=STATIONS_PER_LEVEL; i++) stationXs.push(i*stationGap);

  let prevX = 600;
  for(let i=0; i<STATIONS_PER_LEVEL; i++){
    const sx = stationXs[i];
    populateSegment(prevX + 250, sx - 220, num);
    state.events.push({ type:'station', worldX: sx, index:i, done:false });
    prevX = sx;
  }
  populateSegment(prevX + 250, WORLD_LENGTH - 200, num);
  state.events.push({ type:'goal', worldX: WORLD_LENGTH - 100 });
  state.events.sort((a,b)=>a.worldX - b.worldX);
}

// ─── distancia mínima garantizada entre obstáculos ─────────────────────────
const MIN_OBS_GAP = 300;  // 300 px mínimo entre enemigos

function populateSegment(xStart, xEnd, num){
  const len = xEnd - xStart;
  if(len < 400) return;

  // ── OBSTÁCULOS: aparecen muy pronto y casi sin respiro ──────────────────
  let nextObs = xStart + 110 + Math.random() * 50;
  let lastKind = null;

  while(nextObs < xEnd - 160){
    let flying;
    if(lastKind === 'flying'){
      flying = Math.random() < 0.30;
    } else if(lastKind === 'ground'){
      flying = Math.random() < 0.65;
    } else {
      flying = Math.random() < (0.42 + num * 0.08);
    }
    // Variedad de monstruos: 4 patrones voladores + 2 de suelo
    let kind;
    if(flying){
      // Distribución de voladores: standard / chaser / zigzag / swoop
      const r = Math.random();
      if(r < 0.40)      kind = 'flying';   // 40% — hover, agacharse
      else if(r < 0.68) kind = 'chaser';   // 28% — viene hacia ti, agacharse rápido
      else if(r < 0.86) kind = 'zigzag';   // 18% — sube y baja
      else              kind = 'swoop';    // 14% — pica desde arriba
    } else {
      kind = Math.random() < 0.20 ? 'double' : 'ground';
    }
    lastKind = flying ? 'flying' : 'ground';
    const newEv = { type:'obstacle', kind, worldX: nextObs, hit:false };
    if(kind === 'chaser') newEv.dx = 0; // se inicializa, luego se decrementa por frame
    state.events.push(newEv);

    const extraMax = Math.max(0, 25 - num * 5);
    // Bonus de espacio según la dificultad del patrón
    let bonus = 0;
    if(kind === 'double') bonus = 130;
    else if(kind === 'chaser') bonus = 90;  // espacio extra antes del próximo
    else if(kind === 'swoop')  bonus = 70;
    else if(kind === 'zigzag') bonus = 50;
    nextObs += MIN_OBS_GAP + Math.random() * extraMax + bonus;
  }

  // ── UNA SOLA ESTRELLA por segmento ───────────────────────────────────────
  if(len >= 480){
    const starX = xStart + len * (0.28 + Math.random() * 0.44);
    const roll  = Math.random();
    let starY;
    if(roll < 0.18){
      starY = GROUND_Y - 48;
    } else if(roll < 0.52){
      starY = GROUND_Y - 122;
    } else {
      starY = GROUND_Y - 178;
    }
    state.events.push({ type:'star', worldX: starX, y: starY, taken: false });
  }

  // ── ASTRONAUTA (tip educativo): uno cada ~500 px (era 1000 px) ──────────
  const boxCount = Math.max(1, Math.floor(len / 500));
  for(let b = 0; b < boxCount; b++){
    if(Math.random() < 0.90){   // 90% de probabilidad (era 68%)
      const px = xStart + (b + 0.15 + Math.random() * 0.7) * (len / Math.max(1, boxCount));
      state.events.push({ type:'box', worldX: px, y: GROUND_Y - 200, kind:'astro', taken:false });
    }
  }
}

function startLevel(num){
  stopBGM();
  hideBookBtn();
  const lvl = LEVELS.find(l=>l.num===num) || {};
  const levelChars  = {1:'assets/characters/cosmo-wave.png',2:'assets/characters/nova-ready.png',3:'assets/characters/astro-wave.png',4:'assets/characters/nebu-float-cutout.png'};
  const levelEmojis = {1:'🟣 CAPÍTULO 1',2:'🟠 CAPÍTULO 2',3:'🌙 CAPÍTULO 3',4:'☁️ CAPÍTULO 4'};
  showStory(
    levelEmojis[num] || `NIVEL ${num}`,
    lvl.title || `Nivel ${num}`,
    lvl.topic || '',
    LEVEL_STORIES[num] || LEVEL_STORIES[1],
    levelChars[num] || (state.selectedChar ? state.selectedChar.file : null),
    '¡Jugar! ▶',
    ()=>launchLevel(num),
    true
  );
}

// ==================== HUD ====================
function updateHUD(){
  document.getElementById('hud-level').textContent = 'NIVEL ' + state.level;
  document.getElementById('hud-lives').textContent = state.lives;
  document.getElementById('hud-stars').textContent = state.stars;
  document.getElementById('hud-progress').textContent = state.questionsDone + '/' + STATIONS_PER_LEVEL;
  document.getElementById('hud-distance').textContent = Math.floor(state.worldOffset/100) + 'm';
}

function toast(text, color){
  const el = document.createElement('div');
  el.className = 'toast-msg';
  if(color){ el.style.borderColor = color; el.style.color = color; }
  el.textContent = text;
  document.getElementById('toast').appendChild(el);
  setTimeout(()=>el.remove(), 1700);
}

function showTip(text){
  const el = document.createElement('div');
  el.style.cssText = [
    'max-width:78vw',
    'white-space:normal',
    'background:rgba(0,20,50,.96)',
    'border:3px solid #00D9FF',
    'color:#ffffff',
    'padding:14px 22px',
    'border-radius:18px',
    'text-align:left',
    'line-height:1.55',
    'font-size:1.05rem',
    'font-weight:700',
    'font-family:system-ui,sans-serif',
    'box-shadow:0 0 28px rgba(0,217,255,.55),0 4px 16px rgba(0,0,0,.6)',
    'backdrop-filter:blur(10px)',
    'animation:toast-in 4.8s ease-out forwards',
  ].join(';');
  el.textContent = text;
  document.getElementById('toast').appendChild(el);
  setTimeout(()=>el.remove(), 4900);
}

// ==================== UPDATE ====================
function update(dt){
  if(state.scene !== 'playing' || state.paused) return;
  const p = state.player;

  if(jumpQueued && p.onGround){
    p.vy = JUMP_VEL;
    p.onGround = false;
    p.jumpHold = MAX_JUMP_HOLD_FRAMES;
    spawnParticles(p.x + PLAYER_W/2, p.y + PLAYER_H, '#FFD93D', 8);
    playSound('jump');
  }
  jumpQueued = false;
  const jumpKeyDown = keys[' '] || keys['arrowup'] || keys['w'];
  if(jumpKeyDown && p.jumpHold > 0 && p.vy < 0){ p.vy += JUMP_HOLD_BOOST; p.jumpHold--; }
  else { p.jumpHold = 0; }

  p.ducking = !!(keys['arrowdown'] || keys['s']) && p.onGround;

  p.vy += GRAVITY;
  p.y += p.vy;
  if(p.y >= GROUND_Y){ p.y = GROUND_Y; p.vy = 0; p.onGround = true; }

  let moveX = 0;
  // El personaje puede moverse hacia adelante/atrás también mientras está agachado
  if(keys['arrowleft']  || keys['a']) moveX -= 1;
  if(keys['arrowright'] || keys['d']) moveX += 1;
  if(moveX !== 0) p.facing = moveX > 0 ? 1 : -1;
  state.moving = moveX !== 0;
  state.worldOffset += moveX * MOVE_SPEED;
  state.worldOffset = Math.max(0, Math.min(WORLD_LENGTH, state.worldOffset));

  if(state.combo > 0){
    state.comboTimer -= dt*1000;
    if(state.comboTimer <= 0) state.combo = 0;
  }

  const ph = p.ducking ? DUCK_H : PLAYER_H;
  const pyTop = p.y + (PLAYER_H - ph);
  // Hitbox interior al sprite (margen visual para 120px)
  const pHit = { x: p.x + 26, y: pyTop + 6, w: 68, h: ph - 22 };
  const now = performance.now();

  for(const ev of state.events){
    const sx = (ev.worldX + (ev.dx || 0)) - state.worldOffset;
    // 'chaser' avanza hacia el jugador SOLO cuando está cerca o visible
    // (de lo contrario acumula dx desde el inicio del nivel y arruina la distribución)
    if(ev.type === 'obstacle' && ev.kind === 'chaser' && !ev.hit
       && sx > -100 && sx < canvas.width + 600){
      ev.dx = (ev.dx || 0) - 2.6;
    }
    // Si el chaser ya pasó al jugador hace tiempo, márcalo para no procesarlo más
    if(ev.type === 'obstacle' && ev.kind === 'chaser' && sx < -350){
      ev.hit = true;
    }
    if(sx < -300 || sx > canvas.width + 300) continue;

    if(ev.type === 'obstacle' && !ev.hit){
      const ob = obstacleHitbox(ev, sx);
      if(now > state.invulnerableUntil && aabb(pHit.x,pHit.y,pHit.w,pHit.h, ob.x,ob.y,ob.w,ob.h)){
        ev.hit = true;
        hitDamage();
      }
    }
    else if(ev.type === 'star' && !ev.taken){
      const sxx = sx + 20, syy = ev.y + 20;
      if(circleRect(sxx, syy, 20, pHit.x,pHit.y,pHit.w,pHit.h)){
        ev.taken = true;
        state.combo++; state.comboTimer = 1500;
        const bonus = 1 + Math.floor(state.combo/5);
        state.stars += bonus;
        spawnParticles(sxx, syy, '#FFD93D', 6);
        playSound('star');
        if(state.combo % 5 === 0) toast(`Combo x${state.combo}!`, '#00D9FF');
        // Tip de aprendizaje cada ~13 segundos
        const tips = STAR_TIPS[state.level] || [];
        if(tips.length > 0 && now - state.lastTipTime > 13000){
          state.lastTipTime = now;
          showTip(tips[tipIdx % tips.length]);
          tipIdx++;
        }
        updateHUD();
      }
    }
    else if(ev.type === 'box' && !ev.taken){
      // Colisión sincronizada con el drift visual del astronauta
      const off = astroOffset(ev.worldX);
      const bx = sx + off.drift, by = ev.y + off.bob;
      if(aabb(pHit.x,pHit.y,pHit.w,pHit.h, bx,by,60,80)){
        ev.taken = true;
        spawnParticles(bx+30, by+40, '#00D9FF', 16);
        playSound('powerup');
        showAstroTip(state.level);
      }
    }
    else if(ev.type === 'station' && !ev.done){
      const stY = 80, stH = (GROUND_Y + PLAYER_H) - 80, stW = 60;
      if(aabb(pHit.x, pHit.y, pHit.w, pHit.h, sx, stY, stW, stH)){
        state.pendingStation = ev;
        openQuestion();
        return;
      }
    }
    else if(ev.type === 'goal'){
      if(state.questionsDone >= STATIONS_PER_LEVEL && aabb(pHit.x, pHit.y, pHit.w, pHit.h, sx, 200, 80, 500)){
        triggerWin();
        return;
      }
    }
  }

  for(const pt of state.particles){
    pt.x += pt.vx; pt.y += pt.vy; pt.vy += 0.3; pt.life--;
  }
  state.particles = state.particles.filter(pt=>pt.life > 0);
  updateHUD();
}

function obstacleHitbox(ev, sx){
  const t = performance.now();
  if(ev.kind === 'ground')  return { x: sx + 10, y: GROUND_Y + 20, w: 52, h: 65 };
  if(ev.kind === 'double')  return { x: sx + 10, y: GROUND_Y - 18, w: 52, h: 88 };
  // ─── Voladores ─────────────────────────────────────────────────────────
  if(ev.kind === 'zigzag'){
    // Sube y baja con amplitud grande → a veces hay que saltar, otras agacharse
    const yOff = Math.sin(t / 260 + (ev.worldX * 0.003)) * 70;
    return { x: sx + 6, y: GROUND_Y - 8 + yOff, w: 58, h: 58 };
  }
  if(ev.kind === 'swoop'){
    // Picado: hace un arco descendente, baja al nivel del suelo y vuelve a subir
    const phase = ((t / 1400) + (ev.worldX * 0.0007)) % 1;
    const yOff = -Math.cos(phase * Math.PI * 2) * 55 + 25; // -30 (alto) … +80 (bajo)
    return { x: sx + 6, y: GROUND_Y - 8 + yOff, w: 58, h: 58 };
  }
  // 'flying' y 'chaser' usan misma posición — chaser ya se mueve por ev.dx
  return { x: sx + 6, y: GROUND_Y - 8, w: 58, h: 58 };
}
function aabb(ax,ay,aw,ah, bx,by,bw,bh){ return ax < bx+bw && ax+aw > bx && ay < by+bh && ay+ah > by; }
function circleRect(cx,cy,cr, rx,ry,rw,rh){
  const nx = Math.max(rx, Math.min(cx, rx+rw));
  const ny = Math.max(ry, Math.min(cy, ry+rh));
  const dx = cx-nx, dy = cy-ny;
  return dx*dx + dy*dy < cr*cr;
}

function hitDamage(){
  state.lives--;
  state.invulnerableUntil = performance.now() + 900;  // menos tiempo de gracia
  state.combo = 0;
  spawnParticles(state.player.x + PLAYER_W/2, state.player.y + PLAYER_H/2, '#FF4D6D', 12);
  toast('-1 ❤️', '#FF4D6D');
  playSound('hit');
  updateHUD();
  if(state.lives <= 0) triggerRescue();
}

function spawnParticles(x,y,color,n){
  for(let i=0;i<n;i++){
    state.particles.push({ x, y, vx:(Math.random()-0.5)*5, vy:(Math.random()-1)*5, color, life:30+Math.random()*15 });
  }
}

function applyPowerUp(kind){
  if(kind === 'heart'){ state.lives = Math.min(5, state.lives + 1); toast('+1 ❤️', '#FF4D6D'); }
  else if(kind === 'bigstar'){ state.stars += 50; toast('+50 ⭐', '#FFD93D'); }
  else if(kind === 'shield'){ state.invulnerableUntil = performance.now() + 5000; toast('🛡 Invulnerable 5s', '#00D9FF'); }
  updateHUD();
}

// ==================== PREGUNTAS ====================
function openQuestion(){
  state.scene = 'question';
  state.inputLocked = true;
  for(const k in keys) keys[k] = false;
  const idx = state.questionIndex;
  const q = state.questionPool[idx] || { q:'(Pregunta no disponible)', options:['A','B','C','D'], correct:0, hint:'' };
  document.getElementById('q-num').textContent = `QUESTION_BANK · ${state.questionsDone+1}/${STATIONS_PER_LEVEL}`;
  document.getElementById('q-text').textContent = q.q;
  const hintEl = document.getElementById('q-hint');
  if(state.hintActive && q.hint){
    const skillText = q.skill ? ` · Habilidad: ${q.skill}` : '';
    hintEl.textContent = '💡 Pista: ' + q.hint + skillText;
    hintEl.style.display = 'block';
    state.hintActive = false;
  } else { hintEl.style.display = 'none'; }
  document.getElementById('q-feedback').textContent = '';
  const optsCont = document.getElementById('q-options');
  optsCont.innerHTML = '';
  q.options.forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
    btn.onclick = ()=>answerQuestion(i, q, btn);
    optsCont.appendChild(btn);
  });
  document.getElementById('question').classList.remove('hidden');
}

function answerQuestion(chosen, q, btn){
  document.querySelectorAll('#q-options .opt').forEach(b=>b.disabled = true);
  const correct = chosen === q.correct;
  logRunnerEvent('runner_question_answer', {
    level: state.level,
    bankIndex: q.bankIndex,
    skill: q.skill || '',
    question: q.q,
    answer: q.options[chosen] || '',
    expected: q.options[q.correct] || '',
    correct,
    station: state.questionsDone + 1,
  });
  const fb = document.getElementById('q-feedback');
  if(correct){
    btn.classList.add('correct');
    fb.textContent = '✅ ¡Correcto! Mission Star ganada. Nueva palabra encendida.';
    fb.style.color = '#3DDC84';
    playSound('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#q-options .opt')[q.correct].classList.add('correct');
    fb.textContent = '💡 Respuesta guia: ' + String.fromCharCode(65+q.correct) + '. ' + q.options[q.correct];
    fb.style.color = '#FF4D6D';
    playSound('wrong');
  }
  setTimeout(()=>{
    document.getElementById('question').classList.add('hidden');
    if(correct){
      if(state.pendingStation) state.pendingStation.done = true;
      state.questionsDone++;
      state.questionIndex++;
      state.stars += 20;
      state.lives = Math.min(state.lives + 3, 12);
      state.invulnerableUntil = performance.now() + 1200;
      toast('+20 ⭐  +3 ❤️  QUESTION_BANK', '#3DDC84');
    } else {
      state.lives = Math.max(0, state.lives - 2);
      state.worldOffset = Math.max(0, state.worldOffset - 450);
      state.invulnerableUntil = performance.now() + 1000;
      toast('-2 ❤️  Revisa la pista y sigue', '#FF4D6D');
      if(state.lives <= 0){ triggerRescue(); state.inputLocked = false; return; }
    }
    state.pendingStation = null;
    state.scene = 'playing';
    state.inputLocked = false;
    updateHUD();
  }, 1300);
}

function getRescueQuestion(){
  const rescuePool = RESCUE[state.level] || QUESTIONS[state.level] || [];
  const available = rescuePool.filter(q => q && q.options && q.correct !== undefined);
  return shuffle(available)[0] || { q:'(Rescate no disponible)', options:['A','B','C','D'], correct:0, hint:'' };
}

function triggerRescue(){
  if(state.rescueUsed){
    state.scene = 'gameover';
    stopBGM();
    document.getElementById('gameover').classList.remove('hidden');
    return;
  }
  state.rescueUsed = true;
  state.scene = 'rescue';
  state.inputLocked = true;
  for(const k in keys) keys[k] = false;
  const r = getRescueQuestion();
  logRunnerEvent('runner_rescue_open', {
    level: state.level,
    bankIndex: r.bankIndex,
    skill: r.skill || '',
    question: r.q,
  });
  document.getElementById('rescue-text').textContent = r.q;
  document.getElementById('rescue-feedback').textContent = '';
  const cont = document.getElementById('rescue-options');
  cont.innerHTML = '';
  r.options.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
    btn.onclick = ()=>rescueAnswer(i, r, btn);
    cont.appendChild(btn);
  });
  document.getElementById('rescue').classList.remove('hidden');
}

function rescueAnswer(chosen, r, btn){
  document.querySelectorAll('#rescue-options .opt').forEach(b=>b.disabled = true);
  const ok = chosen === r.correct;
  logRunnerEvent('runner_rescue_answer', {
    level: state.level,
    bankIndex: r.bankIndex,
    skill: r.skill || '',
    question: r.q,
    answer: r.options[chosen] || '',
    expected: r.options[r.correct] || '',
    correct: ok,
  });
  const fb = document.getElementById('rescue-feedback');
  if(ok){
    btn.classList.add('correct');
    fb.textContent = '✅ ¡Sigues en carrera! Rescate QUESTION_BANK superado.';
    fb.style.color = '#3DDC84';
    playSound('correct');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#rescue-options .opt')[r.correct].classList.add('correct');
    fb.textContent = '💡 Respuesta guia: ' + String.fromCharCode(65+r.correct) + '. ' + r.options[r.correct];
    fb.style.color = '#FF4D6D';
    playSound('wrong');
  }
  setTimeout(()=>{
    document.getElementById('rescue').classList.add('hidden');
    state.inputLocked = false;
    if(ok){
      state.lives = 2;
      state.scene = 'playing';
      state.invulnerableUntil = performance.now() + 1500;
      toast('+2 ❤️  Rescate logrado', '#3DDC84');
      updateHUD();
    } else {
      state.scene = 'gameover';
      document.getElementById('gameover').classList.remove('hidden');
    }
  }, 1300);
}

function triggerWin(){
  state.scene = 'win';
  stopBGM();
  playSound('win');
  if(state.level === state.unlockedLevel && state.unlockedLevel < 4){
    state.unlockedLevel++;
    saveProgress();
  }
  const lvl = LEVELS.find(l=>l.num===state.level);
  const elapsed = Math.round((performance.now() - state.startTime)/1000);
  const ratio = state.stars / (STATIONS_PER_LEVEL * 18);
  const trophies = Math.max(1, Math.min(5, Math.round(ratio*5)));
  const charFile = state.selectedChar ? state.selectedChar.file : null;
  logRunnerEvent('runner_level_complete', {
    level: state.level,
    questionsDone: state.questionsDone,
    stars: state.stars,
    lives: state.lives,
    elapsed,
    trophies,
  });

  const levelCloseText = LEVEL_CLOSE_STORIES[state.level];
  if(levelCloseText){
    const levelEmojis = {1:'🟣',2:'🟠',3:'🌙',4:'☁️'};
    const levelChars  = {1:'assets/characters/cosmo-wave.png',2:'assets/characters/nova-ready.png',3:'assets/characters/astro-wave.png',4:'assets/characters/nebu-float-cutout.png'};
    showStory(
      `${levelEmojis[state.level] || '⭐'} NIVEL ${state.level} COMPLETADO`,
      lvl ? lvl.title : `Nivel ${state.level}`,
      lvl ? lvl.topic : '',
      levelCloseText,
      levelChars[state.level] || charFile,
      '¡Ver resultados! 🏆',
      ()=> showWinScreen(lvl, trophies, elapsed),
      true
    );
  } else {
    showWinScreen(lvl, trophies, elapsed);
  }
}

function showWinScreen(lvl, trophies, elapsed){
  document.getElementById('win-text').textContent = lvl ? `Has completado ${lvl.title}: ${lvl.topic}.` : '¡Nivel completado!';
  document.getElementById('win-stars').textContent = '⭐'.repeat(trophies) + '☆'.repeat(5-trophies);
  document.getElementById('win-stats').textContent = `⭐ ${state.stars}  ·  ❤️ ${state.lives}/3  ·  ⏱ ${elapsed}s`;
  document.getElementById('win-next').style.display = state.level < 4 ? '' : 'none';
  hideAllOverlays();
  document.getElementById('win').classList.remove('hidden');
}

function nextLevel(){ if(state.level < 4) startLevel(state.level + 1); else showMenu(); }

function togglePause(){
  if(state.scene !== 'playing' && !state.paused) return;
  state.paused = !state.paused;
  document.getElementById('pause').classList.toggle('hidden', !state.paused);
}

// ==================== RENDER ====================
function drawTiledLayer(img, parallax, layer){
  if(!img) return;
  const w = canvas.width, h = canvas.height;
  // Suavizado explícito — evita aspecto pixelado en fondos escalados
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality  = 'high';
  const scale = h / img.height;
  const imgW  = Math.ceil(img.width * scale);
  const scrollX = state.worldOffset * parallax;
  const offset  = Math.floor(scrollX % imgW);
  const startX  = offset > 0 ? -offset : 0;
  for(let x = startX; x < w + imgW; x += imgW){
    // +1 px de ancho cierra cualquier grieta sub-píxel entre tiles
    ctx.drawImage(img, Math.floor(x), 0, imgW + 1, h);
  }
}

// Fondo procedural para nivel 4 (ciudad nocturna) cuando las imágenes no carguen
function drawCityFallback(){
  const w = canvas.width, h = canvas.height;
  const scroll = state.worldOffset;
  ctx.save();

  // Degradado cielo nocturno
  const sky = ctx.createLinearGradient(0, 0, 0, h * 0.75);
  sky.addColorStop(0,   '#0a0820');
  sky.addColorStop(0.5, '#1a1547');
  sky.addColorStop(1,   '#2a1f6b');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Estrellas (far parallax)
  const seedOff = Math.floor(scroll * 0.05);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  for(let i = 0; i < 60; i++){
    const sx = ((i * 137 + seedOff) % (w + 200)) - 100;
    const sy = ((i * 79) % (h * 0.55));
    const r  = (i % 3 === 0) ? 1.5 : 0.8;
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI*2); ctx.fill();
  }

  // Luna
  ctx.fillStyle = '#FFF5CC';
  ctx.beginPath(); ctx.arc(w * 0.82, h * 0.12, 28, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#EDE5A0';
  ctx.beginPath(); ctx.arc(w * 0.82 + 8, h * 0.12 - 6, 22, 0, Math.PI*2); ctx.fill();

  // Edificios del fondo (parallax lento)
  const buildingColors = ['#1e1560','#241a72','#1b1355'];
  const buildingW = 90, gap = 20;
  const totalBW = buildingW + gap;
  const offsetFar = Math.floor(scroll * 0.2) % totalBW;
  for(let x = -offsetFar; x < w + totalBW; x += totalBW){
    const seed = Math.floor((x + offsetFar) / totalBW);
    const bh   = 80 + (seed * 53 % 140);
    const by   = h * 0.62 - bh;
    ctx.fillStyle = buildingColors[seed % buildingColors.length];
    ctx.fillRect(x, by, buildingW, bh + h * 0.38);
    // Ventanas
    ctx.fillStyle = 'rgba(255,230,100,0.55)';
    for(let wy = by + 10; wy < by + bh - 10; wy += 22){
      for(let wx = x + 8; wx < x + buildingW - 8; wx += 18){
        if((seed * 7 + Math.floor(wy/22) + Math.floor(wx/18)) % 3 !== 0)
          ctx.fillRect(wx, wy, 10, 12);
      }
    }
  }

  // Edificios medios (parallax medio)
  const offsetMid = Math.floor(scroll * 0.45) % (totalBW * 0.8 | 0);
  for(let x = -offsetMid; x < w + totalBW; x += (totalBW * 0.8 | 0)){
    const seed = Math.floor((x + offsetMid) / (totalBW * 0.8 | 0)) + 100;
    const bh   = 60 + (seed * 41 % 100);
    const by   = h * 0.68 - bh;
    ctx.fillStyle = '#130e40';
    ctx.fillRect(x, by, 70, bh + h * 0.32);
    ctx.fillStyle = 'rgba(0,217,255,0.35)';
    for(let wy = by + 8; wy < by + bh - 8; wy += 20){
      for(let wx = x + 6; wx < x + 64; wx += 16){
        if((seed + Math.floor(wy/20) + Math.floor(wx/16)) % 4 !== 0)
          ctx.fillRect(wx, wy, 8, 10);
      }
    }
  }

  // Calle (near, oscura)
  const streetGrad = ctx.createLinearGradient(0, h * 0.78, 0, h);
  streetGrad.addColorStop(0, '#0c0a22');
  streetGrad.addColorStop(1, '#070518');
  ctx.fillStyle = streetGrad;
  ctx.fillRect(0, h * 0.78, w, h * 0.22);

  // Farolas
  const poleOff = Math.floor(scroll * 0.8) % 260;
  for(let x = -poleOff; x < w + 260; x += 260){
    const lx = x + 30;
    const groundY = GROUND_Y + PLAYER_H;
    // Poste
    ctx.strokeStyle = '#6060A0'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(lx, groundY); ctx.lineTo(lx, groundY - 140); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(lx, groundY - 140); ctx.lineTo(lx + 30, groundY - 140); ctx.stroke();
    // Luz
    ctx.fillStyle = '#FFE866';
    ctx.beginPath(); ctx.arc(lx + 30, groundY - 140, 6, 0, Math.PI*2); ctx.fill();
    const lg = ctx.createRadialGradient(lx+30, groundY-140, 0, lx+30, groundY-140, 55);
    lg.addColorStop(0, 'rgba(255,232,102,0.22)');
    lg.addColorStop(1, 'rgba(255,232,102,0)');
    ctx.fillStyle = lg;
    ctx.beginPath(); ctx.arc(lx+30, groundY-140, 55, 0, Math.PI*2); ctx.fill();
  }

  ctx.restore();
}

function drawGround(){
  const w = canvas.width;
  const groundTopY = GROUND_Y + PLAYER_H;
  ctx.save();
  ctx.fillStyle = 'rgba(0,0,0,.25)';
  ctx.fillRect(0, groundTopY-2, w, 4);
  ctx.strokeStyle = 'rgba(255,255,255,.18)';
  ctx.lineWidth = 2;
  const dashOffset = state.worldOffset % 60;
  for(let x = -dashOffset; x < w; x += 60){
    ctx.beginPath();
    ctx.moveTo(x, groundTopY+8);
    ctx.lineTo(x+30, groundTopY+8);
    ctx.stroke();
  }
  ctx.restore();
}

function drawScene(){
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0,0,w,h);
  const skyByLevel = { 1:'#87ceeb', 2:'#a0c8ff', 3:'#ffb87a', 4:'#1a1547' };
  ctx.fillStyle = skyByLevel[state.level] || '#1a1547';
  ctx.fillRect(0,0,w,h);

  const bgs = assets.bgs[state.level];

  if(state.level === 4){
    // ── NIVEL 4: siempre pinta la ciudad procedural primero (capa base garantizada)
    drawCityFallback();
    // Luego superpone SOLO el far si existe (nearest layers tapan el fondo → se omiten)
    if(bgs && bgs.far) drawTiledLayer(bgs.far, 0.18, 'far');
    // Mid OMITIDO: nivel4-bg-mid es RGB opaco (sin canal alpha) → taparia el far por completo
    // Near también omitido — la ciudad procedural + far son suficientes capas
  } else {
    if(bgs){
      drawTiledLayer(bgs.far,  0.18, 'far');
      drawTiledLayer(bgs.mid,  0.45, 'mid');
      drawTiledLayer(bgs.near, 0.80, 'near');
    }
  }
  drawGround();
  if(state.scene === 'menu') return;
  drawEvents();
  drawPlayer();
  drawParticles();
}

function drawEvents(){
  const w = canvas.width;
  for(const ev of state.events){
    const sx = (ev.worldX + (ev.dx || 0)) - state.worldOffset;
    if(sx < -150 || sx > w + 150) continue;
    if(ev.type === 'obstacle' && !ev.hit) drawObstacle(ev, sx);
    else if(ev.type === 'star' && !ev.taken) drawStar(sx, ev.y);
    else if(ev.type === 'box' && !ev.taken) drawAstronaut(sx, ev.y, ev.worldX);
    else if(ev.type === 'station' && !ev.done) drawStation(sx);
    else if(ev.type === 'station' && ev.done) drawStationDone(sx);
    else if(ev.type === 'goal') drawGoal(sx);
  }
}

// ── Helper: dibuja un cometa centrado en (cx, cy) ─────────────────────────
function drawCometShape(cx, cy, t){
  ctx.save();
  ctx.translate(cx, cy);
  for(let i = 5; i >= 0; i--){
    const tx = -22 - i * 13;
    const ty = Math.sin(t * 1.5 + i * 0.9) * (3 + i * 1.8);
    const r = 13 - i * 1.6;
    ctx.globalAlpha = Math.max(0, 0.75 - i * 0.11);
    ctx.fillStyle = i < 2 ? '#FF7700' : (i < 4 ? '#CC22EE' : '#7700CC');
    ctx.beginPath(); ctx.ellipse(tx, ty, r, r * 0.55, 0, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  const bodyG = ctx.createRadialGradient(-6, -6, 2, 0, 0, 22);
  bodyG.addColorStop(0, '#FFE066'); bodyG.addColorStop(0.45, '#FF8C00'); bodyG.addColorStop(1, '#CC3300');
  ctx.fillStyle = bodyG;
  ctx.beginPath(); ctx.arc(0, 0, 22, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,0.22)';
  ctx.beginPath(); ctx.arc(6, 6, 6, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(-7, -5, 4, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(10, -8, 3, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#FF4400'; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.arc(0, 0, 22, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,200,0.5)';
  ctx.beginPath(); ctx.ellipse(8, -9, 5, 3, -0.5, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawObstacle(ev, sx){
  ctx.save();
  const t = performance.now() / 180;

  if(ev.kind === 'ground'){
    drawCometShape(sx + 35, GROUND_Y + 48, t);

  } else if(ev.kind === 'double'){
    // ===== DOS COMETAS APILADOS — requiere salto máximo =====
    drawCometShape(sx + 35, GROUND_Y + 48, t);           // cometa inferior
    drawCometShape(sx + 35, GROUND_Y + 4,  t + 1.5);     // cometa superior (fase desfasada)
    // Chispas pulsantes en el punto de unión
    const sparkR = 4 + Math.sin(t * 4) * 2;
    ctx.fillStyle = 'rgba(255,200,80,0.8)';
    ctx.beginPath(); ctx.arc(sx + 35, GROUND_Y + 26, sparkR, 0, Math.PI * 2); ctx.fill();
    // Etiqueta de advertencia
    ctx.fillStyle = '#FFD700'; ctx.font = 'bold 13px system-ui';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('⚠ ¡SALTO GRANDE!', sx + 35, GROUND_Y - 36);

  } else {
    // ===== MONSTRUOS VOLADORES — múltiples variantes =====
    const now = performance.now();

    // Paletas: cada variante tiene un color distinto para que el jugador la reconozca
    const PAL = {
      flying: { body:'#FF4DA6', dark:'#CC006A', halo:'rgba(255,80,180,', antenna:'#FF88CC', tip:'#FFD700' },
      chaser: { body:'#FF3D00', dark:'#992000', halo:'rgba(255,80,40,',  antenna:'#FFAA66', tip:'#FFEE00' },
      zigzag: { body:'#00DD77', dark:'#006633', halo:'rgba(60,255,160,', antenna:'#66FFAA', tip:'#FFFFFF' },
      swoop:  { body:'#8800CC', dark:'#440066', halo:'rgba(180,80,255,', antenna:'#BB66FF', tip:'#FFCC00' },
    };
    const palette = PAL[ev.kind] || PAL.flying;

    // Posición Y dinámica según patrón
    let cyOff = Math.sin(now / 200) * 7; // por defecto: hover suave
    let rot = 0;
    if(ev.kind === 'zigzag'){
      cyOff = Math.sin(now / 260 + (ev.worldX * 0.003)) * 70;
      rot   = Math.sin(now / 260 + (ev.worldX * 0.003)) * 0.35;
    } else if(ev.kind === 'swoop'){
      const phase = ((now / 1400) + (ev.worldX * 0.0007)) % 1;
      cyOff = -Math.cos(phase * Math.PI * 2) * 55 + 25;
      rot   = -Math.sin(phase * Math.PI * 2) * 0.45;
    }

    const cx = sx + 35;
    const cy = GROUND_Y + 18 + cyOff;

    // Líneas de velocidad detrás del 'chaser' (motion blur)
    if(ev.kind === 'chaser'){
      ctx.strokeStyle = 'rgba(255,80,40,0.55)';
      ctx.lineWidth = 3; ctx.lineCap = 'round';
      for(let i = 0; i < 4; i++){
        const lx = 28 + i * 14 + (now / 60) % 14;
        ctx.globalAlpha = 0.55 - i * 0.12;
        ctx.beginPath();
        ctx.moveTo(cx + lx, cy - 14 + i * 8);
        ctx.lineTo(cx + lx + 22, cy - 14 + i * 8);
        ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.lineCap = 'butt';
    }

    ctx.translate(cx, cy);
    if(rot) ctx.rotate(rot);

    // Halo de energía (color según paleta)
    const halo = ctx.createRadialGradient(0, 0, 10, 0, 0, 48);
    halo.addColorStop(0, palette.halo + '0.35)');
    halo.addColorStop(1, palette.halo + '0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(0, 0, 48, 0, Math.PI * 2); ctx.fill();

    // Cuerpo principal
    ctx.fillStyle = palette.body;
    ctx.strokeStyle = palette.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(0, 6, 26, 20, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Protuberancias en la cabeza
    for(let i = -1; i <= 1; i++){
      ctx.fillStyle = palette.body;
      ctx.beginPath(); ctx.arc(i * 13, -14, 10, Math.PI, 0); ctx.fill();
      ctx.strokeStyle = palette.dark; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(i * 13, -14, 10, Math.PI, 0); ctx.stroke();
    }

    // Ojos
    const eyeIris = (ev.kind === 'chaser') ? '#FF0000' : (ev.kind === 'zigzag' ? '#0066BB' : '#7700BB');
    [-10, 10].forEach(ex => {
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(ex, 2, 8, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = palette.dark; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(ex, 2, 8, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = eyeIris;
      ctx.beginPath(); ctx.arc(ex + 1, 2, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#000';
      ctx.beginPath(); ctx.arc(ex + 1, 2, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(ex + 2.5, 0, 1.2, 0, Math.PI * 2); ctx.fill();
    });

    // Boca (chaser muestra colmillos, los demás sonrisa)
    ctx.strokeStyle = palette.dark; ctx.lineWidth = 2;
    if(ev.kind === 'chaser'){
      // boca abierta, gruñendo
      ctx.fillStyle = '#440000';
      ctx.beginPath(); ctx.ellipse(0, 14, 9, 5, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      [-5, 0, 5].forEach(tx => {
        ctx.beginPath();
        ctx.moveTo(tx, 11); ctx.lineTo(tx - 2.5, 17); ctx.lineTo(tx + 2.5, 17);
        ctx.closePath(); ctx.fill();
      });
    } else {
      ctx.beginPath(); ctx.arc(0, 12, 9, 0.15, Math.PI - 0.15); ctx.stroke();
      ctx.fillStyle = '#fff';
      [-5, 0, 5].forEach(tx => {
        ctx.beginPath();
        ctx.moveTo(tx, 12); ctx.lineTo(tx - 2.5, 16); ctx.lineTo(tx + 2.5, 16);
        ctx.closePath(); ctx.fill();
      });
    }

    // Antenas con bolas
    ctx.strokeStyle = palette.antenna; ctx.lineWidth = 2.2;
    [[-13, -1], [13, 1]].forEach(([ax, dir]) => {
      ctx.beginPath();
      ctx.moveTo(ax, -22);
      ctx.quadraticCurveTo(ax + dir * 9, -36, ax + dir * 15, -30);
      ctx.stroke();
      ctx.fillStyle = palette.tip;
      ctx.beginPath(); ctx.arc(ax + dir * 15, -30, 4.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = palette.dark; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(ax + dir * 15, -30, 4.5, 0, Math.PI * 2); ctx.stroke();
    });

    // Tentáculos
    ctx.strokeStyle = palette.body; ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    const wave = Math.sin(now / 140) * 10;
    ctx.beginPath();
    ctx.moveTo(-22, 8); ctx.quadraticCurveTo(-36, 2 + wave, -32, 18 + wave * 0.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(22, 8); ctx.quadraticCurveTo(36, 2 - wave, 32, 18 - wave * 0.5);
    ctx.stroke();
    ctx.lineCap = 'butt';
  }
  ctx.restore();
}

function drawStar(sx, y){
  const t = performance.now() / 280;
  const bob   = Math.sin(t + sx * 0.01) * 5;
  const pulse = 1 + Math.sin(t * 2.2 + sx * 0.02) * 0.12;
  ctx.save();
  ctx.translate(sx + 20, y + 20 + bob);
  ctx.scale(pulse, pulse);

  // Halo exterior grande (estrella única = más visible)
  const glow = ctx.createRadialGradient(0, 0, 4, 0, 0, 36);
  glow.addColorStop(0, 'rgba(255,217,61,.55)');
  glow.addColorStop(1, 'rgba(255,140,0,0)');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(0, 0, 36, 0, Math.PI * 2); ctx.fill();

  // Destellos en cruz
  ctx.strokeStyle = 'rgba(255,240,100,0.45)';
  ctx.lineWidth = 1.5;
  for(let a = 0; a < Math.PI; a += Math.PI / 4){
    const len2 = 24 + Math.sin(t * 3 + a) * 4;
    ctx.beginPath();
    ctx.moveTo(Math.cos(a) * 18, Math.sin(a) * 18);
    ctx.lineTo(Math.cos(a) * len2, Math.sin(a) * len2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-Math.cos(a) * 18, -Math.sin(a) * 18);
    ctx.lineTo(-Math.cos(a) * len2, -Math.sin(a) * len2);
    ctx.stroke();
  }

  // Cuerpo de la estrella (más grande que antes: radio 16 en vez de 12)
  ctx.fillStyle = '#FFD93D';
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for(let i = 0; i < 5; i++){
    const a  = -Math.PI / 2 + i * (Math.PI * 2 / 5);
    const a2 = a + Math.PI / 5;
    const x1 = Math.cos(a) * 16,  y1 = Math.sin(a) * 16;
    const x2 = Math.cos(a2) * 7,  y2 = Math.sin(a2) * 7;
    if(i === 0) ctx.moveTo(x1, y1); else ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Brillo central
  ctx.fillStyle = 'rgba(255,255,200,0.75)';
  ctx.beginPath(); ctx.arc(-2, -3, 5, 0, Math.PI * 2); ctx.fill();

  ctx.restore();
}

// Helper compartido entre draw y colisión para mantenerlas sincronizadas
function astroOffset(worldX){
  const t = performance.now();
  return {
    bob:   Math.sin(t / 320 + worldX * 0.005) * 10,
    drift: Math.sin(t / 700 + worldX * 0.01)  * 18,
  };
}
function drawAstronaut(sx, y, worldX){
  const { bob, drift } = astroOffset(worldX);
  ctx.save();
  ctx.translate(sx + 30 + drift, y + 40 + bob);

  // Halo de energía azul
  const halo = ctx.createRadialGradient(0, 0, 8, 0, 0, 52);
  halo.addColorStop(0, 'rgba(100,200,255,0.3)');
  halo.addColorStop(1, 'rgba(100,200,255,0)');
  ctx.fillStyle = halo;
  ctx.beginPath(); ctx.arc(0, 0, 52, 0, Math.PI * 2); ctx.fill();

  // Indicador "TIP" pulsante encima
  const pulse = 0.85 + Math.sin(performance.now() / 250) * 0.15;
  ctx.save();
  ctx.scale(pulse, pulse);
  ctx.fillStyle = '#FFD93D';
  ctx.strokeStyle = '#CC8800';
  ctx.lineWidth = 1.5;
  roundRect(ctx, -18, -52, 36, 18, 5);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#1a1547';
  ctx.font = 'bold 11px system-ui';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TIP!', 0, -43);
  ctx.restore();

  // Sombra del cuerpo (traje blanco)
  ctx.fillStyle = '#C8C8C8';
  ctx.beginPath(); ctx.ellipse(2, 28, 14, 20, 0, 0, Math.PI * 2); ctx.fill();

  // Cuerpo del traje espacial
  ctx.fillStyle = '#EFEFEF';
  ctx.strokeStyle = '#AAAAAA'; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.ellipse(0, 18, 15, 20, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Casco (esfera)
  ctx.fillStyle = '#F5F5F5';
  ctx.strokeStyle = '#999'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, -8, 20, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  // Visera (gradiente azul celeste)
  const visor = ctx.createRadialGradient(-3, -11, 2, 0, -8, 14);
  visor.addColorStop(0, 'rgba(160,230,255,0.95)');
  visor.addColorStop(1, 'rgba(0,100,180,0.85)');
  ctx.fillStyle = visor;
  ctx.beginPath(); ctx.arc(0, -8, 14, 0, Math.PI * 2); ctx.fill();

  // Reflejo en visera
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.beginPath(); ctx.ellipse(-5, -17, 4.5, 2.5, -0.3, 0, Math.PI * 2); ctx.fill();

  // Brazo izquierdo (abajo)
  ctx.fillStyle = '#EFEFEF'; ctx.strokeStyle = '#AAAAAA'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(-20, 20, 5, 11, 0.25, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

  // Brazo derecho (saludando, animado)
  const waveA = Math.sin(performance.now() / 340) * 0.45;
  ctx.save();
  ctx.translate(18, 8);
  ctx.rotate(-0.75 + waveA);
  ctx.fillStyle = '#EFEFEF'; ctx.strokeStyle = '#AAAAAA'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(0, -11, 5, 13, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.restore();

  // Piernas
  [[-8, 0.15], [8, -0.15]].forEach(([lx, tilt]) => {
    ctx.fillStyle = '#EFEFEF'; ctx.strokeStyle = '#AAAAAA'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(lx, 33, 5, 10, tilt, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  });

  // Mochila de oxígeno (pack en la espalda — simplificado)
  ctx.fillStyle = '#CCC'; ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
  roundRect(ctx, -8, 6, 16, 14, 3); ctx.fill(); ctx.stroke();
  // Luces
  ctx.fillStyle = '#00FF88'; ctx.beginPath(); ctx.arc(-3, 13, 2.2, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FF4444'; ctx.beginPath(); ctx.arc( 3, 13, 2.2, 0, Math.PI*2); ctx.fill();

  ctx.restore();
}

function drawStation(sx){
  const t = performance.now()/300;
  const pulse = 1 + Math.sin(t)*0.08;
  const x = sx;
  const yTop = 80;
  const yBot = GROUND_Y + PLAYER_H;
  const wd = 60;
  ctx.save();
  const grad = ctx.createLinearGradient(x, yTop, x, yBot);
  grad.addColorStop(0, 'rgba(255,217,61,.8)');
  grad.addColorStop(0.5, 'rgba(0,217,255,.5)');
  grad.addColorStop(1, 'rgba(255,217,61,.8)');
  ctx.fillStyle = grad;
  ctx.fillRect(x-2, yTop, wd+4, yBot-yTop);
  ctx.strokeStyle = '#FFD93D'; ctx.lineWidth = 4 * pulse;
  ctx.strokeRect(x, yTop, wd, yBot-yTop);
  ctx.strokeStyle = '#00D9FF'; ctx.lineWidth = 2;
  ctx.strokeRect(x+6, yTop+6, wd-12, yBot-yTop-12);
  ctx.fillStyle = '#1a1547';
  ctx.beginPath(); ctx.arc(x+wd/2, (yTop+yBot)/2, 26, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FFD93D'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#FFD93D';
  ctx.font = 'bold 28px system-ui';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('?', x+wd/2, (yTop+yBot)/2 + 2);
  ctx.restore();
}

function drawStationDone(sx){
  const yTop = 80;
  const yBot = GROUND_Y + PLAYER_H;
  const wd = 60;
  ctx.save();
  ctx.fillStyle = 'rgba(61,220,132,.18)';
  ctx.fillRect(sx, yTop, wd, yBot-yTop);
  ctx.strokeStyle = '#3DDC84'; ctx.lineWidth = 2;
  ctx.setLineDash([6,6]);
  ctx.strokeRect(sx, yTop, wd, yBot-yTop);
  ctx.setLineDash([]);
  ctx.fillStyle = '#3DDC84';
  ctx.font = 'bold 32px system-ui';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('✓', sx+wd/2, (yTop+yBot)/2);
  ctx.restore();
}

function drawGoal(sx){
  const x = sx;
  const yBase = GROUND_Y + PLAYER_H;
  ctx.save();
  ctx.fillStyle = '#fff';
  ctx.fillRect(x+10, yBase-260, 6, 260);
  const wave = Math.sin(performance.now()/200) * 6;
  ctx.fillStyle = '#FF4D6D';
  ctx.beginPath();
  ctx.moveTo(x+16, yBase-260);
  ctx.lineTo(x+90+wave, yBase-240);
  ctx.lineTo(x+16, yBase-220);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFD93D';
  ctx.beginPath(); ctx.arc(x+13, yBase-262, 8, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FFD93D';
  ctx.font = 'bold 18px system-ui';
  ctx.textAlign = 'center';
  ctx.fillText('META', x+45, yBase-200);
  ctx.restore();
}

function drawPlayer(){
  const p = state.player;
  const img = state.selectedChar ? assets.chars[state.selectedChar.id] : null;
  const t = performance.now()/120;
  const runBob = (p.onGround && state.moving) ? Math.abs(Math.sin(t*1.4))*4 : 0;
  let scaleX = 1, scaleY = 1;
  if(!p.onGround){
    if(p.vy < 0){ scaleX = 0.9; scaleY = 1.1; }
    else { scaleX = 1.05; scaleY = 0.95; }
  }
  const tilt = !p.onGround ? Math.max(-0.25, Math.min(0.25, p.vy * 0.02)) : 0;

  const blink = performance.now() < state.invulnerableUntil
    ? Math.floor(performance.now()/80) % 2 === 0 : false;
  if(blink) return;

  ctx.save();
  const ph = p.ducking ? DUCK_H : PLAYER_H;
  const yTop = p.y + (PLAYER_H - ph) + runBob;
  const cx = p.x + PLAYER_W/2;
  const cy = yTop + ph/2;
  ctx.translate(cx, cy);
  ctx.rotate(tilt);
  const duckScaleY = p.ducking ? 0.6 : 1;
  ctx.scale(scaleX * (p.facing < 0 ? -1 : 1), scaleY * duckScaleY);

  ctx.save();
  ctx.scale(p.facing < 0 ? -1 : 1, 1);
  ctx.scale(1/scaleX, 1/(scaleY*duckScaleY));
  ctx.fillStyle = 'rgba(0,0,0,.35)';
  const shadowScale = p.onGround ? 1 : Math.max(0.4, 1 - Math.abs(p.y - GROUND_Y)/300);
  ctx.beginPath();
  ctx.ellipse(0, ph/2 + 8, 35*shadowScale, 8*shadowScale, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();

  if(img){
    ctx.drawImage(img, -PLAYER_W/2, -PLAYER_H/2, PLAYER_W, PLAYER_H);
  } else {
    ctx.fillStyle = state.selectedChar?.color || '#FFD93D';
    ctx.beginPath();
    ctx.arc(0, 0, PLAYER_W/2, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.restore();

  if(state.combo >= 3){
    ctx.save();
    ctx.fillStyle = '#FFD93D';
    ctx.font = 'bold 20px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(`x${state.combo}`, p.x + PLAYER_W/2, p.y - 10);
    ctx.restore();
  }
}

function drawParticles(){
  for(const pt of state.particles){
    ctx.save();
    ctx.globalAlpha = Math.max(0, pt.life/40);
    ctx.fillStyle = pt.color;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
  }
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}

// ==================== LOOP ====================
let lastTime = 0;
function loop(time){
  const dt = (time - lastTime) / 1000;
  lastTime = time;
  update(dt);
  drawScene();
  requestAnimationFrame(loop);
}

// ==================== RESIZE ====================
function resizeCanvas(){
  const aspect = 16/9;
  const vp = window.visualViewport;
  const maxW = vp ? vp.width : window.innerWidth;
  const maxH = vp ? vp.height : window.innerHeight;
  let w = maxW, h = maxW/aspect;
  if(h > maxH){ h = maxH; w = h*aspect; }
  canvas.style.width = Math.floor(w) + 'px';
  canvas.style.height = Math.floor(h) + 'px';
}
window.addEventListener('resize', resizeCanvas);
if(window.visualViewport) window.visualViewport.addEventListener('resize', resizeCanvas);

// ==================== CONTROLES TÁCTILES ====================
function isTouchDevice(){ return ('ontouchstart' in window) || navigator.maxTouchPoints > 0; }

function setupTouchControls(){
  const pairs = [
    ['tc-left',  ()=>{ keys['arrowleft']=true; },  ()=>{ keys['arrowleft']=false; }],
    ['tc-right', ()=>{ keys['arrowright']=true; }, ()=>{ keys['arrowright']=false; }],
    ['tc-duck',  ()=>{ keys['arrowdown']=true; },  ()=>{ keys['arrowdown']=false; }],
    ['tc-jump',  ()=>{ jumpQueued=true; keys['arrowup']=true; }, ()=>{ keys['arrowup']=false; keys[' ']=false; keys['w']=false; }],
  ];
  for(const [id, dn, up] of pairs){
    const el = document.getElementById(id);
    if(!el) continue;
    el.addEventListener('pointerdown', e=>{ e.preventDefault(); ensureAudio(); dn(); }, {passive:false});
    el.addEventListener('pointerup',   e=>{ e.preventDefault(); up(); }, {passive:false});
    el.addEventListener('pointerleave',e=>{ e.preventDefault(); up(); }, {passive:false});
    el.addEventListener('pointercancel',e=>{ e.preventDefault(); up(); }, {passive:false});
  }
}

function showTouchControls(){ if(isTouchDevice()) document.getElementById('touch-controls').classList.add('show'); }
function hideTouchControls(){ document.getElementById('touch-controls').classList.remove('show'); }

// ==================== INIT ====================
async function init(){
  loadProgress();
  resizeCanvas();
  setupTouchControls();
  await loadAllAssets();
  document.getElementById('loading').classList.add('hidden');
  // Mostrar historia de bienvenida antes del menú
  showStory(
    'Englishland',
    'English Adventure Quest',
    'Explora Englishland y recupera la luz de las palabras',
    LEVEL_STORIES[0],
    null,
    '¡Comenzar la aventura! ▶',
    showMenu
  );
  requestAnimationFrame(loop);
}

init();




