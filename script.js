'use strict';
const rollBtn = document.querySelector('.btn--roll');
const diceImageElement = document.querySelector('img.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let activePlayer = 0;
const playersEl = document.querySelectorAll('.player');
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
        if (activePlayer === 0) {
            const current0Num = Number(current0El.textContent) + diceNumber;
            current0El.textContent = current0Num;
        } else if (activePlayer === 1) {
            const current1Num = Number(current1El.textContent) + diceNumber;
            current1El.textContent = current1Num;
        }
    } else {
        if (activePlayer === 0) {
            const current0Num = 0;
            current0El.textContent = current0Num;
        } else if (activePlayer === 1) {
            const current1Num = 0;
            current1El.textContent = current1Num;
        }
        switchPlayer();
    }
});
