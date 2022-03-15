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
let playerSelection = window.prompt("What is your choice: ");
if (playerSelection.toLowerCase() === "rock") {
    alert("You chose Rock.");
} else if (playerSelection.toLowerCase() === "paper") {
    alert("You chose Paper.");
} else {
    alert ("You chose Scissors.");
}

const computerSelection = computerPlay();
// const playerSelection = "rock";

let playScore = 0;
let computerScore = 0;
let whoWon = "";

// play one round of RPS
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        whoWon = "Nobody";
        return "You tied! Both choices are the same.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        whoWon = "Player";
        return "You won! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        whoWon = "Player";
        return "You won! Scissors beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        whoWon = "Player";
        return "You won! Paper beats rock.";
    } else {
        whoWon = "Computer";
        return `You lost! ${computerSelection} beats ${playerSelection}.`;
    }
}

// update score for each round...
function updateScore () {
    if (whoWon == "Player") {
        playerScore++;
        console.log("You have won " + playerScore + " games.");
    }  else if (whoWon == "Computer") {
        computerScore++;
        console.log("Computer has won" + computerScore + " games.");
    }
}

// console.log(playRound(playerSelection, computerSelection));

// call playRound function 5 times and update/show score after each round..??
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection[i], computerSelection[i]);
        updateScore[i];
        console.log(updateScore());
    }
}

console.log(game());