/*
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct number if lost
- Player should choose to play again
*/

let tries = 3;

let min = 1;
let max = 10;

let winNum = getWinningNum();
console.log(winNum);

const btn = document.querySelector('.guess-submit');
const numInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const minNum = document.querySelector('#min-num');
const maxNum = document.querySelector('#max-num');
const game = document.querySelector('#game');

minNum.textContent = min;
maxNum.textContent = max;

btn.addEventListener('click', guess);

// Play Again event listener
game.addEventListener('mousedown', playAgain);

function playAgain(e) {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();

    }
}

function guess(e) {
    e.preventDefault();

    let guessNum = parseInt(numInput.value);

    // Validate Input
    if (isNaN(guessNum) || guessNum < min || guessNum > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    
    // User wins after guessing correct number
    if (guessNum === winNum) {
        gameOver(true, `You won! The correct number was: ${winNum}`);
    }
    else {
        tries--;

        // User has 0 tries
        if (tries === 0) {
            gameOver(false, `Game over! The correct number was ${winNum}. Better luck next time.`);
        }
        // User has tries left. Game continues
        else {
            setMessage(`${guessNum} is not the correct answer. Please try again. You have ${tries} guesses left`, 'red');
            numInput.style.borderColor = 'red';

            numInput.value = '';
        }
    }
}

function gameOver(won, msg) {
    let color = won === true ? 'green' : 'red';

    numInput.disabled = true;
    numInput.style.borderColor = color;
    setMessage(msg, color);

    btn.classList.add('play-again');
    btn.value = 'Play Again';
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

function getWinningNum() {
    return Math.floor(Math.random() * (max - min + 1) + min);
}