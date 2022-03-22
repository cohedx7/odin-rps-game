const computerChoiceShow = document.getElementById('computer-choice');
const playerChoiceShow = document.getElementById('player-choice');
const showResult = document.getElementById('result');
const showPlayerScore = document.getElementById('player-score');
const showComputerScore = document.getElementById('computer-score');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let pcChoice;
let result;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach(option => option.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceShow.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
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
    computerChoiceShow.innerHTML = pcChoice;
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