// JavaScript for bato-bato pick game

// makes computer pick randomly from an ['array', 'array',]
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
// Math.random() picks a floating point number, Math.floor() then rounds down 
// the floating point to the largest interger/whole number either less than or equal to given number
    const random = Math.floor(Math.random() * 3);
// returns one of the choices
    return choices[random];
}

