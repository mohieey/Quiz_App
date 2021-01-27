const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const correctBouns = 10;
const maxQuestion = 3;


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let classToApply;
let progressText = document.getElementById('progresstext');
let progressBarFull = document.getElementById('progressbarfull');
let incrementRate = 194 / maxQuestion;
let valueOfBar = incrementRate;
let socreText = document.getElementById('score');

let questions = [{
        "question": "Inside which HTML element do we put the JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
    },
    {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
    }
];



function startQuiz() {
    availableQuestions = [...questions];
    //console.log(availableQuestions)
    getNewQuestion();
}

function getNewQuestion() {
    if (availableQuestions.length == 0 || questionCounter >= maxQuestion) {
        localStorage.setItem('latestscore', score);
        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = 'Question ' + questionCounter + '/' + maxQuestion;
    let quesIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[quesIndex];
    question.innerText = currentQuestion.question;
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerText = currentQuestion['choice' + choices[i].dataset['number']];
    }

    progressBarFull.style.width = (valueOfBar + 'px');
    valueOfBar += incrementRate;
    availableQuestions.splice(quesIndex, 1);
    //console.log(availableQuestions);
    acceptingAnswers = true;

}


let c1 = document.getElementById('one');
c1.onclick = function() {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;


    let cValue = c1.dataset['number'];
    classToApply = (cValue == currentQuestion.answer) ? 'correct' : 'incorrect';
    c1.parentElement.classList.add(classToApply);
    if (classToApply == 'correct') {
        score += correctBouns;
        socreText.innerText = score;
    }
    setTimeout(function() {
        c1.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 400);
};

let c2 = document.getElementById('two');
c2.onclick = function() {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;


    let cValue = c2.dataset['number'];
    classToApply = (cValue == currentQuestion.answer) ? 'correct' : 'incorrect';
    c2.parentElement.classList.add(classToApply);
    if (classToApply == 'correct') {
        score += correctBouns;
        socreText.innerText = score;
    }
    setTimeout(function() {
        c2.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 400);
};

let c3 = document.getElementById('three');
c3.onclick = function() {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;


    let cValue = c3.dataset['number'];
    classToApply = (cValue == currentQuestion.answer) ? 'correct' : 'incorrect';
    c3.parentElement.classList.add(classToApply);
    if (classToApply == 'correct') {
        score += correctBouns;
        socreText.innerText = score;
    }
    setTimeout(function() {
        c3.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 400);
};

let c4 = document.getElementById('four');
c4.onclick = function() {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;


    let cValue = c4.dataset['number'];
    classToApply = (cValue == currentQuestion.answer) ? 'correct' : 'incorrect';
    c4.parentElement.classList.add(classToApply);
    if (classToApply == 'correct') {
        score += correctBouns;
        socreText.innerText = score;
    }
    setTimeout(function() {
        c4.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 400);
};

if (classToApply == 'correct') {
    score += correctBouns;
    socreText.innerText = score;
}
startQuiz();