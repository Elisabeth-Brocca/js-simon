//sezione variabili
const numbers = [];
const answers = [];
const message = document.getElementById('message');
const button = document.querySelector('button');
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('number-list');
const answersForm = document.getElementById('answers-form');

//random numbers generator
function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//funzione comparazione risposte
function compareAnswers(numbers, answers) {
    let result = [];
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (answers[i] == numbers[j]) {
                result.push(answers[i]);
                numbers.splice(j, 1);

            }
        }
    }
    return result;
}

//countdown
let count = 30;
let interval = setInterval(() => {
    count--;
    countdown.innerHTML = count;
    if (count === 0) {
        clearInterval(interval);
        countdown.innerHTML= '';
        instructions.innerHTML = 'inserire i numeri';
        document.querySelector('#answers-form').classList.remove('d-none');
    }
}, 1000);