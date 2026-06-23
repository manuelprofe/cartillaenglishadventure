const WORD_BANK = {
  1: {
    label: 'Nivel 1 - English Explorer',
    guide: 'Cosmo',
    words: [
      ['pencil','Objeto para escribir.'],['eraser','Borra errores del cuaderno.'],['notebook','Cuaderno para escribir.'],['ruler','Sirve para medir.'],['scissors','Sirven para cortar.'],['backpack','Bolso escolar.'],['book','Tiene paginas para leer.'],['marker','Marcador de colores.'],['chair','Objeto para sentarse.'],['desk','Mesa escolar.'],['red','Color de una manzana.'],['blue','Color del cielo.'],['green','Color de muchas hojas.'],['yellow','Color del sol.'],['orange','Color de una naranja.'],['purple','Color entre azul y rojo.'],['one','Numero 1.'],['two','Numero 2.'],['three','Numero 3.'],['four','Numero 4.'],['five','Numero 5.'],['six','Numero 6.'],['seven','Numero 7.'],['eight','Numero 8.'],['nine','Numero 9.'],['ten','Numero 10.'],['head','Parte superior del cuerpo.'],['eyes','Sirven para ver.'],['ears','Sirven para escuchar.'],['nose','Sirve para oler.'],['mouth','Sirve para hablar.'],['hands','Sirven para tocar.'],['feet','Sirven para caminar.'],['mother','Mama en ingles.'],['father','Papa en ingles.'],['sister','Hermana.'],['brother','Hermano.'],['hello','Saludo basico.'],['good morning','Saludo de la manana.'],['thank you','Expresion para agradecer.']
    ]
  },
  2: {
    label: 'Nivel 2 - Word Builder',
    guide: 'Nova',
    words: [
      ['happy','Emocion positiva.'],['sad','Emocion triste.'],['angry','Emocion de enojo.'],['scared','Sentir miedo.'],['hungry','Necesidad de comer.'],['tired','Necesidad de descansar.'],['pizza','Comida redonda con queso.'],['apple','Fruta roja o verde.'],['banana','Fruta amarilla.'],['bread','Alimento para sandwich.'],['rice','Grano blanco de comida.'],['water','Bebida basica.'],['shirt','Prenda para el torso.'],['pants','Prenda para las piernas.'],['shoes','Prenda para los pies.'],['dress','Prenda de vestir.'],['hat','Prenda para la cabeza.'],['jacket','Prenda para el frio.'],['dog','Animal domestico que ladra.'],['cat','Animal domestico que maulla.'],['rabbit','Animal de orejas largas.'],['bird','Animal que vuela.'],['fish','Animal que nada.'],['lion','Animal salvaje de melena.'],['elephant','Animal grande con trompa.'],['monkey','Animal que trepa.'],['big','Grande.'],['small','Pequeno.'],['fast','Rapido.'],['slow','Lento.'],['hot','Caliente.'],['cold','Frio.'],['I like','Expresion para gustos.'],["I don't like",'Expresion para algo que no gusta.'],['favorite','Preferido.'],['fruit','Categoria de apple y banana.'],['animal','Categoria de dog y cat.'],['clothes','Categoria de shirt y shoes.'],['food','Categoria de pizza y bread.'],['friend','Companero o amiga.']
    ]
  },
  3: {
    label: 'Nivel 3 - Sentence Hero',
    guide: 'Astro',
    words: [
      ['wake up','Levantarse.'],['brush teeth','Cepillarse los dientes.'],['have breakfast','Desayunar.'],['go to school','Ir al colegio.'],['study','Estudiar.'],['play','Jugar.'],['read','Leer.'],['write','Escribir.'],['draw','Dibujar.'],['listen','Escuchar.'],['speak','Hablar.'],['run','Correr.'],['jump','Saltar.'],['swim','Nadar.'],['dance','Bailar.'],['sing','Cantar.'],['do homework','Hacer tarea.'],['go to bed','Ir a dormir.'],['morning','Manana.'],['afternoon','Tarde.'],['night','Noche.'],["o'clock",'Hora en punto.'],['half past','Media hora.'],['Monday','Primer dia escolar comun.'],['Tuesday','Dia despues de Monday.'],['Wednesday','Mitad de semana.'],['Thursday','Antes de Friday.'],['Friday','Ultimo dia escolar comun.'],['I can','Expresa habilidad.'],["I can't",'Expresa imposibilidad.'],['Can you...?','Pregunta por habilidad.'],['What time is it?','Pregunta por la hora.'],['She goes','Forma con she/he.'],['He plays','Forma con he/she.'],['I have lunch','Almuerzo.'],['daily routine','Rutina diaria.'],['action verb','Verbo de accion.'],['question','Pregunta.'],['answer','Respuesta.'],['sentence','Oracion.']
    ]
  },
  4: {
    label: 'Nivel 4 - English Communicator',
    guide: 'Nebu',
    words: [
      ['school','Lugar para estudiar.'],['park','Lugar con juegos o naturaleza.'],['hospital','Lugar de atencion medica.'],['market','Lugar para comprar comida.'],['library','Lugar con libros.'],['church','Lugar religioso.'],['bank','Lugar para dinero.'],['cinema','Lugar para ver peliculas.'],['airport','Lugar de aviones.'],['restaurant','Lugar para comer.'],['near','Cerca.'],['far','Lejos.'],['next to','Al lado de.'],['in front of','En frente de.'],['behind','Detras.'],['between','Entre dos lugares.'],['there is','Existe en singular.'],['there are','Existen en plural.'],['big','Grande.'],['small','Pequeno.'],['tall','Alto.'],['short','Bajo o corto.'],['old','Viejo.'],['new','Nuevo.'],['beautiful','Bonito.'],['clean','Limpio.'],['quiet','Tranquilo.'],['busy','Ocupado.'],['What is your name?','Pregunta por el nombre.'],['My name is','Respuesta con nombre.'],['How are you?','Pregunta por estado.'],['I am fine','Respuesta de estado.'],['Nice to meet you','Encantado de conocerte.'],['Where is...?','Pregunta ubicacion.'],['Do you like...?','Pregunta por gusto.'],['Yes, I do','Respuesta afirmativa.'],["No, I don't",'Respuesta negativa.'],['community','Comunidad.'],['dialogue','Conversacion.'],['place','Lugar.']
    ]
  }
};

const BINGO_CALL_MODES = ['word', 'definition', 'sentence'];

const WORD_SENTENCE_HINTS = {
  1: {
    pencil: 'I write with a pencil', eraser: 'I erase with an eraser', notebook: 'I write in my notebook', ruler: 'The ruler is long', scissors: 'I cut with scissors', backpack: 'My backpack is blue', book: 'Open your book', marker: 'The marker is green', chair: 'Sit on the chair', desk: 'The book is on the desk', red: 'The apple is red', blue: 'The sky is blue', green: 'The leaf is green', yellow: 'The sun is yellow', orange: 'The orange is orange', purple: 'My pencil is purple', one: 'I see one book', two: 'I see two pencils', three: 'Count to three', four: 'I have four colors', five: 'Show me five fingers', six: 'I see six stars', seven: 'Seven is a number', eight: 'Eight is a number', nine: 'Nine is a number', ten: 'I can count to ten', head: 'Touch your head', eyes: 'Point to your eyes', ears: 'Touch your ears', nose: 'Touch your nose', mouth: 'Point to your mouth', hands: 'Clap your hands', feet: 'Touch your feet', mother: 'This is my mother', father: 'This is my father', sister: 'This is my sister', brother: 'This is my brother', hello: 'Say hello', 'good morning': 'Say good morning', 'thank you': 'Say thank you'
  },
  2: {
    happy: 'I am happy today', sad: 'I am sad today', angry: 'I am angry', scared: 'I am scared', hungry: 'I am hungry', tired: 'I am tired', pizza: 'I like pizza', apple: 'The apple is red', banana: 'The banana is yellow', bread: 'I eat bread', rice: 'I eat rice', water: 'I drink water', shirt: 'My shirt is blue', pants: 'I wear pants', shoes: 'My shoes are black', dress: 'This is a dress', hat: 'This is my hat', jacket: 'This is my jacket', dog: 'The dog is big', cat: 'The cat is small', rabbit: 'The rabbit is fast', bird: 'The bird can fly', fish: 'The fish can swim', lion: 'The lion is strong', elephant: 'The elephant is big', monkey: 'The monkey can climb', big: 'The elephant is big', small: 'The cat is small', fast: 'The rabbit is fast', slow: 'The turtle is slow', hot: 'The pizza is hot', cold: 'The water is cold', 'I like': 'I like apples', "I don't like": 'I do not like fish', favorite: 'My favorite fruit is apple', fruit: 'Apple is a fruit', animal: 'Dog is an animal', clothes: 'Shirt and shoes are clothes', food: 'Pizza is food', friend: 'My friend is happy'
  },
  3: {
    'wake up': 'I wake up in the morning', 'brush teeth': 'I brush my teeth', 'have breakfast': 'I have breakfast', 'go to school': 'I go to school', study: 'I study English', play: 'I play in the afternoon', read: 'I read a book', write: 'I write in my notebook', draw: 'I draw a cat', listen: 'I listen to my teacher', speak: 'I speak English', run: 'I can run', jump: 'I can jump', swim: 'I can swim', dance: 'I can dance', sing: 'I can sing', 'do homework': 'I do homework', 'go to bed': 'I go to bed at night', morning: 'I wake up in the morning', afternoon: 'I play in the afternoon', night: 'I sleep at night', "o'clock": 'It is three o clock', 'half past': 'It is half past seven', Monday: 'Today is Monday', Tuesday: 'Today is Tuesday', Wednesday: 'Today is Wednesday', Thursday: 'Today is Thursday', Friday: 'Today is Friday', 'I can': 'I can jump', "I can't": 'I cannot fly', 'Can you...?': 'Can you dance', 'What time is it?': 'What time is it', 'She goes': 'She goes to school', 'He plays': 'He plays after school', 'I have lunch': 'I have lunch at school', 'daily routine': 'This is my daily routine', 'action verb': 'Jump is an action verb', question: 'Can you swim is a question', answer: 'Yes I can is an answer', sentence: 'I like English is a sentence'
  },
  4: {
    school: 'There is a school', park: 'There is a park', hospital: 'There is a hospital', market: 'There is a market', library: 'There is a library', church: 'There is a church', bank: 'The bank is next to the market', cinema: 'There is a cinema', airport: 'There is an airport', restaurant: 'The restaurant is clean', near: 'The school is near my house', far: 'The hospital is far', 'next to': 'The bank is next to the market', 'in front of': 'The library is in front of the park', behind: 'The park is behind the school', between: 'The bank is between the market and the park', 'there is': 'There is a school', 'there are': 'There are two schools', big: 'The school is big', small: 'My town is small', tall: 'The building is tall', short: 'The street is short', old: 'The church is old', new: 'The cinema is new', beautiful: 'My town is beautiful', clean: 'My classroom is clean', quiet: 'The library is quiet', busy: 'The market is busy', 'What is your name?': 'What is your name', 'My name is': 'My name is Lumi', 'How are you?': 'How are you', 'I am fine': 'I am fine', 'Nice to meet you': 'Nice to meet you', 'Where is...?': 'Where is the school', 'Do you like...?': 'Do you like pizza', 'Yes, I do': 'Yes I do', "No, I don't": 'No I do not', community: 'My community is small', dialogue: 'This is a short dialogue', place: 'The park is a place'
  }
};

const QUESTION_BANK = {
  1: ['What is this','Is it a pencil','Is it a book','What color is it','Is this red','Is this blue','How many pencils','How many books','Can you say hello','Can you say thank you','Where is your book','Where is your pencil','Who is she','Who is he','Is this your mother','Is this your father','Can you count to ten','What is your favorite color','Can you touch your head','Can you raise your hand'],
  2: ['How do you feel','Are you happy','Are you sad','Are you hungry','Are you tired','Do you like apples','Do you like pizza','Do you like fish','What food do you like','What is your favorite fruit','What animal is this','Is the dog big','Is the cat small','Can the bird fly','Can the fish swim','What are you wearing','Is this a jacket','Are these shoes','What color is your shirt','Who is your friend'],
  3: ['What do you do in the morning','Do you brush your teeth','Do you have breakfast','Do you go to school','What do you do in the afternoon','What do you do at night','Do you read books','Do you write in your notebook','Can you jump','Can you swim','Can you dance','Can you sing','Can you fly','What day is today','Is today Monday','What time is it','Do you have lunch at school','Can you make a sentence','What action can you do','Do you listen to your teacher'],
  4: ['Where is the school','Where is the hospital','Where is the park','Is there a park in your town','Is there a library in your town','Is there a market near your house','What places are in your town','Is the library quiet','Is the market busy','Is the restaurant clean','Is the bank next to the market','Is the school near your house','Is the hospital far','What is your name','How are you','Do you like pizza','Do you like your town','Can you describe your classroom','Who is your friend','Is your community beautiful']
};

const SENTENCE_MODES = ['order', 'missing', 'choose'];
const SENTENCE_MODE_WEIGHTS = {
  1: { order: 0.7, missing: 0.2, choose: 0.1 },
  2: { order: 0.55, missing: 0.3, choose: 0.15 },
  3: { order: 0.45, missing: 0.35, choose: 0.2 },
  4: { order: 0.35, missing: 0.35, choose: 0.3 }
};

const FEEDBACK_MESSAGES = {
  correct: ['Correcto. Mission Star ganada.', 'Excelente. Sigue brillando.', 'Muy bien. Nueva palabra encendida.'],
  retry: ['Buen intento. Intenta de nuevo.', 'Casi. Revisa con calma.', 'Puedes lograrlo. Un intento mas.'],
  hint: ['Escucha otra vez.', 'Revisa el orden.', 'Mira la primera palabra.']
};

const SIMON_COMMANDS = {
  1: ['touch your head','clap your hands','show me blue','count to three','say hello','open your book','raise your hand','point to red','touch your nose','stand up','sit down','close your notebook','show me your pencil','put your hands up','point to your backpack','say good morning','touch your ears','show me two fingers','point to yellow','say thank you','touch your desk','show me your book','point to green','count to ten'],
  2: ['jump twice','show me your shoes','say I like apples','touch something green','act happy','walk slowly','draw a cat','say I am hungry','point to your jacket','show me a fruit','act sad','act tired','say I do not like fish','say the dog is big','say the cat is small','jump like a rabbit','fly like a bird','say my shirt is blue','point to your hat','say pizza is hot','say water is cold','show me an animal','say my favorite food is pizza','run fast in place'],
  3: ['mime wake up','say I can swim','jump and clap','ask what time is it','say Monday','pretend to read','write in the air','dance for three seconds','say I have lunch','mime go to bed','mime brush your teeth','say I can jump','say I cannot fly','ask can you dance','say today is Monday','mime go to school','mime have breakfast','say I go to bed at night','say it is three o clock','mime do homework','say I play in the afternoon','pretend to listen','pretend to speak','say I study at school'],
  4: ['point behind you','say there is a park','ask where is the school','describe something beautiful','say nice to meet you','point next to you','say the market is busy','ask do you like pizza','say no I do not','make a short dialogue','say there are two schools','say the bank is next to the market','say the library is quiet','say the restaurant is clean','say yes I do','say my town has a park','say the school is near my house','say the hospital is far','ask what is your name','say my name is Lumi','ask how are you','say I am fine','say there is a cinema','describe your classroom']
};

const VISUALS = {
  pencil:'PEN', eraser:'ERASE', notebook:'NOTE', ruler:'RULER', scissors:'CUT', backpack:'BAG', book:'BOOK', marker:'MARK',
  chair:'CHAIR', desk:'DESK', red:'RED', blue:'BLUE', green:'GREEN', yellow:'YELLOW', orange:'ORANGE', purple:'PURPLE',
  one:'1', two:'2', three:'3', four:'4', five:'5', six:'6', seven:'7', eight:'8', nine:'9', ten:'10',
  head:'HEAD', eyes:'EYES', ears:'EARS', nose:'NOSE', mouth:'MOUTH', hands:'HANDS', feet:'FEET',
  mother:'MOM', father:'DAD', sister:'SIS', brother:'BRO', hello:'HELLO', 'good morning':'AM', 'thank you':'THANKS',
  happy:'HAPPY', sad:'SAD', angry:'MAD', scared:'SCARED', hungry:'HUNGRY', tired:'TIRED', pizza:'PIZZA', apple:'APPLE', banana:'BANANA',
  bread:'BREAD', rice:'RICE', water:'WATER', shirt:'SHIRT', pants:'PANTS', shoes:'SHOES', dress:'DRESS', hat:'HAT', jacket:'JACKET',
  dog:'DOG', cat:'CAT', rabbit:'RABBIT', bird:'BIRD', fish:'FISH', lion:'LION', elephant:'ELEPH', monkey:'MONKEY',
  big:'BIG', small:'SMALL', fast:'FAST', slow:'SLOW', hot:'HOT', cold:'COLD', 'I like':'LIKE', "I don't like":'NO',
  favorite:'FAV', fruit:'FRUIT', animal:'ANIMAL', clothes:'CLOTHES', food:'FOOD', friend:'FRIEND',
  'wake up':'WAKE', 'brush teeth':'BRUSH', 'have breakfast':'EAT', 'go to school':'SCHOOL', study:'STUDY', play:'PLAY',
  read:'READ', write:'WRITE', draw:'DRAW', listen:'LISTEN', 'Your turn':'TURN', speak:'SPEAK', run:'RUN', jump:'JUMP', swim:'SWIM',
  dance:'DANCE', sing:'SING', 'do homework':'TASK', 'go to bed':'BED', morning:'AM', afternoon:'PM', night:'NIGHT',
  "o'clock":'TIME', 'half past':'HALF', Monday:'MON', Tuesday:'TUE', Wednesday:'WED', Thursday:'THU', Friday:'FRI',
  'I can':'CAN', "I can't":'CANT', 'Can you...?':'CAN?', 'What time is it?':'TIME?', 'She goes':'SHE', 'He plays':'HE',
  'I have lunch':'LUNCH', 'daily routine':'ROUTINE', 'action verb':'VERB', question:'?', answer:'ANS', sentence:'ABC',
  school:'SCHOOL', park:'PARK', hospital:'HOSP', market:'MARKET', library:'LIB', church:'CHURCH', bank:'BANK', cinema:'MOVIE',
  airport:'PLANE', restaurant:'FOOD', near:'NEAR', far:'FAR', 'next to':'NEXT', 'in front of':'FRONT', behind:'BACK',
  between:'MID', 'there is':'1', 'there are':'2+', tall:'TALL', short:'SHORT', old:'OLD', new:'NEW',
  beautiful:'NICE', clean:'CLEAN', quiet:'QUIET', busy:'BUSY', 'What is your name?':'NAME?', 'My name is':'NAME',
  'How are you?':'HOW?', 'I am fine':'FINE', 'Nice to meet you':'NICE', 'Where is...?':'WHERE?',
  'Do you like...?':'LIKE?', 'Yes, I do':'YES', "No, I don't":'NO', community:'TOWN', dialogue:'TALK', place:'PLACE',
  FREE:'FREE'
};

const COMMAND_ICONS = {
  'touch your head':'touch your head', 'clap your hands':'clap your hands', 'show me blue':'blue', 'count to three':'three', 'say hello':'hello',
  'open your book':'book', 'raise your hand':'raise your hand', 'point to red':'red', 'touch your nose':'nose', 'stand up':'stand up',
  'jump twice':'jump twice', 'show me your shoes':'shoes', 'say I like apples':'apple', 'touch something green':'green',
  'act happy':'happy', 'walk slowly':'walk slowly', 'draw a cat':'cat', 'say I am hungry':'hungry', 'point to your jacket':'jacket',
  'show me a fruit':'fruit', 'mime wake up':'mime wake up', 'say I can swim':'say I can swim', 'jump and clap':'clap your hands',
  'ask what time is it':'What time is it?', 'say Monday':'Monday', 'pretend to read':'pretend to read', 'write in the air':'write in the air',
  'dance for three seconds':'dance for three seconds', 'say I have lunch':'I have lunch', 'mime go to bed':'mime go to bed',
  'point behind you':'behind', 'say there is a park':'park', 'ask where is the school':'school',
  'describe something beautiful':'beautiful', 'say nice to meet you':'Nice to meet you', 'point next to you':'next to',
  'say the market is busy':'market', 'ask do you like pizza':'pizza', 'say no I do not':"No, I don't", 'make a short dialogue':'dialogue'
};

const COLOR_SWATCHES = {
  red:'#ef4444', blue:'#2563eb', green:'#16a34a', yellow:'#facc15', orange:'#f97316', purple:'#7c3aed'
};

Object.assign(COMMAND_ICONS, {
  'sit down':'chair', 'close your notebook':'notebook', 'show me your pencil':'pencil',
  'put your hands up':'hands', 'point to your backpack':'backpack', 'say good morning':'good morning',
  'touch your ears':'ears', 'show me two fingers':'two', 'point to yellow':'yellow',
  'touch your desk':'desk', 'show me your book':'book', 'point to green':'green',
  'count to ten':'ten', 'act sad':'sad', 'act tired':'tired',
  'say I do not like fish':'fish', 'say the dog is big':'dog', 'say the cat is small':'cat',
  'jump like a rabbit':'rabbit', 'fly like a bird':'bird', 'say my shirt is blue':'shirt',
  'point to your hat':'hat', 'say pizza is hot':'pizza', 'say water is cold':'water',
  'show me an animal':'animal', 'say my favorite food is pizza':'pizza', 'run fast in place':'run',
  'mime brush your teeth':'brush teeth', 'say I can jump':'jump', 'say I cannot fly':"I can't",
  'ask can you dance':'dance', 'say today is Monday':'Monday', 'mime go to school':'go to school',
  'mime have breakfast':'have breakfast', 'say I go to bed at night':'go to bed',
  'say it is three o clock':"o'clock", 'mime do homework':'do homework',
  'say I play in the afternoon':'afternoon', 'pretend to listen':'listen',
  'pretend to speak':'speak', 'say I study at school':'study',
  'say there are two schools':'school', 'say the bank is next to the market':'bank',
  'say the library is quiet':'library', 'say the restaurant is clean':'restaurant',
  'say yes I do':'Yes, I do', 'say my town has a park':'park',
  'say the school is near my house':'school', 'say the hospital is far':'hospital',
  'ask what is your name':'What is your name?', 'say my name is Lumi':'My name is',
  'ask how are you':'How are you?', 'say I am fine':'I am fine',
  'say there is a cinema':'cinema', 'describe your classroom':'school'
});

const RESOURCE_IMAGES = {
  pencil:'assets/resources/school-pencil.png',
  eraser:'assets/resources/school-eraser.png',
  notebook:'assets/resources/school-notebook.png',
  ruler:'assets/resources/school-ruler.png',
  scissors:'assets/resources/school-scissors.png',
  backpack:'assets/resources/school-backpack.png',
  book:'assets/resources/school-number-book.png',
  marker:'assets/resources/school-pencil.png',
  chair:'assets/resources/school-chair.png',
  desk:'assets/resources/school-desk.png',
  one:'assets/resources/school-number-book.png',
  two:'assets/resources/school-number-book.png',
  three:'assets/resources/school-number-book.png',
  four:'assets/resources/school-number-book.png',
  five:'assets/resources/school-number-book.png',
  six:'assets/resources/school-number-book.png',
  seven:'assets/resources/school-number-book.png',
  eight:'assets/resources/school-number-book.png',
  nine:'assets/resources/school-number-book.png',
  ten:'assets/resources/school-number-book.png',
  happy:'assets/resources/feeling-happy.png',
  sad:'assets/resources/feeling-sad.png',
  angry:'assets/resources/feeling-angry.png',
  scared:'assets/resources/feeling-scared.png',
  hungry:'assets/resources/feeling-hungry.png',
  tired:'assets/resources/feeling-tired.png',
  pizza:'assets/resources/food-pizza.png',
  apple:'assets/resources/food-apple.png',
  banana:'assets/resources/food-banana.png',
  bread:'assets/resources/food-bread.png',
  rice:'assets/resources/food-rice.png',
  water:'assets/resources/food-water.png',
  school:'assets/resources/place-school.png',
  park:'assets/resources/place-park.png',
  hospital:'assets/resources/place-hospital.png',
  market:'assets/resources/place-market.png',
  library:'assets/resources/place-library.png',
  church:'assets/resources/place-church.png',
  bank:'assets/resources/place-bank.png',
  cinema:'assets/resources/place-cinema.png',
  airport:'assets/resources/place-airport.png',
  restaurant:'assets/resources/place-restaurant.png',
  'touch your head':'assets/resources/action-touch-head.png',
  'clap your hands':'assets/resources/action-clap-hands.png',
  'raise your hand':'assets/resources/action-raise-hand.png',
  'stand up':'assets/resources/action-stand-up.png',
  'jump twice':'assets/resources/action-jump.png',
  'walk slowly':'assets/resources/action-walk-slowly.png',
  'pretend to read':'assets/resources/action-read.png',
  'write in the air':'assets/resources/action-write-air.png',
  'dance for three seconds':'assets/resources/action-dance.png',
  'say I can swim':'assets/resources/action-swim.png',
  'mime go to bed':'assets/resources/action-go-to-bed.png',
  'mime wake up':'assets/resources/action-wake-up.png'
};

const SENTENCE_BANK = {
  1: [
    ['Saludo basico', 'Hello my name is Cosmo'], ['Saludo de clase', 'Good morning my teacher'], ['Objeto escolar', 'This is a pencil'], ['Objeto escolar', 'This is my book'], ['Objeto escolar', 'I have a notebook'], ['Objeto escolar', 'I have an eraser'], ['Objeto escolar', 'My backpack is blue'], ['Objeto escolar', 'The ruler is long'], ['Objeto escolar', 'The chair is red'], ['Objeto escolar', 'The desk is brown'], ['Numeros', 'I can count to ten'], ['Numeros', 'I see one book'], ['Numeros', 'I see two pencils'], ['Colores', 'My favorite color is yellow'], ['Cuerpo', 'Touch your head'], ['Cuerpo', 'Touch your nose'], ['Accion de clase', 'Open your book'], ['Accion de clase', 'Close your notebook'], ['Accion de clase', 'Raise your hand'], ['Familia', 'This is my mother'], ['Familia', 'This is my father'], ['Familia', 'This is my sister'], ['Familia', 'This is my brother'], ['Cortesia', 'Thank you my friend'], ['Disposicion', 'I am ready'], ['Motivacion', 'I like English'], ['Colores', 'The marker is green'], ['Colores', 'The scissors are orange'], ['Colores', 'My pencil is purple'], ['English Land', 'Hello English Land']
  ],
  2: [
    ['Emocion', 'I am happy today'], ['Emocion', 'I am sad today'], ['Emocion', 'I am hungry'], ['Emocion', 'I am tired'], ['Gustos', 'I like apples'], ['Gustos', 'I like bananas'], ['Gustos', 'I like pizza'], ['Gustos', 'I do not like fish'], ['Frutas', 'My favorite fruit is apple'], ['Animal', 'The dog is big'], ['Animal', 'The cat is small'], ['Animal', 'The rabbit is fast'], ['Animal', 'The turtle is slow'], ['Animal', 'The bird can fly'], ['Animal', 'The fish can swim'], ['Animal', 'The lion is strong'], ['Animal', 'The elephant is big'], ['Ropa', 'My shirt is blue'], ['Ropa', 'My shoes are black'], ['Ropa', 'This is my jacket'], ['Ropa', 'This is my hat'], ['Ropa', 'I wear pants'], ['Comida', 'The pizza is hot'], ['Comida', 'The water is cold'], ['Amistad', 'My friend is happy'], ['Animal', 'I like my dog'], ['Animal', 'I see a monkey'], ['Frutas', 'The banana is yellow'], ['Frutas', 'The apple is red'], ['Comida', 'Food gives me energy']
  ],
  3: [
    ['Rutina', 'I wake up in the morning'], ['Rutina', 'I brush my teeth'], ['Rutina', 'I have breakfast'], ['Rutina', 'I go to school'], ['Clase', 'I study English'], ['Accion', 'I read a book'], ['Accion', 'I write in my notebook'], ['Accion', 'I draw a cat'], ['Rutina', 'I play in the afternoon'], ['Rutina', 'I do homework'], ['Rutina', 'I go to bed at night'], ['Dia', 'Today is Monday'], ['Dia', 'Today is Tuesday'], ['Dia', 'Today is Wednesday'], ['Dia', 'Today is Thursday'], ['Dia', 'Today is Friday'], ['Habilidad', 'I can jump'], ['Habilidad', 'I can swim'], ['Habilidad', 'I can dance'], ['Habilidad', 'I can sing'], ['Habilidad', 'I cannot fly'], ['Habilidad', 'She can run'], ['Habilidad', 'He can play'], ['Pregunta', 'Can you jump'], ['Pregunta', 'Can you dance'], ['Hora', 'What time is it'], ['Hora', 'It is three o clock'], ['Hora', 'It is half past seven'], ['Rutina', 'I have lunch at school'], ['Clase', 'I listen to my teacher']
  ],
  4: [
    ['Lugar', 'There is a school'], ['Lugar', 'There is a park'], ['Lugar', 'There is a hospital'], ['Lugar', 'There is a library'], ['Lugar', 'There is a market'], ['Lugar', 'There is a restaurant'], ['Lugar', 'There are two schools'], ['Lugar', 'There are three parks'], ['Ubicacion', 'The bank is next to the market'], ['Ubicacion', 'The school is near my house'], ['Ubicacion', 'The hospital is far'], ['Ubicacion', 'The park is behind the school'], ['Ubicacion', 'The library is in front of the park'], ['Descripcion', 'The restaurant is clean'], ['Descripcion', 'The market is busy'], ['Descripcion', 'The library is quiet'], ['Comunidad', 'My town is beautiful'], ['Comunidad', 'My community is small'], ['Salon', 'My classroom is clean'], ['Amistad', 'My friend is kind'], ['Amistad', 'My friend is funny'], ['Dialogo', 'What is your name'], ['Dialogo', 'My name is Lumi'], ['Dialogo', 'How are you'], ['Dialogo', 'I am fine'], ['Dialogo', 'Nice to meet you'], ['Gustos', 'Do you like pizza'], ['Respuesta', 'Yes I do'], ['Respuesta', 'No I do not'], ['Pregunta', 'Where is the school']
  ]
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const shuffle = items => [...items].sort(() => Math.random() - 0.5);
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[char]));
const NOTO_ICON_CODES = window.NOTO_ICON_CODES || {};
const visualKeyVariants = value => {
  const raw = String(value || '').trim();
  if (!raw) return [];
  const lower = raw.toLowerCase();
  const noPunctuation = lower.replace(/[’']/g, '').replace(/[?!.]/g, '');
  const slug = noPunctuation.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return [...new Set([
    raw,
    lower,
    noPunctuation,
    slug,
    slug.replace(/-/g, ' '),
    raw.replace(/\s+/g, '-')
  ].filter(Boolean))];
};
const notoIconPath = text => {
  const key = visualKeyVariants(text).find(candidate => NOTO_ICON_CODES[candidate]);
  const code = key ? NOTO_ICON_CODES[key] : '';
  return code ? `assets/resources/noto-icons/${code}.svg` : '';
};
function inferNotoIconKey(text) {
  const t = String(text).toLowerCase();
  const rules = [
    ['backpack', 'backpack'], ['book', 'book'], ['notebook', 'notebook'], ['pencil', 'pencil'], ['desk', 'desk'], ['chair', 'chair'],
    ['head', 'head'], ['nose', 'nose'], ['ear', 'ears'], ['hand', 'hands'], ['clap', 'hands'], ['shoe', 'shoes'], ['hat', 'hat'], ['jacket', 'jacket'], ['shirt', 'shirt'],
    ['blue', 'blue'], ['red', 'red'], ['green', 'green'], ['yellow', 'yellow'], ['three', 'three'], ['two', 'two'], ['ten', 'ten'],
    ['hello', 'hello'], ['good morning', 'good morning'], ['thank', 'thank you'], ['monday', 'Monday'], ['time', 'What time is it?'], ['name', 'My name is'],
    ['happy', 'happy'], ['sad', 'sad'], ['tired', 'tired'], ['hungry', 'hungry'], ['pizza', 'pizza'], ['apple', 'apple'], ['fruit', 'fruit'], ['animal', 'animal'],
    ['dog', 'dog'], ['cat', 'cat'], ['rabbit', 'rabbit'], ['bird', 'bird'], ['fish', 'fish'],
    ['wake', 'wake up'], ['brush', 'brush teeth'], ['breakfast', 'have breakfast'], ['school', 'school'], ['homework', 'do homework'], ['bed', 'go to bed'],
    ['read', 'read'], ['write', 'write'], ['listen', 'listen'], ['speak', 'speak'], ['dance', 'dance'], ['swim', 'swim'], ['jump', 'jump'], ['run', 'run'],
    ['behind', 'behind'], ['next to', 'next to'], ['near', 'near'], ['far', 'far'], ['park', 'park'], ['market', 'market'], ['bank', 'bank'], ['library', 'library'], ['restaurant', 'restaurant'], ['hospital', 'hospital'], ['cinema', 'cinema'],
    ['beautiful', 'beautiful'], ['quiet', 'quiet'], ['busy', 'busy'], ['clean', 'clean'], ['dialogue', 'dialogue'], ['fine', 'I am fine'], ['yes', 'Yes, I do'], ['no', "No, I don't"],
  ];
  return rules.find(([needle]) => t.includes(needle))?.[1] || '';
}
const iconFor = text => VISUALS[text] || VISUALS[COMMAND_ICONS[text]] || COMMAND_ICONS[text] || 'EL';
const visualFor = text => {
  const mapped = COMMAND_ICONS[text];
  const noto = notoIconPath(text) || (mapped && notoIconPath(mapped)) || notoIconPath(inferNotoIconKey(text));
  if (noto) return { image: noto, alt: text };
  if (COLOR_SWATCHES[text]) return { color: COLOR_SWATCHES[text], label: VISUALS[text] || text };
  if (mapped && COLOR_SWATCHES[mapped]) return { color: COLOR_SWATCHES[mapped], label: VISUALS[mapped] || mapped };
  if (RESOURCE_IMAGES[text]) return { image: RESOURCE_IMAGES[text], alt: text };
  if (mapped && RESOURCE_IMAGES[mapped]) return { image: RESOURCE_IMAGES[mapped], alt: text };
  return { icon: iconFor(text) };
};
const VISUAL_CATEGORY_KEYS = {
  'Objeto escolar': 'pencil',
  'Saludo basico': 'hello',
  'Saludo de clase': 'good morning',
  Numeros: 'one',
  Colores: 'blue',
  Cuerpo: 'head',
  'Accion de clase': 'book',
  Familia: 'mother',
  Cortesia: 'thank you',
  Disposicion: 'answer',
  Motivacion: 'favorite',
  Emocion: 'happy',
  Gustos: 'I like',
  Frutas: 'fruit',
  Animal: 'animal',
  Ropa: 'clothes',
  Comida: 'food',
  Amistad: 'friend',
  Rutina: 'daily routine',
  Clase: 'study',
  Accion: 'action verb',
  Dia: 'Monday',
  Habilidad: 'I can',
  Pregunta: 'question',
  Hora: 'What time is it?',
  Lugar: 'place',
  Ubicacion: 'near',
  Descripcion: 'beautiful',
  Comunidad: 'community',
  Salon: 'school',
  Dialogo: 'dialogue',
  Respuesta: 'answer'
};
const visualHTML = text => {
  const visual = visualFor(text);
  if (visual.image) return `<span class="icon-image-tile"><img src="${visual.image}" alt=""></span>`;
  if (visual.color) {
    return `<span class="icon-swatch" style="--swatch:${visual.color}"><span>${escapeHTML(visual.label)}</span></span>`;
  }
  return `<span class="icon-fallback">${escapeHTML(visual.icon)}</span>`;
};
const hasSpecificVisual = text => {
  const visual = visualFor(text);
  return Boolean(visual.image || visual.color || (visual.icon && visual.icon !== 'EL'));
};
const bestVisualKeyForText = (values, level) => {
  const candidates = values.flatMap(value => [value, VISUAL_CATEGORY_KEYS[value], COMMAND_ICONS[value], inferNotoIconKey(value)]).filter(Boolean);
  const text = values.join(' ').toLowerCase();
  const levelWords = (WORD_BANK[level]?.words || [])
    .map(([word]) => word)
    .sort((a, b) => b.length - a.length);
  candidates.push(...levelWords.filter(word => text.includes(word.toLowerCase())));
  return candidates.find(hasSpecificVisual) || 'question';
};
const semanticTextClass = value => {
  const text = String(value || '');
  return [
    text.length > 18 ? 'long' : '',
    /\s|\?|'/.test(text) ? 'phrase' : ''
  ].filter(Boolean).join(' ');
};
const absoluteAssetURL = path => new URL(path, window.location.href).href;
const inlineAssetCache = new Map();

async function inlineAssetURL(path) {
  const absoluteURL = absoluteAssetURL(path);
  if (inlineAssetCache.has(absoluteURL)) return inlineAssetCache.get(absoluteURL);
  try {
    const response = await fetch(absoluteURL);
    if (!response.ok) throw new Error(`Asset request failed: ${response.status}`);
    const blob = await response.blob();
    const dataURL = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    inlineAssetCache.set(absoluteURL, dataURL);
    return dataURL;
  } catch (error) {
    inlineAssetCache.set(absoluteURL, absoluteURL);
    return absoluteURL;
  }
}

const bingoPrintVisualHTML = async text => {
  const visual = visualFor(text);
  if (visual.image) {
    const src = await inlineAssetURL(visual.image);
    return `<span class="print-icon"><img src="${escapeHTML(src)}" alt=""></span>`;
  }
  if (visual.color) {
    return `<span class="print-swatch" style="--print-swatch:${escapeHTML(visual.color)}"><span>${escapeHTML(visual.label)}</span></span>`;
  }
  return `<span class="print-fallback">${escapeHTML(visual.icon)}</span>`;
};

const state = {
  level: 1,
  voice: true,
  board: [],
  calls: [],
  pool: [],
  callMode: 'word',
  simonLevel: 1,
  simonSequence: [],
  simonIndex: 0,
  memoryLevel: 1,
  memoryCards: [],
  memoryOpen: [],
  memoryTries: 0,
  sentenceLevel: 1,
  sentenceMode: 'order',
  sentenceOptions: [],
  sentenceTokenOrder: [],
  sentence: null,
  sentenceAnswer: [],
  sentenceWrong: false,
  sentenceResetTimer: null,
  sentenceStars: 0,
  speaking: false,
  sessionId: `eaq-${Date.now()}-${Math.random().toString(16).slice(2)}`
};

const SHEETS_ANALYTICS_URL = 'https://script.google.com/macros/s/AKfycbw700QpXr4Z1UnPxSlEXMRyZgShsKcAjj2F0WzXqGZWiP9TOgTJtHUmQlAtUZuuc4ibEw/exec';
const ANALYTICS_ACTIONS = {
  game_open: 'game_started',
  bingo_new: 'game_started',
  bingo_call: 'game_started',
  bingo_mode: 'game_started',
  bingo_card_marked: 'answer_submitted',
  bingo_print: 'card_printed',
  bingo_download: 'card_downloaded',
  simon_init: 'game_started',
  simon_start: 'game_started',
  simon_answer: 'answer_submitted',
  memory_new: 'game_started',
  memory_pair: 'answer_submitted',
  sentence_new: 'game_started',
  sentence_answer: 'answer_submitted',
  resource_opened: 'resource_opened',
  download_clicked: 'download_clicked'
};

function levelLabel(level) {
  return level ? `N${Number(level)}` : '';
}

function gameActivityName(game) {
  return ({
    bingo: 'Word Bingo Quest',
    simon: 'Simon Says 6',
    memory: 'Memory Quest',
    sentences: 'Sentence Builder',
    runner: 'Adventure Runner'
  })[game] || game || '';
}

function resourceTypeFromHref(href) {
  const value = String(href || '').toLowerCase();
  if (value.includes('youtube.com') || value.includes('youtu.be')) return 'youtube';
  if (value.includes('kahoot.it')) return 'kahoot';
  if (value.includes('wordwall.net')) return 'wordwall';
  if (value.includes('assets/downloads') || value.endsWith('.zip')) return 'downloadable_files';
  if (value.includes('juego') || value.includes('#juego')) return 'internal_game';
  return 'none';
}

function analyticsEventFromGameEvent(entry) {
  const action = ANALYTICS_ACTIONS[entry.type];
  if (!action) return null;
  const isAnswer = action === 'answer_submitted';
  const resourceType = entry.resourceType || resourceTypeFromHref(entry.href);
  return {
    event_id: `${entry.sessionId}-${entry.at}-${entry.type}`.replace(/[^a-zA-Z0-9-]/g, '-'),
    timestamp: entry.at,
    session_id: entry.sessionId,
    user_role: 'anonymous',
    level: entry.level ? levelLabel(entry.level) : (entry.levelLabel || ''),
    activity_id: entry.activityId || '',
    activity_name: entry.activityName || gameActivityName(entry.game),
    activity_type: entry.game || entry.activityType || '',
    resource_type: resourceType,
    resource_label: entry.resourceLabel || entry.label || '',
    action,
    question_id: entry.questionId || '',
    prompt: entry.topic || entry.hint || entry.prompt || '',
    answer: entry.item || entry.answer || '',
    expected_answer: entry.expected || entry.expectedPair || '',
    is_correct: isAnswer ? entry.correct === true : '',
    score: isAnswer ? (entry.correct === true ? 1 : 0) : 0,
    stars: isAnswer && entry.correct === true ? 10 : 0,
    duration_sec: entry.durationSec || 0,
    device: window.innerWidth < 760 ? 'mobile' : 'desktop',
    user_agent: navigator.userAgent,
    source_page: document.querySelector('.page-section.active')?.id || 'unknown',
    notes: entry.type
  };
}

function sendToGoogleSheets(event) {
  if (!SHEETS_ANALYTICS_URL || !event) return;
  try {
    const body = JSON.stringify(event);
    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(SHEETS_ANALYTICS_URL, new Blob([body], { type: 'text/plain;charset=utf-8' }));
      if (sent) return;
    }
    fetch(SHEETS_ANALYTICS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body,
      keepalive: true
    }).catch(() => {});
  } catch (error) {
    console.warn('No se pudo enviar analytics a Google Sheets.', error);
  }
}

function trackResourceOpen(link) {
  if (!link || link.dataset.analyticsSent === 'true') return;
  const resourceType = resourceTypeFromHref(link.href || link.getAttribute('href'));
  if (!['downloadable_files', 'youtube', 'kahoot', 'wordwall', 'internal_game'].includes(resourceType)) return;
  link.dataset.analyticsSent = 'true';
  window.setTimeout(() => { delete link.dataset.analyticsSent; }, 500);
  const label = link.textContent.trim().replace(/\s+/g, ' ').slice(0, 80) || resourceType;
  logGameEvent(resourceType === 'downloadable_files' ? 'download_clicked' : 'resource_opened', {
    game: resourceType === 'internal_game' ? 'runner' : 'resource',
    activityType: 'resource',
    resourceType,
    resourceLabel: label,
    href: link.href || link.getAttribute('href') || ''
  });
}

function initGlobalAnalytics() {
  if (window.EnglishLandAnalytics?.ready) return;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (link) trackResourceOpen(link);
  }, true);
  window.EnglishLandAnalytics = {
    ready: true,
    track: (type, payload = {}) => logGameEvent(type, payload),
    trackResourceOpen
  };
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pickEnglishVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find(voice => /^en[-_]/i.test(voice.lang)) || voices[0] || null;
}

function speak(text, slower = false, cancel = true) {
  if (!state.voice || !('speechSynthesis' in window)) return Promise.resolve(false);
  return new Promise(resolve => {
    if (cancel) window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.voice = pickEnglishVoice();
    utterance.rate = slower ? 0.72 : 0.88;
    utterance.pitch = 1.05;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

function logGameEvent(type, payload = {}) {
  const entry = {
    type,
    sessionId: state.sessionId,
    at: new Date().toISOString(),
    ...payload
  };
  const key = 'eaq_game_events';
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || '[]');
    const events = Array.isArray(parsed) ? parsed : [];
    events.push(entry);
    localStorage.setItem(key, JSON.stringify(events.slice(-500)));
  } catch (error) {
    console.warn('No se pudo guardar el evento local.', error);
  }
  sendToGoogleSheets(analyticsEventFromGameEvent(entry));
  renderAnalytics();
}

function readGameEvents() {
  try {
    const parsed = JSON.parse(localStorage.getItem('eaq_game_events') || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function renderAnalytics() {
  const countEl = $('#analytics-count');
  if (!countEl) return;
  const events = readGameEvents();
  const sessions = new Set(events.map(event => event.sessionId)).size;
  const errors = events.filter(event => event.correct === false);
  const byTopic = errors.reduce((acc, event) => {
    const topic = event.topic || event.item || event.expected || 'General';
    acc[topic] = (acc[topic] || 0) + 1;
    return acc;
  }, {});
  const top = Object.entries(byTopic).sort((a, b) => b[1] - a[1]).slice(0, 3);
  countEl.textContent = `${sessions} sesiones locales - ${events.length} eventos`;
  $('#analytics-difficulty').textContent = top.length
    ? top.map(([topic, total]) => `${topic}: ${total}`).join(' - ')
    : 'Aun no hay errores registrados en este dispositivo.';
}

function exportAnalytics() {
  const blob = new Blob([JSON.stringify(readGameEvents(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `english-land-game-events-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearAnalytics() {
  localStorage.removeItem('eaq_game_events');
  renderAnalytics();
}

function renderLevels(container, activeLevel, handlerName) {
  const el = $(container);
  if (!el) return;
  el.innerHTML = Object.entries(WORD_BANK).map(([num, data]) =>
    `<button class="level-btn ${Number(num) === activeLevel ? 'active' : ''}" type="button" data-${handlerName}-level="${num}">${escapeHTML(data.label)}</button>`
  ).join('');
}

function pickFeedback(kind) {
  const list = FEEDBACK_MESSAGES[kind] || FEEDBACK_MESSAGES.retry;
  return list[Math.floor(Math.random() * list.length)];
}

function sentenceForWord(level, word) {
  return WORD_SENTENCE_HINTS[level]?.[word] || `Find: ${word}`;
}

function normalizeSentence(item, level) {
  if (Array.isArray(item)) return { prompt: item[0], sentence: item[1], level };
  return { ...item, level: item.level || level };
}

function normalizeWord(item, level) {
  if (Array.isArray(item)) return { word: item[0], def: item[1], level };
  return { ...item, level: item.level || level };
}

function weightedSentenceMode(level) {
  const weights = SENTENCE_MODE_WEIGHTS[level] || SENTENCE_MODE_WEIGHTS[1];
  const roll = Math.random();
  let total = 0;
  for (const mode of SENTENCE_MODES) {
    total += weights[mode] || 0;
    if (roll <= total) return mode;
  }
  return 'order';
}

function renderBingoModes() {
  const row = $('#bingo-mode-row');
  if (!row) return;
  row.innerHTML = BINGO_CALL_MODES.map(mode =>
    `<button class="level-btn ${state.callMode === mode ? 'active' : ''}" type="button" data-bingo-mode="${mode}">${mode === 'word' ? 'Palabra' : mode === 'definition' ? 'Definicion' : 'Frase'}</button>`
  ).join('');
}

function setGame(name) {
  if (!['bingo','simon','memory','sentences','runner'].includes(name)) return;
  $$('.hub-card').forEach(card => card.classList.toggle('active', card.dataset.game === name));
  ['bingo','simon','memory','sentences','runner'].forEach(game => {
    const panel = $(`#${game}-game`);
    if (panel) panel.classList.toggle('hidden', game !== name);
  });
  const runner = $('#runner-frame');
  if (runner) {
    if (name === 'runner') {
      if (!runner.src || runner.src.endsWith('about:blank')) runner.src = 'juego.html';
    } else if (runner.src && !runner.src.endsWith('about:blank')) {
      runner.src = 'about:blank';
    }
  }
  logGameEvent('game_open', { game: name });
}

function newBingo(level = state.level) {
  if (!$('#bingo-board')) return;
  state.level = Number(level);
  const pool = shuffle(WORD_BANK[state.level].words.map(([word, def]) => ({ word, def })));
  const selected = pool.slice(0, 24);
  state.board = [...selected.slice(0, 12), { word: 'FREE', def: 'Centro libre', marked: true, free: true }, ...selected.slice(12)]
    .map(item => ({ ...item, marked: !!item.marked }));
  state.calls = [];
  state.pool = shuffle(pool);
  $('#called-word').textContent = 'Ready?';
  $('#called-def').textContent = `Banco de ${WORD_BANK[state.level].guide}: presiona "Llamar palabra".`;
  renderLevels('#level-row', state.level, 'bingo');
  renderBingoModes();
  renderBoard();
  updateBingoMeta();
  logGameEvent('bingo_new', { game: 'bingo', level: state.level });
}

function renderBoard() {
  const board = $('#bingo-board');
  if (!board) return;
  board.innerHTML = state.board.map((item, idx) =>
    `<button class="bingo-cell ${item.marked ? 'marked' : ''}" type="button" data-cell="${idx}" title="${escapeHTML(item.def)}">
      <span class="game-icon">${visualHTML(item.word)}</span>
      <span class="game-word">${escapeHTML(item.word)}</span>
    </button>`
  ).join('');
}

function renderCalledList() {
  const list = $('#called-list');
  if (!list) return;
  if (!state.calls.length) {
    list.innerHTML = '<span class="called-chip empty">Aun no hay palabras llamadas.</span>';
    return;
  }
  list.innerHTML = state.calls.map((item, index) =>
    `<span class="called-chip">${index + 1}. ${escapeHTML(item.word)}</span>`
  ).join('');
}

function callWord() {
  if (!state.pool.length) newBingo(state.level);
  const next = state.pool.pop();
  const callMode = state.callMode || 'word';
  const sentenceHint = sentenceForWord(state.level, next.word);
  const displayedHint = callMode === 'definition' ? next.def : callMode === 'sentence' ? sentenceHint : next.word;
  state.calls.push(next);
  $('#called-word').textContent = displayedHint;
  $('#called-def').textContent = callMode === 'word'
    ? next.def
    : callMode === 'definition'
      ? 'Escucha la pista, busca la palabra correcta en tu carton.'
      : `Frase de contexto. Palabra objetivo: ${next.word}`;
  const callerIcon = $('#called-icon');
  if (callerIcon) callerIcon.innerHTML = visualHTML(next.word);
  speak(next.word, true);
  renderBoard();
  renderCalledList();
  updateBingoMeta();
  logGameEvent('bingo_call', { game: 'bingo', level: state.level, mode: callMode, item: next.word, topic: next.def, hint: displayedHint });
}

function hasBingo() {
  const lines = [];
  for (let r = 0; r < 5; r++) lines.push([0,1,2,3,4].map(c => r * 5 + c));
  for (let c = 0; c < 5; c++) lines.push([0,1,2,3,4].map(r => r * 5 + c));
  lines.push([0,6,12,18,24], [4,8,12,16,20]);
  return lines.some(line => line.every(i => state.board[i]?.marked));
}

function updateBingoMeta() {
  $('#pool-size').textContent = `${WORD_BANK[state.level].words.length} palabras disponibles`;
  $('#round-info').textContent = `${state.calls.length} llamadas en esta partida`;
  $('#bingo-status').textContent = state.calls.length
    ? 'Verifica los cartones impresos de los estudiantes.'
    : 'Listo para iniciar llamadas';
  renderCalledList();
}

function buildBingoCard(level, cardNumber) {
  const selected = shuffle(WORD_BANK[level].words.map(([word, def]) => ({ word, def }))).slice(0, 24);
  return [...selected.slice(0, 12), { word: 'FREE', def: 'Mission Star', free: true }, ...selected.slice(12)]
    .map(item => ({ ...item, cardNumber }));
}

async function buildBingoCardsHTML(level = state.level, count = 12) {
  const bank = WORD_BANK[level];
  const cards = Array.from({ length: count }, (_, index) => buildBingoCard(level, index + 1));
  const uniqueWords = [...new Set([
    ...bank.words.map(([word]) => word),
    ...cards.flat().filter(item => !item.free).map(item => item.word)
  ])];
  const printVisuals = Object.fromEntries(await Promise.all(
    uniqueWords.map(async word => [word, await bingoPrintVisualHTML(word)])
  ));
  const calledBank = bank.words.map(([word, def]) => `<li>${printVisuals[word]}<span><strong>${escapeHTML(word)}</strong> - ${escapeHTML(def)}</span></li>`).join('');
  const wordClass = word => {
    const value = String(word);
    return [
      value.length > 12 ? 'long' : '',
      /\s|\?|'/.test(value) ? 'phrase' : ''
    ].filter(Boolean).join(' ');
  };
  const cardHTML = cards.map((card, index) => `
    <section class="print-card">
      <header>
        <div>
          <small>English Adventure Quest - Mission Stars</small>
          <h2>Word Bingo Quest</h2>
          <p>${escapeHTML(bank.label)} - Guia: ${escapeHTML(bank.guide)} - Carton ${index + 1}</p>
        </div>
        <div class="star">&#9733;</div>
      </header>
      <div class="bingo-grid">
        ${card.map(item => `<div class="print-cell ${item.free ? 'free' : ''}">
          ${item.free ? '<span class="print-fallback">★</span>' : printVisuals[item.word]}
          <span class="print-word ${wordClass(item.word)}">${escapeHTML(item.word)}</span>
        </div>`).join('')}
      </div>
      <footer>Marca la palabra cuando el docente la llame. Grita BINGO cuando completes una fila, columna o diagonal.</footer>
    </section>
  `).join('');

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cartones Bingo - ${escapeHTML(bank.label)}</title>
  <style>
    *{box-sizing:border-box}
    body{margin:0;padding:18px;background:#f7f2ff;color:#21124a;font-family:Arial,sans-serif}
    .toolbar{position:sticky;top:0;z-index:5;display:flex;gap:10px;align-items:center;justify-content:space-between;margin:-18px -18px 18px;padding:12px 18px;background:#fff;border-bottom:1px solid #ded7f7}
    .toolbar button{border:0;border-radius:999px;background:#5e3ae2;color:#fff;font-weight:800;padding:10px 16px;cursor:pointer}
    .cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:start}
    .print-card{break-inside:avoid;background:#fff;border:2px solid #5e3ae2;border-radius:14px;padding:12px;box-shadow:0 10px 24px rgba(33,18,74,.10);overflow:hidden}
    header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
    small{display:block;color:#5e3ae2;font-weight:800;text-transform:uppercase;letter-spacing:.4px;font-size:9px}
    h2{margin:2px 0 0;font-size:20px;line-height:1}
    p{margin:2px 0 0;color:#645486;font-size:11px;line-height:1.25}
    .star{width:38px;height:38px;border-radius:12px;background:#fff1ad;display:grid;place-items:center;font-size:22px;flex:0 0 auto}
    .bingo-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px}
    .print-cell{height:72px;border:1.5px solid #ded7f7;border-radius:9px;display:grid;grid-template-rows:38px minmax(0,1fr);place-items:center;text-align:center;padding:4px;font-weight:800;font-size:11px;line-height:1.08;gap:2px;overflow:hidden}
    .print-cell.free{background:#ffd447;color:#21124a}
    .print-icon{width:37px;height:37px;display:grid;place-items:center}
    .print-icon img{max-width:100%;max-height:100%;object-fit:contain;display:block}
    .print-swatch{width:35px;height:35px;border-radius:999px;background:var(--print-swatch);border:2px solid rgba(33,18,74,.16);display:grid;place-items:center;color:#21124a;font-size:8px;font-weight:900}
    .print-swatch span{padding:1px 3px;border-radius:999px;background:rgba(255,255,255,.78)}
    .print-fallback{width:37px;height:37px;border-radius:12px;background:#f1ecff;color:#5e3ae2;display:grid;place-items:center;font-size:13px;font-weight:900}
    .print-word{display:flex;align-items:center;justify-content:center;width:100%;max-width:100%;min-width:0;overflow:hidden;overflow-wrap:anywhere;word-break:normal;font-size:10.5px;line-height:1.05}
    .print-word.long{font-size:9.2px}
    .print-word.phrase{font-size:8.6px;line-height:1.02}
    footer{margin-top:7px;color:#645486;font-size:10.5px;line-height:1.25}
    .teacher-bank{margin-top:18px;padding:16px;border-radius:16px;background:#fff;border:1px solid #ded7f7}
    .teacher-bank h2{font-size:18px}
    .teacher-bank ol{columns:2;color:#2a1e52;font-size:12px;line-height:1.55;padding-left:18px}
    .teacher-bank li{break-inside:avoid;display:flex;align-items:center;gap:7px;margin-bottom:6px}
    .teacher-bank .print-icon,.teacher-bank .print-swatch,.teacher-bank .print-fallback{width:22px;height:22px;flex:0 0 auto}
    .teacher-bank .print-fallback{font-size:9px;border-radius:8px}
    @media print{
      body{padding:0;background:#fff}
      .toolbar{display:none}
      .cards{grid-template-columns:repeat(2,1fr);gap:7mm}
      .print-card{box-shadow:none;border-radius:9px;page-break-inside:avoid;break-inside:avoid}
      .teacher-bank{page-break-before:always}
    }
    @page{size:letter;margin:10mm}
  </style>
</head>
<body>
  <div class="toolbar">
    <strong>Cartones listos: ${count} - ${escapeHTML(bank.label)}</strong>
    <button onclick="window.print()">Imprimir / Guardar PDF</button>
  </div>
  <main class="cards">${cardHTML}</main>
  <section class="teacher-bank">
    <h2>Banco de llamadas para el docente</h2>
    <ol>${calledBank}</ol>
  </section>
</body>
</html>`;
}

async function printBingoCards() {
  logGameEvent('bingo_print', { game: 'bingo', level: state.level, resourceType: 'internal_game', resourceLabel: 'Cartones Bingo' });
  const win = window.open('', '_blank');
  const html = await buildBingoCardsHTML(state.level, 12);
  if (!win) {
    await downloadBingoCards(html);
    return;
  }
  win.opener = null;
  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
}

async function downloadBingoCards(prebuiltHTML = '') {
  logGameEvent('bingo_download', { game: 'bingo', level: state.level, resourceType: 'internal_game', resourceLabel: 'Cartones Bingo HTML' });
  const label = WORD_BANK[state.level].label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const html = typeof prebuiltHTML === 'string' && prebuiltHTML
    ? prebuiltHTML
    : await buildBingoCardsHTML(state.level, 12);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `english-adventure-bingo-cartones-${label}.html`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function initSimon(level = state.simonLevel) {
  state.simonLevel = Number(level);
  state.simonSequence = [];
  state.simonIndex = 0;
  renderLevels('#simon-level-row', state.simonLevel, 'simon');
  renderSimonChoices();
  $('#simon-level-info').textContent = WORD_BANK[state.simonLevel].label;
  $('#simon-progress').textContent = '0 comandos';
  $('#simon-status').textContent = 'Presiona Nueva secuencia';
  $('#simon-orb').textContent = 'Listen';
  $('#simon-icon').innerHTML = visualHTML('listen');
  logGameEvent('simon_init', { game: 'simon', level: state.simonLevel });
}

function renderSimonChoices() {
  const choices = $('#simon-choices');
  if (!choices) return;
  choices.innerHTML = SIMON_COMMANDS[state.simonLevel].map(command =>
    `<button class="simon-choice" type="button" data-command="${escapeHTML(command)}">
      <span class="game-icon">${visualHTML(command)}</span>
      <span class="game-word ${semanticTextClass(command)}">${escapeHTML(command)}</span>
    </button>`
  ).join('');
}

async function startSimon() {
  if (state.speaking) return;
  const bank = SIMON_COMMANDS[state.simonLevel];
  if (!state.simonSequence.length || state.simonSequence.length >= 6) {
    state.simonSequence = shuffle(bank).slice(0, 3);
  } else {
    state.simonSequence.push(shuffle(bank)[0]);
  }
  state.simonIndex = 0;
  $('#simon-status').textContent = 'Escucha la secuencia';
  logGameEvent('simon_start', { game: 'simon', level: state.simonLevel, length: state.simonSequence.length });
  await playSimonSequence();
}

async function playSimonSequence() {
  if (!state.simonSequence.length || state.speaking) return;
  const orb = $('#simon-orb');
  state.speaking = true;
  $$('.simon-choice').forEach(button => button.disabled = true);
  $('#simon-progress').textContent = `${state.simonSequence.length}/6 comandos`;
  for (const command of state.simonSequence) {
    orb.textContent = command;
    $('#simon-icon').innerHTML = visualHTML(command);
    orb.classList.add('pulse');
    await speak(command, true, false);
    await wait(280);
    orb.classList.remove('pulse');
    await wait(260);
  }
  $('#simon-status').textContent = 'Ahora repite la secuencia';
  orb.textContent = 'Your turn';
  $('#simon-icon').innerHTML = visualHTML('Your turn');
  $$('.simon-choice').forEach(button => button.disabled = false);
  state.speaking = false;
}

function chooseSimon(command) {
  if (state.speaking) return;
  const expected = state.simonSequence[state.simonIndex];
  if (!expected) return;
  if (command === expected) {
    state.simonIndex += 1;
    speak(command, true);
    logGameEvent('simon_answer', { game: 'simon', level: state.simonLevel, item: command, expected, correct: true });
    if (state.simonIndex === state.simonSequence.length) {
      if (state.simonSequence.length >= 6) {
        $('#simon-status').textContent = 'Mission complete: secuencia de 6 lograda. Presiona Nueva secuencia para reiniciar.';
        $('#simon-orb').textContent = 'Mission Stars';
        $('#simon-icon').innerHTML = visualHTML('FREE');
        $$('.simon-choice').forEach(button => button.disabled = true);
      } else {
        $('#simon-status').textContent = 'Correcto. Mission Star encendida. Agregando un nuevo comando';
        $$('.simon-choice').forEach(button => button.disabled = true);
        setTimeout(startSimon, 900);
      }
    } else {
      const remaining = state.simonSequence.length - state.simonIndex;
      $('#simon-status').textContent = `Correcto: ${remaining === 1 ? 'falta 1 comando' : `faltan ${remaining} comandos`}.`;
    }
  } else {
    $('#simon-status').textContent = `${pickFeedback('retry')} Escucha la secuencia otra vez desde el inicio.`;
    logGameEvent('simon_answer', { game: 'simon', level: state.simonLevel, item: command, expected, correct: false });
    state.simonIndex = 0;
    $$('.simon-choice').forEach(button => button.disabled = true);
    $('#simon-orb').textContent = 'Listen';
    $('#simon-icon').innerHTML = visualHTML('listen');
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setTimeout(() => { playSimonSequence(); }, 700);
  }
}

function buildMemoryPairs(level) {
  const wordPairs = WORD_BANK[level].words.map(([word, def], index) => ({
    pair: `word-${level}-${index}`,
    visualKey: word,
    a: { text: word, kind: 'word', visualKey: word },
    b: { text: def, kind: 'def', visualKey: word },
    topic: def
  }));
  const questionPairs = QUESTION_BANK[level].slice(0, 10).map((question, index) => {
    const linkedWord = WORD_BANK[level].words[index % WORD_BANK[level].words.length][0];
    return {
      pair: `question-${level}-${index}`,
      visualKey: linkedWord,
      a: { text: question, kind: 'question', visualKey: linkedWord },
      b: { text: sentenceForWord(level, linkedWord), kind: 'answer', visualKey: linkedWord },
      topic: 'communicative question'
    };
  });
  const sentencePairs = SENTENCE_BANK[level].slice(0, 10).map((item, index) => {
    const normalized = normalizeSentence(item, level);
    const visualKey = bestVisualKeyForText([normalized.sentence, normalized.prompt], level);
    return {
      pair: `sentence-${level}-${index}`,
      visualKey,
      a: { text: normalized.sentence, kind: 'sentence', visualKey },
      b: { text: normalized.prompt, kind: 'prompt', visualKey },
      topic: normalized.prompt
    };
  });
  return [...wordPairs, ...questionPairs, ...sentencePairs];
}

function newMemory(level = state.memoryLevel) {
  if (!$('#memory-grid')) return;
  state.memoryLevel = Number(level);
  const pairs = shuffle(buildMemoryPairs(state.memoryLevel)).slice(0, 6);
  state.memoryCards = shuffle(pairs.flatMap(pair => [
    { pair: pair.pair, text: pair.a.text, kind: pair.a.kind, topic: pair.topic, visualKey: pair.a.visualKey || pair.visualKey, revealed: false, matched: false },
    { pair: pair.pair, text: pair.b.text, kind: pair.b.kind, topic: pair.topic, visualKey: pair.b.visualKey || pair.visualKey, revealed: false, matched: false }
  ]));
  state.memoryOpen = [];
  state.memoryTries = 0;
  renderLevels('#memory-level-row', state.memoryLevel, 'memory');
  renderMemory();
  logGameEvent('memory_new', { game: 'memory', level: state.memoryLevel, pool: pairs.length });
}

function renderMemory() {
  $('#memory-grid').innerHTML = state.memoryCards.map((card, idx) => {
    const shown = card.revealed || card.matched;
    return `<button class="memory-card ${shown ? 'revealed' : ''} ${card.matched ? 'matched' : ''}" type="button" data-memory="${idx}">
      <span class="game-icon">${shown ? visualHTML(card.visualKey || card.text || card.topic) : '?'}</span>
      <span class="game-word ${shown ? semanticTextClass(card.text) : ''}">${shown ? escapeHTML(card.text) : 'Mystery'}</span>
    </button>`;
  }).join('');
  const matched = state.memoryCards.filter(card => card.matched).length / 2;
  $('#memory-tries').textContent = `${state.memoryTries} intentos`;
  $('#memory-score').textContent = `${matched}/6 parejas`;
  $('#memory-status').textContent = matched === 6 ? 'Memory Quest completado' : 'Busca la siguiente pareja';
}

function flipMemory(index) {
  const card = state.memoryCards[index];
  if (!card || card.matched || card.revealed || state.memoryOpen.length >= 2) return;
  card.revealed = true;
  state.memoryOpen.push(index);
  speak(['word', 'question', 'sentence'].includes(card.kind) ? card.text : '', true);
  renderMemory();
  if (state.memoryOpen.length === 2) {
    state.memoryTries += 1;
    const [a, b] = state.memoryOpen.map(i => state.memoryCards[i]);
    setTimeout(() => {
      if (a.pair === b.pair && a.kind !== b.kind) {
        a.matched = true;
        b.matched = true;
        logGameEvent('memory_pair', { game: 'memory', level: state.memoryLevel, item: `${a.text} / ${b.text}`, expectedPair: a.pair, topic: a.topic, correct: true });
      } else {
        logGameEvent('memory_pair', { game: 'memory', level: state.memoryLevel, item: `${a.text} / ${b.text}`, expectedPair: a.pair, topic: a.topic || b.topic, correct: false });
      }
      a.revealed = false;
      b.revealed = false;
      state.memoryOpen = [];
      renderMemory();
    }, 750);
  }
}

function buildSentenceChoiceOptions(sentence, level) {
  return shuffle([
    sentence,
    ...shuffle(SENTENCE_BANK[level].map(item => normalizeSentence(item, level).sentence).filter(item => item !== sentence)).slice(0, 2)
  ]);
}

function buildMissingOptions(missingWord, level) {
  const distractors = WORD_BANK[level].words.map(([word]) => word)
    .filter(word => word.toLowerCase() !== missingWord.toLowerCase() && !word.includes(' '));
  return shuffle([missingWord, ...shuffle(distractors).slice(0, 2)]);
}

function newSentence(level = state.sentenceLevel) {
  if (!$('#sentence-bank')) return;
  state.sentenceLevel = Number(level);
  const selected = normalizeSentence(shuffle(SENTENCE_BANK[state.sentenceLevel])[0], state.sentenceLevel);
  const tokens = selected.sentence.split(' ');
  state.sentenceMode = weightedSentenceMode(state.sentenceLevel);
  if (tokens.length < 3 && state.sentenceMode === 'missing') state.sentenceMode = 'order';
  state.sentence = { ...selected, tokens, visualKey: bestVisualKeyForText([selected.sentence, selected.prompt], state.sentenceLevel), completed: false };
  state.sentenceAnswer = [];
  state.sentenceOptions = [];
  state.sentenceWrong = false;
  if (state.sentenceResetTimer) clearTimeout(state.sentenceResetTimer);
  state.sentenceResetTimer = null;
  state.sentenceTokenOrder = shuffle(tokens.map((word, id) => ({ word, id })));
  if (state.sentenceMode === 'missing') {
    const missingIndex = Math.min(tokens.length - 1, Math.max(1, Math.floor(Math.random() * tokens.length)));
    state.sentence.missingIndex = missingIndex;
    state.sentence.missingWord = tokens[missingIndex];
    state.sentenceOptions = buildMissingOptions(state.sentence.missingWord, state.sentenceLevel);
  } else if (state.sentenceMode === 'choose') {
    state.sentenceOptions = buildSentenceChoiceOptions(state.sentence.sentence, state.sentenceLevel);
  }
  renderLevels('#sentence-level-row', state.sentenceLevel, 'sentence');
  $('#sentence-prompt').innerHTML = `<span class="sentence-prompt-visual">${visualHTML(state.sentence.visualKey)}</span><span>${escapeHTML(selected.prompt)}</span>`;
  $('#sentence-bank-info').textContent = WORD_BANK[state.sentenceLevel].label + ' - Modo: ' + state.sentenceMode;
  renderSentence();
  logGameEvent('sentence_new', { game: 'sentences', level: state.sentenceLevel, mode: state.sentenceMode, topic: selected.prompt });
}

function renderSentence() {
  if (!state.sentence) return;
  const answerEl = $('#sentence-answer');
  if (answerEl) answerEl.classList.toggle('wrong', Boolean(state.sentenceWrong));
  if (state.sentenceMode === 'missing') {
    if (answerEl) answerEl.classList.remove('wrong');
    const display = state.sentence.tokens.map((word, index) => index === state.sentence.missingIndex ? '___' : word).join(' ');
    $('#sentence-answer').innerHTML = '<div class="sentence-token used ' + semanticTextClass(display) + '">' + escapeHTML(display) + '</div>';
    $('#sentence-bank').innerHTML = state.sentenceOptions.map(option =>
      '<button class="sentence-token ' + semanticTextClass(option) + '" type="button" data-sentence-option="' + escapeHTML(option) + '">' + escapeHTML(option) + '</button>'
    ).join('');
    $('#sentence-status').textContent = 'Elige la palabra que completa la frase.';
    return;
  }
  if (state.sentenceMode === 'choose') {
    if (answerEl) answerEl.classList.remove('wrong');
    $('#sentence-answer').innerHTML = '<div class="sentence-token used phrase">Elige la frase que responde al prompt.</div>';
    $('#sentence-bank').innerHTML = state.sentenceOptions.map(option =>
      '<button class="sentence-token ' + semanticTextClass(option) + '" type="button" data-sentence-option="' + escapeHTML(option) + '">' + escapeHTML(option) + '</button>'
    ).join('');
    $('#sentence-status').textContent = 'Lee y escoge la mejor frase.';
    return;
  }
  const used = new Set(state.sentenceAnswer.map(item => item.id));
  const locked = state.sentenceWrong || state.sentence.completed;
  $('#sentence-answer').innerHTML = state.sentenceAnswer.map(item =>
    '<button class="sentence-token used ' + semanticTextClass(item.word) + ' ' + (state.sentenceWrong ? 'wrong' : '') + '" type="button" ' + (locked ? 'disabled' : 'data-remove-token="' + item.id + '"') + '>' + escapeHTML(item.word) + '</button>'
  ).join('');
  $('#sentence-bank').innerHTML = state.sentenceTokenOrder.map(item =>
    '<button class="sentence-token ' + semanticTextClass(item.word) + ' ' + (used.has(item.id) ? 'used' : '') + '" type="button" data-token="' + item.id + '" ' + (used.has(item.id) || locked ? 'disabled' : '') + '>' + escapeHTML(item.word) + '</button>'
  ).join('');
  const answer = state.sentenceAnswer.map(item => item.word).join(' ');
  if (!answer) $('#sentence-status').textContent = 'Selecciona las palabras en orden.';
  else if (answer === state.sentence.sentence) completeSentence(answer);
  else if (state.sentenceAnswer.length === state.sentence.tokens.length) {
    handleWrongSentence(answer);
  } else {
    $('#sentence-status').textContent = answer;
  }
}

function handleWrongSentence(answer) {
  if (state.sentenceWrong || state.sentence.completed) return;
  state.sentenceWrong = true;
  $('#sentence-answer')?.classList.add('wrong');
  $$('#sentence-answer .sentence-token').forEach(token => token.classList.add('wrong'));
  $$('#sentence-bank .sentence-token').forEach(token => token.disabled = true);
  $('#sentence-status').textContent = pickFeedback('retry') + ' La oración se reiniciará. Pista: empieza con "' + state.sentence.tokens[0] + '".';
  logGameEvent('sentence_answer', { game: 'sentences', level: state.sentenceLevel, mode: state.sentenceMode, item: answer, expected: state.sentence.sentence, topic: state.sentence.prompt, correct: false });
  if (state.sentenceResetTimer) clearTimeout(state.sentenceResetTimer);
  state.sentenceResetTimer = setTimeout(() => {
    if (!state.sentence || state.sentence.completed) return;
    state.sentenceAnswer = [];
    state.sentenceWrong = false;
    state.sentenceResetTimer = null;
    renderSentence();
    $('#sentence-status').textContent = 'Intenta de nuevo con la misma oración.';
  }, 950);
}

function completeSentence(answer) {
  if (!state.sentence.completed) {
    if (state.sentenceResetTimer) clearTimeout(state.sentenceResetTimer);
    state.sentenceResetTimer = null;
    state.sentenceWrong = false;
    state.sentence.completed = true;
    $('#sentence-stars').textContent = (++state.sentenceStars) + ' Mission Stars';
    logGameEvent('sentence_answer', { game: 'sentences', level: state.sentenceLevel, mode: state.sentenceMode, item: answer, expected: state.sentence.sentence, topic: state.sentence.prompt, correct: true });
    speak(state.sentence.sentence);
  }
  $('#sentence-status').textContent = pickFeedback('correct');
}

function chooseSentenceOption(option) {
  if (!state.sentence || state.sentence.completed) return;
  const expected = state.sentenceMode === 'missing' ? state.sentence.missingWord : state.sentence.sentence;
  const correct = option === expected;
  logGameEvent('sentence_answer', { game: 'sentences', level: state.sentenceLevel, mode: state.sentenceMode, item: option, expected, topic: state.sentence.prompt, correct });
  if (correct) completeSentence(state.sentence.sentence);
  else $('#sentence-status').textContent = pickFeedback('retry');
}

function addSentenceToken(id) {
  if (state.sentenceMode !== 'order') return;
  if (!state.sentence || state.sentence.completed || state.sentenceWrong) return;
  const index = Number(id);
  if (state.sentenceAnswer.some(item => item.id === index)) return;
  state.sentenceAnswer.push({ id: index, word: state.sentence.tokens[index] });
  renderSentence();
}

function removeSentenceToken(id) {
  if (state.sentenceMode !== 'order') return;
  if (state.sentenceWrong) return;
  state.sentenceAnswer = state.sentenceAnswer.filter(item => item.id !== Number(id));
  renderSentence();
}

function clearSentence() {
  if (!state.sentence) return;
  state.sentenceAnswer = [];
  state.sentence.completed = false;
  state.sentenceWrong = false;
  if (state.sentenceResetTimer) clearTimeout(state.sentenceResetTimer);
  state.sentenceResetTimer = null;
  renderSentence();
}

function initPracticeGames() {
  initGlobalAnalytics();
  if (!$('#english-land-game-hub')) return;
  newBingo(1);
  initSimon(1);
  newMemory(1);
  newSentence(1);

  document.addEventListener('click', event => {
    const gameCard = event.target.closest('[data-game]');
    if (gameCard) setGame(gameCard.dataset.game);

    const bingoLevel = event.target.closest('[data-bingo-level]');
    if (bingoLevel) newBingo(bingoLevel.dataset.bingoLevel);
    const bingoMode = event.target.closest('[data-bingo-mode]');
    if (bingoMode) {
      state.callMode = bingoMode.dataset.bingoMode;
      renderBingoModes();
      logGameEvent('bingo_mode', { game: 'bingo', level: state.level, mode: state.callMode });
    }
    const simonLevel = event.target.closest('[data-simon-level]');
    if (simonLevel) initSimon(simonLevel.dataset.simonLevel);
    const memoryLevel = event.target.closest('[data-memory-level]');
    if (memoryLevel) newMemory(memoryLevel.dataset.memoryLevel);
    const sentenceLevel = event.target.closest('[data-sentence-level]');
    if (sentenceLevel) newSentence(sentenceLevel.dataset.sentenceLevel);

    const cell = event.target.closest('[data-cell]');
    if (cell) {
      const item = state.board[Number(cell.dataset.cell)];
      if (item && !item.free) {
        item.marked = !item.marked;
        logGameEvent('bingo_card_marked', {
          game: 'bingo',
          level: state.level,
          item: item.word,
          expected: state.calls.some(call => call.word === item.word) ? item.word : 'called word',
          topic: item.def,
          correct: state.calls.some(call => call.word === item.word)
        });
      }
      renderBoard();
      updateBingoMeta();
    }

    const command = event.target.closest('[data-command]');
    if (command) chooseSimon(command.dataset.command);
    const memory = event.target.closest('[data-memory]');
    if (memory) flipMemory(Number(memory.dataset.memory));
    const token = event.target.closest('[data-token]');
    if (token) addSentenceToken(token.dataset.token);
    const sentenceOption = event.target.closest('[data-sentence-option]');
    if (sentenceOption) chooseSentenceOption(sentenceOption.dataset.sentenceOption);
    const removeToken = event.target.closest('[data-remove-token]');
    if (removeToken) removeSentenceToken(removeToken.dataset.removeToken);
  });

  $('#new-card')?.addEventListener('click', () => newBingo());
  $('#call-word')?.addEventListener('click', callWord);
  $('#print-bingo-cards')?.addEventListener('click', printBingoCards);
  $('#download-bingo-cards')?.addEventListener('click', downloadBingoCards);
  $('#voice-toggle')?.addEventListener('click', event => {
    state.voice = !state.voice;
    event.currentTarget.textContent = state.voice ? 'Voz: ON' : 'Voz: OFF';
    event.currentTarget.classList.toggle('muted', !state.voice);
  });
  $('#simon-start')?.addEventListener('click', startSimon);
  $('#simon-repeat')?.addEventListener('click', playSimonSequence);
  $('#memory-new')?.addEventListener('click', () => newMemory());
  $('#sentence-new')?.addEventListener('click', () => newSentence());
  $('#sentence-clear')?.addEventListener('click', clearSentence);
  $('#analytics-export')?.addEventListener('click', exportAnalytics);
  $('#analytics-clear')?.addEventListener('click', clearAnalytics);
  renderAnalytics();

  window.EnglishLandGames = { setGame, printBingoCards, downloadBingoCards };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPracticeGames);
} else {
  initPracticeGames();
}

