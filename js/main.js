window.addEventListener('load', init);

const levels = {
    Easy: 5,
    Medium: 4,
    Diablo: 3
};
let currentLevel = levels.Easy;
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const buttonEasy = document.querySelector('#button-easy');
const buttonMedium = document.querySelector('#button-medium');
const buttonDiablo = document.querySelector('#button-diablo');


const words = [
    'which',
    'there',
    'their',
    'about',
    'would',
    'these',
    'other',
    'words',
    'could',
    'write',
    'first',
    'water',
    'after',
    'where',
    'right',
    'think',
    'three',
    'years',
    'place',
    'sound',
    'great',
    'again',
    'still',
    'every',
    'small',
    'point',
    'times',
    'heard',
    'whole',
    'white',
    'given',
    'means',
    'music',
    'miles',
    'thing',
    'today',
    'later',
    'using',
    'money',
    'lines',
    'order',
    'group',
    'among',
    'learn',
    'known',
    'space',
    'table',
    'early',
    'trees',
    'short',
    'hands',
    'state',
    'black',
    'shown',
    'stood',
    'front',
    'voice',
    'kinds',
    'makes',
    'comes',
    'power',
    'lived',
    'vowel',
    'taken',
    'built',
    'heart',
    'ready',
    'quite',
    'bring',
    'round',
    'horse',
    'shows',
    'piece',
    'green',
    'stand',
    'birds',
    'start',
    'river',
    'tried',
    'least',
    'field',
    'whose',
    'girls',
    'leave',
    'added',
    'color',
    'third',
    'hours',
    'moved',
    'plant',
    'doing',
    'names',
    'forms',
    'heavy',
    'ideas',
    'cried',
    'check',
    'floor',
    'begin',
    'woman',
    'alone',
    'plane',
    'spell',
    'watch',
    'carry',
    'wrote',
    'clear',
    'named',
    'books',
    'child',
    'glass',
    'human',
    'takes',
    'party',
    'build',
    'seems',
    'blood',
    'sides',
    'seven',
    'mouth',
    'solve',
    'north',
    'value',
    'death',
    'maybe',
    'happy',
    'tells',
    'gives',
    'looks',
    'shape',
    'lives',
    'steps',
    'areas',
    'sense',
    'speak',
    'force',
    'ocean',
    'speed',
    'women',
    'metal',
    'south',
    'grass',
    'scale',
    'cells',
    'lower',
    'sleep',
    'local',
    'waxes',
    'knows',
    'train',
    'bread',
    'homes',
    'teeth',
    'coast',
    'thick',
    'brown',
    'clean',
    'quiet',
    'sugar',
    'facts',
    'steel',
    'forth',
    'rules',
    'notes',
    'units',
    'peace',
    'month',
    'verbs',
    'seeds',
    'helps',
    'sharp',
    'visit',
    'woods',
    'chief',
    'walls',
    'cross',
    'wings',
    'grown',
    'cases',
    'foods',
    'crops',
    'fruit',
    'stick',
    'wants',
    'stage',
    'sheep',
    'nouns',
    'plain',
    'drink',
    'bones',
    'apart',
    'turns',
    'moves',
    'touch',
    'angle',
    'based',
    'range',
    'marks',
    'tired',
    'older',
    'farms',
    'spend',
    'shoes',
    'goods',
    'chair',
    'twice',
    'cents',
    'empty',
    'alike',
    'style',
    'broke',
    'pairs',
    'count',
    'enjoy',
    'score',
    'shore',
    'roots',
    'paint',
    'heads',
    'shook',
    'serve',
    'angry',
    'crowd',
    'wheel',
    'quick',
    'dress',
    'share',
    'alive',
    'noise',
    'solid',
    'cloth',
    'signs',
    'hills',
    'types',
    'drawn',
    'worth',
    'truck',
    'piano',
    'upper',
    'loved',
    'usual',
    'faces',
    'drove',
    'cabin',
    'boats',
    'towns',
    'proud',
    'court',
    'model',
    'prime',
    'fifty',
    'plans',
    'yards',
    'prove',
    'tools',
    'price',
    'sheet',
    'smell',
    'boxes',
    'raise',
    'match',
    'truth',
    'roads',
    'threw',
    'enemy',
    'lunch',
    'chart',
    'scene',
    'graph',
    'doubt',
    'guide',
    'winds',
    'block',
    'grain',
    'smoke',
    'mixed',
    'games',
    'wagon',
    'sweet',
    'topic',
    'thank',
    'storm',
    'agree',
    'brain',
    'track',
    'smile',
    'funny',
    'beach',
    'stock',
    'hurry',
    'saved',
    'sorry',
    'giant',
    'trail',
    'offer',
    'ought',
    'rough',
    'daily',
    'avoid',
    'keeps',
    'allow',
    'cream',
    'laugh',
    'edges',
    'teach',
    'frame',
    'bells',
    'dream',
    'magic',
    'occur',
    'ended',
    'chord',
    'skill',
    'holes',
    'dozen',
    'brave',
    'apple',
    'climb',
    'outer',
    'pitch',
    'ruler',
    'holds',
    'fixed',
    'costs',
    'calls',
    'blank',
    'staff',
    'labor',
    'eaten',
    'youth',
    'tones',
    'honor',
    'globe',
    'gases',
    'doors',
    'poles',
    'loose',
    'apply',
    'tears',
    'exact',
    'brush',
    'chest',
    'layer',
    'whale',
    'minor',
    'faith',
    'likes',
    'motor',
    'pound',
    'knees',
    'refer',
    'fully',
    'chain',
    'shirt',
    'flour',
    'drops',
    'spite',
    'orbit',
    'banks',
    'shoot',
    'curve',
    'tribe',
    'tight',
    'blind',
    'slept',
    'shade',
    'claim',
    'flies',
    'theme',
    'queen',
    'fifth',
    'union',
    'hence',
    'straw',
    'entry',
    'issue',
    'birth',
    'feels',
    'anger',
    'brief',
    'rhyme',
    'glory',
    'guard',
    'flows',
    'flesh',
    'owned',
    'trick',
    'yours',
    'sizes',
    'noted',
    'width',
    'burst',
    'route',
    'lungs',
    'uncle',
    'bears',
    'royal',
    'kings',
    'forty',
    'trial',
    'cards',
    'brass',
    'opera',
    'chose',
    'owner',
    'vapor',
    'beats',
    'mouse',
    'tough',
    'wires',
    'meter',
    'tower',
    'finds',
    'inner',
    'stuck',
    'arrow',
    'poems',
    'label',
    'swing',
    'solar',
    'truly',
    'tense',
    'beans',
    'split',
    'rises',
    'weigh',
    'hotel',
    'stems',
    'pride',
    'swung',
    'grade',
    'digit',
    'badly',
    'boots',
    'pilot',
    'sales',
    'swept',
    'lucky',
    'prize',
    'stove',
    'tubes',
    'acres',
    'wound',
    'steep',
    'slide',
    'trunk',
    'error',
    'porch',
    'slave',
    'exist',
    'faced',
    'mines',
    'marry',
    'juice',
    'raced',
    'waved',
    'goose',
    'trust',
    'fewer',
    'favor',
    'mills',
    'moral',
    'fires',
    'meals',
    'shake',
    'shops',
    'cycle',
    'movie',
    'slope',
    'canoe',
    'teams',
    'folks',
    'fired',
    'bands',
    'thumb',
    'shout',
    'canal',
    'habit',
    'reply',
    'ruled',
    'fever',
    'crust',
    'shelf',
    'walks',
    'midst',
    'crack',
    'tales',
    'coach',
    'stiff',
    'flood',
    'verse',
    'awake',
    'rocky',
    'march',
    'fault',
    'swift',
    'faint',
    'civil',
    'ghost',
    'feast',
    'blade',
    'limit',
    'germs',
    'reads',
    'ducks',
    'dairy',
    'worst',
    'gifts',
    'lists',
    'stops',
    'rapid',
    'brick',
    'claws',
    'beads',
    'beast',
    'skirt',
    'cakes',
    'lions',
    'frogs',
    'tries',
    'nerve',
    'grand',
    'armed',
    'treat',
    'honey',
    'moist',
    'legal',
    'penny',
    'crown',
    'shock',
    'taxes',
    'sixty',
    'altar',
    'pulls',
    'sport',
    'drums',
    'talks',
    'dying',
    'dates',
    'drank',
    'blows',
    'lever',
    'wages',
    'proof',
    'drugs',
    'tanks',
    'sings',
    'tails',
    'pause',
    'herds',
    'arose',
    'hated',
    'clues',
    'novel',
    'shame',
    'burnt',
    'races',
    'flash',
    'weary',
    'heels',
    'token',
    'coats',
    'spare',
    'shiny',
    'alarm',
    'dimes',
    'sixth',
    'clerk',
    'mercy',
    'sunny',
    'guest',
    'float',
    'shone',
    'pipes',
    'worms',
    'bills',
    'sweat',
    'suits',
    'smart',
    'upset',
    'rains',
    'sandy',
    'rainy',
    'parks',
    'sadly',
    'fancy',
    'rider',
    'unity',
    'bunch',
    'rolls',
    'crash',
    'craft',
    'newly',
    'gates',
    'hatch',
    'paths',
    'funds',
    'vocal',
    'bacon',
    'chalk',
    'cargo',
    'crazy',
    'acted',
    'goats',
    'arise',
    'witch',
    'loves',
    'queer',
    'dwell',
    'backs',
    'ropes',
    'shots',
    'merry',
    'phone',
    'cheek',
    'peaks',
    'clubs',
    'cheer',
    'widow',
    'twist',
    'tenth',
    'hides',
    'comma',
    'sweep',
    'spoon',
    'stern',
    'crept',
    'maple',
    'deeds',
    'rides',
    'muddy',
    'crime',
    'jelly',
    'ridge',
    'drift',
    'dusty',
    'devil',
    'tempo',
    'humor',
    'sends',
    'steal',
    'tents',
    'waist',
    'roses',
    'reign',
    'noble',
    'cheap',
    'dense',
    'linen',
    'geese',
    'woven',
    'posts',
    'hired',
    'wrath',
    'salad',
    'bowed',
    'tires',
    'shark',
    'belts',
    'grasp',
    'blast',
    'polar',
    'fungi',
    'tends',
    'pearl',
    'loads',
    'jokes',
    'veins',
    'frost',
    'hears',
    'loses',
    'hosts',
    'diver',
    'phase',
    'toads',
    'tasks',
    'seams',
    'socks',
    'urban',
    'goals',
    'grant',
    'minus',
    'films',
    'tunes',
    'shaft',
    'firms',
    'skies',
    'bride',
    'wreck',
    'flock',
    'stare',
    'hobby',
    'bonds',
    'dared',
    'faded',
    'thief',
    'crude',
    'pants',
    'flute',
    'votes',
    'tonal',
    'radar',
    'wells',
    'skull',
    'hairs',
    'argue',
    'wears',
    'dolls',
    'voted',
    'caves',
    'cared',
    'broom',
    'scent',
    'panel',
    'fairy',
    'olive',
    'bends',
    'prism',
    'lamps',
    'cable',
    'peach',
    'ruins',
    'rally',
    'schwa',
    'lambs',
    'sells',
    'cools',
    'draft',
    'charm',
    'limbs',
    'brake',
    'gazed',
    'cubes',
    'delay',
    'beams',
    'ranks',
    'array',
    'harsh',
    'camel',
    'vines',
    'picks',
    'naval',
    'purse',
    'rigid',
    'crawl',
    'toast',
    'soils',
    'sauce',
    'basin',
    'ponds',
    'twins',
    'wrist',
    'fluid',
    'pools',
    'bloom',
    'dwelt',
    'melts',
    'risen',
    'flags',
    'knelt',
    'fiber',
    'roofs',
    'freed',
    'armor',
    'piles',
    'aimed',
    'algae',
    'twigs',
    'lemon',
    'ditch',
    'drunk',
    'rests',
    'chill',
    'slain',
    'panic',
    'cords',
    'tuned',
    'crisp',
    'ledge',
    'dived',
    'swamp',
    'clung',
    'stole',
    'molds',
    'yarns',
    'liver',
    'gauge',
    'breed',
    'stool',
    'gulls',
    'awoke',
    'gross',
    'diary',
    'rails',
    'belly',
    'trend',
    'flask',
    'stake',
    'gains',
    'bombs',
    'clown',
    'palms',
    'cones',
    'roast',
    'tidal',
    'bored',
    'chant',
    'acids',
    'dough',
    'camps',
    'swore',
    'lover',
    'hooks',
    'males',
    'cocoa',
    'punch',
    'award',
    'reins',
    'ninth',
    'noses',
    'links',
    'abattis',
    'abattised',
    'abattises',
    'abattoir',
    'abattoirs',
    'abattu',
    'abattue',
];

// Init the game
function init() {

    seconds.innerHTML = currentLevel;
    showWord(words);
    setInterval(countdown, 1000);
    wordInput.addEventListener('input', startGame);
    setInterval(checkStatus, 50);
    buttonEasy.addEventListener('click', function () {
        currentLevel = levels.Easy;
        time = currentLevel;
        showWord(words);
        startGame()
    });
    buttonMedium.addEventListener('click', function () {
        currentLevel = levels.Medium;
        time = currentLevel;
        showWord(words);
        startGame()
    });
    buttonDiablo.addEventListener('click', function () {
        currentLevel = levels.Diablo;
        time = currentLevel;
        showWord(words);
        startGame()
    });

}

function showWord(words) {

    if (currentLevel.valueOf() === levels.Diablo) {
        currentWord.innerHTML = createRandomWord();
    } else {
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord.innerHTML = words[randomIndex];
    }
}

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    console.log(time);
    timeDisplay.innerHTML = time;
}

function checkStatus() {
    if (!isPlaying && time === 0) {
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        message.innerHTML = 'Game Over';
        score = -1;
    }
}

function startGame() {

    seconds.innerHTML = currentLevel;

    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = '0';
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.classList.remove('text-danger');
        message.classList.add('text-success');
        message.innerHTML = 'Correct!';
        return true
    } else {
        message.innerHTML = '';
        return false
    }
}


function createRandomWord() {

    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
