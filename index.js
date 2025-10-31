console.log('sadsdasdqq')
const btnRollDice = document.querySelector('#btn-rd');
const btnHoldDice = document.querySelector('#btn-ho');
const dice = document.querySelector('.dice');
let holdScore = 0;


const p1 = {
    score: 0,
    turn: true
}

const p2 = {
    score: 0,
    turn: false
}

const rollDice = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    dice.src = `dice-${randomDice}.png`;
    dice.classList.remove('hidden');
        
    
    
}

const holdDice = () => {
   
}


