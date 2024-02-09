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

// compare player/computerSelection, converts playerSelection.toLowerCase therefore being case insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Neither Wins it's a TIE."
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return `Player Wins ${playerSelection} beats ${computerSelection}`
    } else {
        return `Computer Wins ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playRound(playerSelection, computerSelection));