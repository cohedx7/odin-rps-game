// return output Rock, Paper or Scissors for computer
function computerPlay() {
    const computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        return "rock";
    } else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(computerPlay());

// ask player for his choice
/*
function playerSelection () {
    let playerChoice = window.prompt("What is your choice: ");
    return playerChoice.toLowerCase();
}
*/

const computerSelection = computerPlay();
const playerSelection = "rock";

// play one round of RPS
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied! Both choices are the same.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won! Scissors beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won! Paper beats rock.";
    } else {
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}

console.log(playRound(playerSelection, computerSelection));