'use strict';

// Declare that we need

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnCloseModal = document.querySelector('.close-modal');

// Player section
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Current score players
const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

// Show numbers from Dice
const actualDiceForPlayer0 = document.querySelector('#score--0');
const actualDiceForPlayer1 = document.querySelector('#score--1');

// Total score players
const totalScorePlayer0 = document.querySelector('#score--0');
const totalScorePlayer1 = document.querySelector('#score--1');

// Dice(Dado)
const dice = document.querySelector('.dice');

// Modal
const backBlur = document.querySelector('.blur');
const modal = document.querySelector('.modal');

// Player that win's
const winPlayer = null;
const winMessage = document.querySelector('.win-message');


// Functions
const newGame = () => {
    // Reset points
    currentScorePlayer0.textContent = 0;
    currentScorePlayer1.textContent = 0;
    totalScorePlayer0.textContent = 0;
    totalScorePlayer1.textContent = 0;
    if (!player0.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
}

const openModal = (player) => {
    backBlur.classList.remove('hidden');
    modal.classList.remove('hidden');
    winMessage.textContent = `Congratulation ${player} you win the game!`;
};

const generateNumber = () => {
    // How is the actual player that press the button
    const generatedNumber = Math.trunc(Math.random() * 6 + 1);
    if (player0.classList.contains('player--active')) {
        if (generatedNumber > 1) {
            actualDiceForPlayer0.textContent = generatedNumber;
            currentScorePlayer0.textContent = Number(currentScorePlayer0.textContent) + generatedNumber;
        } else {
            currentScorePlayer0.textContent = 0;
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
        }
    } else {
        if (generatedNumber > 1) {
            actualDiceForPlayer1.textContent = generatedNumber;
            currentScorePlayer1.textContent = Number(currentScorePlayer1.textContent) + generatedNumber;
        } else {
            currentScorePlayer1.textContent = 0;
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
        }
    }
    getCurrentDice(generatedNumber);
    if(Number(totalScorePlayer0.textContent) >= 100) {
        openModal('Player 1');
    } else if(Number(totalScorePlayer1.textContent) >= 100) {
        openModal('Player 2');
    }
}

function getCurrentDice(currentNumber) {
    switch (currentNumber) {
        case 1:
            dice.src = 'dice-1.png';
            break;
        case 2:
            dice.src = 'dice-2.png';
            break;
        case 3:
            dice.src = 'dice-3.png';
            break;
        case 4:
            dice.src = 'dice-4.png';
            break;
        case 5:
            dice.src = 'dice-5.png';
            break;
        case 6:
            dice.src = 'dice-6.png';
            break;
    }
}

const holdValue = () => {
    if (player0.classList.contains('player--active')) {
        totalScorePlayer0.textContent = currentScorePlayer0.textContent;
        player0.classList.remove('player--active');
        player1.classList.add('player--active');
    } else {
        totalScorePlayer1.textContent = currentScorePlayer1.textContent;
        player1.classList.remove('player--active');
        player0.classList.add('player--active');
    }
}


// Event listener for all buttons
btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', generateNumber);
btnHold.addEventListener('click', holdValue);
btnCloseModal.addEventListener('click', () => {
    if(!backBlur.classList.contains('hidden') && !modal.classList.contains('hidden')) {
        backBlur.classList.add('hidden');
        modal.classList.add('hidden');
    }
    newGame();
});