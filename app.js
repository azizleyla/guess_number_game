'use strict';
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const messageElement = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const scoreElement = document.querySelector('.score');
const hightScoreElement = document.querySelector('.highscore')
const againBtn = document.querySelector('.again');

let score = 20;
let highScore = 0;
//displayMessage
const displayMessage = function (message) {
    messageElement.textContent = message;
}
checkBtn.addEventListener('click', function () {
    const guessNumber = Number(guess.value);
    if (!guess) {
        displayMessage('⛔️ No number!');
    }
    else if (guessNumber === secretNumber) {
        displayMessage("Correct Number 🎉");
        score++;
        scoreElement.textContent = score;
        if (score > highScore) {
            highScore = score;
            hightScoreElement.textContent = score;
        }
        document.querySelector('body').style.backgroundColor = 'green';

    } else if (guessNumber !== secretNumber) {
        if (score > 1) {
            displayMessage(guessNumber > secretNumber ? "Too high" : "Too low")
            score--;
            scoreElement.textContent = score;
        } else {
            displayMessage("You lost the game💥")
            scoreElement.textContent = score;
        }
    }
})
//restart the game
againBtn.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    scoreElement.textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage("Start Guessing...");
    guess.value = "";

})