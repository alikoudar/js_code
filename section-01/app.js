// Exercice: functions

// function isValidPassword(password, username) {
//     if (password.length < 8 || 
//         password.indexOf(' ') !== -1 || 
//         password.indexOf(username) !== -1
//     ) {
//         return false;
//     }
//     return true;
// }

function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1; 
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}






