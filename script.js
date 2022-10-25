'use strict';
const winnerScore = 10;
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImageElement = document.querySelector('img.dice');
const totalScoreEl = [
    document.getElementById('score--0'),
    document.getElementById('score--1')
];
const currentScoreEl = [
    document.getElementById('current--0'),
    document.getElementById('current--1')
];
const clearCurrentScoreNum = function () {
    currentScoreNum[activePlayer] = 0;
    currentScoreEl[activePlayer].textContent = currentScoreNum[activePlayer];
}
let currentScoreNum = [0, 0];
let activePlayer = 0;
const playersEl = document.querySelectorAll('.player');
let totalScoreNum;
const switchPlayer = function () {
    activePlayer = 1 - activePlayer;
    for (let i = 0; i < playersEl.length; i++) {
        if (playersEl[i].classList.contains('player--active')) {
            playersEl[i].classList.remove('player--active');
        } else {
            playersEl[i].classList.add('player--active');
        }
    }
}
rollBtn.addEventListener('click', function () {
    diceImageElement.classList.remove('hidden');
    const diceNumber = Math.trunc((Math.random() * 6) + 1);
    const diceImagePath = `img/dice-${diceNumber}.png`;
    diceImageElement.attributes.src.value = diceImagePath;
    if (diceNumber != 1) {
        currentScoreNum[activePlayer] = Number(currentScoreEl[activePlayer].textContent) + diceNumber;
        currentScoreEl[activePlayer].textContent = currentScoreNum[activePlayer];
    } else {
        clearCurrentScoreNum();
        switchPlayer();
    }
});


holdBtn.addEventListener('click', function () {
    totalScoreNum = Number(totalScoreEl[activePlayer].textContent);
    if (currentScoreNum[activePlayer] === 0) {
        alert('Roll dice!');
    } else {
        totalScoreNum = totalScoreNum + currentScoreNum[activePlayer];
        totalScoreEl[activePlayer].textContent = totalScoreNum;
        clearCurrentScoreNum();
        switchPlayer();
    }
    if (totalScoreNum >= winnerScore) {
        alert('You win, click OK button to start a now game :D');
    }
});