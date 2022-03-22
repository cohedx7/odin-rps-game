const computerChoiceShow = document.getElementById('computer-choice');
const playerChoiceShow = document.getElementById('player-choice');
const showResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(option => option.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceShow.innerHTML = userChoice;
}))