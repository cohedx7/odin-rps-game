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
function askPlayer() {
    const playerChoice = window.prompt("What is your choice: ");
    if (playerChoice.toLowerCase() === "rock") {
        alert("You chose Rock.");
        return "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        alert("You chose Paper.");
        return "paper";
    } else {
        alert ("You chose Scissors.");
        return "scissors";
    }
}

/* commented out and called directly into game function...
const computerSelection = computerPlay();
const playerSelection = askPlayer();
*/

let playerScore = 0;
let computerScore = 0;

// play one round of RPS and update scores...
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You tied! Both choices are the same.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You won! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You won! Scissors beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You won! Paper beats rock.";
    } else {
        computerScore++;
        const capitalize = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        return `You lost! ${capitalize} beats ${playerSelection}.`;
    }
}

// console.log(playRound(playerSelection, computerSelection));

/* call playRound function 5 times and update/show score after each round
   + display message after game is over according to end result */
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = askPlayer();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}.`);
    } 
    if (playerScore > computerScore) {
        console.log("Congrats! You beat the computer at RPS!");
    } else if (playerScore == computerScore) {
        console.log("You finished in a tie. Not bad!");
    } else {
        console.log("You lost. Better luck next time.");
    }
}

game();