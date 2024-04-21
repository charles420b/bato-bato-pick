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
    
    playRound();

    // PROBLEM 2: faced problem of score not updating
    // SOLUTION 2: solved by rearranging console.logs properly. scores called before they update**
    
    // PROBLEM 2
    // console.log(playRound) was here initially**
    
    // learn how to do loops to play the game 5 times
    // function playGame() {
        //     for (let gameRound = 0; gameRound <= 1; gameRound++) {
            //         playRound();
            //     }
            // }
            
            
            
            // console.log("player: " + playerSelection)
            // prints scores to console
            console.log("player: " + playerSelection);
            console.log("computer: " + computerSelection)
            console.log("Game Round: " + gameRound);
            console.log("Player Score:" + playerScore);
            console.log("Computer Score:" + computerScore);
            console.log("Tie:" + tie);
            // and store game data such as scores and number of roundsq