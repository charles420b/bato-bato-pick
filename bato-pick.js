// JavaScript for bato-bato pick game

// getComputerChoice() function is put in a variable, declared globally, can be used with other functions
let computerSelection = getComputerChoice();

// asks for user input using prompt(), turns playerSelection case insensitive
let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

// score counters started as 0
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// game rounds 
let gameRound = 0;
let playerSelection = getHumanChoice();


function getHumanChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerSelection;
}

// makes computer pick randomly from an ['array', 'array',]
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() picks a floating point number, Math.floor() then rounds down 
    // the floating point to the largest interger/whole number either less than or equal to given number
    const random = Math.floor(Math.random() * 3);
    // returns one of the choices
    return choices[random];
}

// PROBLEM 1: find a way to return results from playRound() function
// SOLUTION 1: Added score increment++ to the function along with game condition win/lose/tie
// compare player/computerSelection, plays 1 round of RPS
// increments score counters with game results (user and pc wins and ties)

function playGame() {

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            tie++;
            return "Neither Wins it's a TIE."
        } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'

function playGame() {

    function playRound(playerSelection, computerSelection) {
        
        if (playerSelection === computerSelection) {
            tie++;
            return "Neither Wins it's a TIE."
        } else if (
            playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'
        ) {
            playerScore++
            return `Player Wins ${playerSelection} beats ${computerSelection}`
        } else {
            computerScore++
            return `Computer Wins ${computerSelection} beats ${playerSelection}`
        }
    }
        
    // score counters started as 0
    let playerScore = 0;
    let computerScore = 0;
    let tie = 0;
        
    // game rounds 
    let gameRound = 0;

    // this loops on forever
    // do {
    //     getHumanChoice
    //     console.log(playRound(playerSelection, computerSelection));
    // }
    // while (gameRound < 5)

    // plays game 5 times
    for (i = 0; i < 5; i++) {
        // asks for user input
        let playerSelection = getHumanChoice();
        // gets computer input
        let computerSelection = getComputerChoice();
        
        // prints to console game results
        console.log(playRound(playerSelection, computerSelection));
        // updates number of rounds and scores
        gameRound++;
    }
    // prints scores to console
    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection)
    console.log("Game Round: " + gameRound);
    console.log("Player Score:" + playerScore);
    console.log("Computer Score:" + computerScore);
    console.log("Tie:" + tie);
    // and store game data such as scores and number of roundsq
}
// play 1 round of RPS
playGame();

// PROBLEM 2: faced problem of score not updating
// SOLUTION 2: solved by rearranging console.logs properly. scores called before they update**

// PROBLEM 2
    // console.log(playRound) was here initially**