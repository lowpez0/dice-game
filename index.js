const btnRollDice = document.querySelector('#btn-rd');
const dice = document.querySelector('.dice');

let playerTurn = 1;
let currentScore = document.querySelector(`.p${playerTurn}-hs`);

let p1Score = document.querySelector();


const funcRollDice = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1; // dice num 1-6        
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;
    if (randomDice === 1) {
        switchTurn(playerTurn);
    }

    currentScore.textContent = +currentScore.textContent + randomDice;

}

const switchTurn = (turn) => {
    if (turn === 1) {
        playerTurn = 2;
        currentScore.textContent = '0';
        currentScore = document.querySelector(`.p${playerTurn}-hs`);
    } else if (turn === 2) {
        playerTurn = 1;
        currentScore.textContent = '0';
        currentScore = document.querySelector(`.p${playerTurn}-hs`);
    }

}

btnRollDice.addEventListener('click', funcRollDice);