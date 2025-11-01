const btnRollDice = document.querySelector('#btn-rd');
const btnHoldDice = document.querySelector('#btn-ho');
const btnNewGame = document.querySelector('#btn-ng');
const dice = document.querySelector('.dice');

let playerTurn = 1;

let overlay = document.querySelector(`.ct-${playerTurn}`);
let currentScore = document.querySelector(`.p${playerTurn}-hs`);

// let playerScore = document.querySelector(`.player-${playerTurn}`);


const funcRollDice = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1; // dice num 1-6        
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;
    if (randomDice === 1) {
        switchTurn(playerTurn);
    }
    currentScore.textContent = +currentScore.textContent + randomDice;
}

const funcHoldDice = () => {
    const playerScore = document.querySelector(`.player-${playerTurn}`);
    playerScore.textContent = +playerScore.textContent + +currentScore.textContent;
    switchTurn(playerTurn);
}

const funcNewGame = () => {
    document.querySelector(`.p${playerTurn}-hs`).textContent = '0';
    switchTurn(2);
    playerTurn = 1;
    overlay = document.querySelector(`.ct-${playerTurn}`);
    document.querySelector(`.player-${playerTurn}`).textContent = '0';
    document.querySelector(`.player-${playerTurn + 1}`).textContent = '0';
    
}

const switchTurn = (turn) => {
    if (turn === 1) {
        overlay.classList.add('overlay');
        playerTurn = 2;
        currentScore.textContent = '0';
        currentScore = document.querySelector(`.p${playerTurn}-hs`);
        overlay = document.querySelector(`.ct-${playerTurn}`);
        overlay.classList.remove('overlay');
    } else if (turn === 2) {
        overlay.classList.add('overlay');
        playerTurn = 1;
        currentScore.textContent = '0';
        currentScore = document.querySelector(`.p${playerTurn}-hs`);
        overlay = document.querySelector(`.ct-${playerTurn}`);
        overlay.classList.remove('overlay');
    }

}

btnRollDice.addEventListener('click', funcRollDice);
btnHoldDice.addEventListener('click', funcHoldDice);
btnNewGame.addEventListener('click', funcNewGame);
