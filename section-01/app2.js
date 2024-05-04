// Write a function to find the average value in an
// array of numbers
// avg([0,50]) //25
// avg([75, 76, 80, 95, 100]) //85.2

// function avg(numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum / numbers.length;
// }

//============================================//
// A pangram is a sentence that contains every letter of the
// alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see
// if a given sentence contains every letter of the 
// alphabet. Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// function isPangram(string) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     for (let char of alphabet) {
//         if (!string.toLowerCase().includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// =============================================//

// Write a getCard() function which returns a random 
// playing card object, like:
//      {
//            value: 'K'
//            suit: 'clubs'
//
//      }
// Pick a random value from:
//    1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
//    clubs, spades, hearts, diamonds
// Return both in a object

// Get a random index from an array
// function pick(array) {
//     return Math.floor(Math.random() * array.length);
// }


// function getCard() {
//     const values = ['2', '3', '4', '5',
//                      '6', '7', '8', '9', 
//                      '10', 'J', 'Q', 'K', 'A'];
//     const suit = ['clubs', 'spades', 
//                     'hearts', 'diamonds'];

//     return {
//         value: values[pick(values)],
//         suit: suit[pick(suit)]
//     }
    
// }



// function outer() {
//     let hero = "Black Panther";

//     function inner() {
//         //let hero = "Captain America";
//         let cryForHelp = `${hero}, please save me!`;
//         console.log(cryForHelp);
//     }

//     inner();
// }

// const square = function (num) {
//     return num * num;
// }

// function add(x, y) {
//     return x + y;
// }

// const subtract = function (x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// const divide = function (x, y) {
//     return x / y;
// }

// const operations = [add, subtract, multiply, divide];

// for (let func of operations) {
//     let result = func(30, 5);
//     console.log(result);
// }

// const thing = {
//     doSomething: multiply
// }


// Functions arguments and return values

// function callThreeTimes(f) {
//     f();
//     f();
//     f();
// }

// function cry() {
//     console.log("BOO HOO I'M SO SAD!");
// }

// function rage() {
//     console.log("I HATE EVERYTHING!");
// }

// function repeatNTimes(func, num) {
//     for (let i=0; i<num; i++) {
//         func();
//     }
// }

// function pickOne(f1, f2) {
//     let rand = Math.random();
//     console.log(rand);
//     rand < 0.5 ? f1() : f2();
// }

//======================================//

// function multiplyBy(num) {
//     return function(x) {
//         return x * num;
//     }
// }


// const isChild = makeBetweenFunc(0, 18);

// function makeBetweenFunc(min, max) {
//     return function(num) {
//         return num >= min && num <= max;
//     }
// }

// callback functions

// forEach()

//const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach(function(num) {
//     console.log(num * num);
// });

// function printTriple(n) {
//     console.log(n * 3);
// }

// nums.forEach(printTriple)

// nums.forEach((num, idx) => console.log(idx, num));

// map()

// const evenNums = nums.map(function(num) {
//     return {
//         value: num,
//         isEven: num % 2 === 0
//     }
// });

// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const abbrevs = words.map(function(word) {
//     return word.toUpperCase().split('').join('.');
// })

// const square = x => x * x;
// const greet = () => console.log("HI!");

// const parityList = nums.map(n => n % 2 === 0 ? 'even' : 'odd');

// find()

// let movies = [
//     'The Fantastic Mr. Fox',
//     'Mr. and Mrs. Smith',
//     'Mrs. Doubtfire',
//     'Mr. Deeds'
// ]

// let movie = movies.find(movie => movie.includes('Mrs.'))

// let movie2 = movies.find(m => m.indexOf('Mrs') === 0);


// filter()

// const nums = [34, 35, 67, 54, 109, 102, 32, 9]

// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);


// const bigNums = nums.filter(n => n < 10);

// every()

// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// const all3Lets = words.every(word => word.length === 3);

// const allEndInG = words.every(word => {
//     const last = word.length - 1;
//     return word[last] === 'g';
// });

// some()

// const someStartWithD = words.some(word => word[0] === 'd');


// sort()

// const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

// const ascSort = prices.slice().sort((a, b) => a - b);
// const descSort = prices.slice().sort((a, b) => b - a);

// reduce()

// const nums = [3, 4, 5, 6, 7];

// const product = nums.reduce((total, currentVal) => total * currentVal);
//const sum = [3, 5, 7, 9, 11].reduce((a,b) => a + b);


// Function default parameter

// function multiply(x, y = 1) {
//     return x * y;
// }


// Spread

// const nums = [9, 3, 2, 7];

// function giveMeFour(a, b, c, d) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('c', c);
//     console.log('d', d);
// }

// const colors = ['red', 'orange', 'yellow', 'green'];


// const cephalopods = ['dumbo octopus', 
//                      'humboldt squid',
//                     'flamboyant cuttlefish'];

// const gastropods = ['giant african snail',
//                     'banana slug',
//                     'variable neon slug'];

// const cnidaria = ['fire coral', 'moon jelly'];

// const mollusca = [...cephalopods, ...gastropods];

// const feline = {
//     legs: 4,
//     family: 'Felidae'
// };

// const canine = {
//     family: 'Caninae',
//     furry: true,
//     legs: 4
// };

// const dog = {
//     ...canine,
//     isPet: true,
//     adorable: true
// }

// const houseCat = {
//     ...feline,
//     isGrumpy: true,
//     personality: 'unpredictible'
// }

// const catDog = {
//     ...canine,
//     ...feline
// }

// const tripod = {
//     ...canine,
//     legs: 3
// }

// const catDogClone = {
//     ...catDog
// }

// const random = [...'hello', {...catDog}];

// ...arguments

// function sum() {
//     const args = [...arguments];
//     return args.reduce((a,b) => a + b);
// }


// Rest: much better

// function sum(...nums) {
//     return nums.reduce((a, b) => a + b);
// }

// function fullName(first, last, ...titles) {
//     console.log('first', first)
//     console.log('last', last)
//     console.log('titles', titles)
// }


// Destructuring

// Array

// const raceResults = [
//     'Eliud Kipchoge',
//     'Feyisa Lelisa',
//     'Galen Rupp',
//     'Ghirmay Ghebreslassie',
//     'Alphonce Simbu',
//     'Jared Ward'
// ];

// const [gold, silver, bronze] = raceResults;
// const [first,,,fourth] = raceResults;
// const [winner, ...others] = raceResults;

// Object

// const runner = {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//     title: "Elder of the Order of the Golden Heart of Kenya"
// }

// const {first, last, country} = runner;

// const {country: nation} = runner;

// Params destructuring

// const runner = {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//     title: "Elder of the Order of the Golden Heart of Kenya"
// }

// function print(person) {
//     const {first, last, title} = person;
//     console.log(`${first} ${last}, ${title}`);
// }

// const print = ({first, last, title}) => (
//     console.log(`${first} ${last}, ${title}`)
// );

// Objects

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;

//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;

//     return {max, min, sum, avg};
// }

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

// Computed Properties

// const role = 'host';
// const person = 'Jools Holland';

// const team = {
//     role: person
// }

// const team = {
//     [role]: person
// };

// function addProp(obj, k, v) {
//     const copy = {...obj};
//     copy[k] = v;
//     return copy;
// }

// const addProp = (obj, k, v) => ({...obj, [k]: v});


// Adding methods to objects


// const math = {
//     add: (x, y) => x + y
// };

// const auth = {
//     username: 'TommyBot',
//     login() {
//         console.log('LOGGED YOU IN!')
//     },
//     logout() {
//         console.log('GOODBYE')
//     }
// }


// The keyword THIS

// function sayHi() {
//     console.log("HI");
//     console.log(this);
// }

// const greet = function () {
//     console.log(this);
// }


// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         const {first, last, nickName} = this;
//         return `${first} ${last} AKA ${nickName}`;
//     },
//     printBio() {
//         console.log(this);
//         const fullName = this.fullName();
//         console.log(`${fullName} is a person!`);
//     },
//     laugh: () => {
//         console.log(this);
//         console.log(`${this.nickName} says HAHAHAHA`);
//     }

// }

// const printBio = person.printBio;

// const annoyer = {
//     phrases: ["literally", "cray cray", "I can't even", "Totes!",
//     "YOLO", "Can't Stop, Won't Stop"],
//     pickPhrase() {
//         const {phrases} = this;
//         const idx = Math.floor(Math.random() * phrases.length)
//         return phrases[idx]
//     },
//     start() {
//         this.timerId = setInterval(() => {
//             console.log(this.pickPhrase())
//         }, 3000);
//     },

//     stop() {
       
//     }

// }

// Putting It All Together



// function makeDeck() {
//     const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
//     const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

//     const deck = [];
//     for (let value of values.split(',')) {
//         for (let suit of suits) {
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }


// function drawCard(deck) {
//     return deck.pop();
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);



// myDeck.initializeDeck();
// myDeck.shuffle();
// const hand1 = myDeck.drawMultiple(2);
// const hand2 = myDeck.drawMultiple(2);
// const hand3 = myDeck.drawMultiple(5);


// const makeDeck = () => {
//     return {
//         deck: [],
//         drawnCards: [],
//         suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//         values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//         initializeDeck() {
//             const {suits, values, deck} = this;
    
//             for (let value of values.split(',')) {
//                 for (let suit of suits) {
//                     deck.push({
//                         value,
//                         suit
//                     })
//                 }
//             }
//             //return deck;
//         },
//         drawCard() {
//             const card =  this.deck.pop();
//             this.drawnCards.push(card);
//             return card;
//         },
//         drawMultiple(numCards) {
//             const cards = [];
//             for ( let i=0; i < numCards; i++) {
//                 cards.push(this.drawCard());
//             }
//             return cards;
//         },
//         shuffle() {
//             const {deck} = this;
//             for (let i = deck.length -1; i > 0; i--) {
//                 let j = Math.floor(Math.random() * (i + 1));
//                 [deck[i], deck[j]] = [deck[j], deck[i]];
//             }
//         }
//     }
// }


// const myDeck = makeDeck();
// myDeck.initializeDeck();
// myDeck.shuffle();
// const hand1 = myDeck.drawMultiple(2);
// const hand2 = myDeck.drawMultiple(2);
// const hand3 = myDeck.drawMultiple(5);

// const deck2 = makeDeck();
// deck2.initializeDeck();


