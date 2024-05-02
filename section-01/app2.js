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
function pick(array) {
    return Math.floor(Math.random() * array.length);
}


function getCard() {
    const values = ['2', '3', '4', '5',
                     '6', '7', '8', '9', 
                     '10', 'J', 'Q', 'K', 'A'];
    const suit = ['clubs', 'spades', 
                    'hearts', 'diamonds'];

    return {
        value: values[pick(values)],
        suit: suit[pick(suit)]
    }
    
}






