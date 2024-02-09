// JavaScript for bato-bato pick game

// asks for user input using prompt()
const playerSelection = prompt("Rock, Paper, or Scissors?");

// getComputerChoice() function is put in a variable, declared globally, can be used with other functions
const computerSelection = getComputerChoice();

// displays computerSelection to console
console.log(computerSelection)

// makes computer pick randomly from an ['array', 'array',]
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
// Math.random() picks a floating point number, Math.floor() then rounds down 
// the floating point to the largest interger/whole number either less than or equal to given number
    const random = Math.floor(Math.random() * 3);
// returns one of the choices
    return choices[random];
}