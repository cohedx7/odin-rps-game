const computerChoiceShow = document.getElementById('computer-choice');
const playerChoiceShow = document.getElementById('player-choice');
const showResult = document.getElementById('result');
const showPlayerScore = document.getElementById('player-score');
const showComputerScore = document.getElementById('computer-score');
const showAnnouncement = document.getElementById('announce');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let pcChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let announcement;

possibleChoices.forEach(option => option.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceShow.innerHTML = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    generateComputerChoice();
    getResult();
    announceWinner();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        pcChoice = "rock";
    }
    if (randomNumber === 2) {
        pcChoice = "paper";
    }
    if (randomNumber === 3) {
        pcChoice = "scissors";
    }
    computerChoiceShow.innerHTML = pcChoice.charAt(0).toUpperCase() + pcChoice.slice(1);
}

function getResult() {
    if (pcChoice === userChoice) {
        result = "It's a draw!";
    }
    if (pcChoice === "rock" && userChoice === "paper") {
        result = "Congrats you won!";
        playerScore++;
    }
    if (pcChoice === "rock" && userChoice === "scissors") {
        result = "You lost!";
        computerScore++;
    }
    if (pcChoice === "paper" && userChoice === "scissors") {
        result = "Congrats you won!";
        playerScore++;
    }
    if (pcChoice === "paper" && userChoice === "rock") {
        result = "You lost!";
        computerScore++;
    }
    if (pcChoice === "scissors" && userChoice === "rock") {
        result = "Congrats you won!";
        playerScore++;
    }
    if (pcChoice === "scissors" && userChoice === "paper") {
        result = "You lost!";
        computerScore++;
    }
    showResult.innerHTML = result;
    showPlayerScore.innerHTML = playerScore;
    showComputerScore.innerHTML = computerScore;
}

function announceWinner() {
    if (playerScore == 5 && computerScore < 5) {
        announcement = "Congratulations! You have won the game!";
    }
    else if (computerScore == 5 && playerScore < 5) {
        announcement = "Damn, you lost! Better luck next time.";
    }
    else if (playerScore > 5 || computerScore > 5 ) {
        announcement = "Game over. Hit refresh to start again."
    }
    else {
        announcement = " ";
    }
    showAnnouncement.innerHTML = announcement;
}