//sezione variabili
const numbers = [];
const answers = [];
const message = document.getElementById('message');
const button = document.querySelector('button');
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
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

//random number to array saver
for (let i = 0; i < 5; i++) {
    numbers.push(RNG(1, 50));
    for (let j = 0; j < i; j++) {
        if (numbers[i] == numbers[j]) {
            numbers.splice(i, 1);
            i--
            break;
        }
        
    }
    numbersList.innerHTML += `<li>${numbers[i]}</li>`;
};

//set timeout
setTimeout(() => {
    numbersList.innerHTML = '';
}, (count * 1000));

//
button.addEventListener('click', function(event){
    event.preventDefault();

    const answers = [];
    for (let i = 0; i < 5; i++) {
        answers.push(document.querySelector(`input:nth-child(${i + 1})`).value);
    }

    for (let i = 0 ; i < answers.length; i++){
        if (isNan(answers[i]) || answers[i] == '') {
            message.innerHTML = 'inserisci solo numeri';
            return;
        }
    }

    for (let i = 0; i < answers.length; i++) {
        for (let j = i +1; j < answers.length; j++) {
            if (answers[i] == answers[j]) {
                message.innerHTML = 'inserisci numeri unici';
                return;
            }
        }
    }
    
    console.log(`risposte inserite: ${answers}`);

    const result = compareAnswers(numbers, answers);
    if (result.length === 5) {
        message.innerHTML = 'tutti i numeri inseriti sono coretti';
    }else if (result.length < 0) {
        message.innerHTML = `hai inserito ${result.length} numeri coretti: ${result}`;
    }else{
        message.innerHTML = 'nessun numero inserito corettamente';
    }
    
})