var timerEl = document.querySelector('.timerCount')
var startButton = document.querySelector('.startBtn')
var quiz = document.querySelector('.quiz')
var timer;
var timeLeft;
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
var choicesEl = document.createElement("div");
var h1E1 = document.createElement("h1");
var pEl = document.createElement("p");
var submitBtn = document.createElement("button");
var backBtn = document.createElement("button");
var clearBtn = document.createElement("button");

var questions = [
    'Commonly used data types DO NOT include:',
    'The condition in an if/else statement is enclosed within ___.',
    'Arrays in JavaScript can be used to store ___.',
    'String values must be enclosed within ___ when being assigned to variables.',
    'A very useful tool used during development and debugging for putting content to the debugger is:'
];
var questionChoice = {
    choicesOne: ['strings', 'booleans', 'alerts', 'numbers'],
    choicesTwo: ['quotes', 'curly brackets', 'parantheses', 'square brackets'],
    choicesThree: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    choicesFour: ['commas', 'curly brackets', 'quotes', 'parantheses'],
    choicesFive: ['Javascript', 'terminal/bash', 'for loops', 'console.log'],
};
//Starts Quiz and Timer
function startQuiz() {
    timeLeft = 75;
    countdown();
    nextQ();
}
//Shows Timer
function countdown() {
    timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

//Goes through questions
var i = 0;
var w = 0;
function nextQ() {

    if (i === 0) {
        quiz.innerHTML = '';
        h1E1.textContent = questions[0];
        button1.textContent = "1." + questionChoice.choicesOne[0];
        button2.textContent = "2." + questionChoice.choicesOne[1];
        button3.textContent = "3." + questionChoice.choicesOne[2];
        button4.textContent = "4." + questionChoice.choicesOne[3];
        button1.addEventListener("click", wrongChoice);
        button2.addEventListener("click", wrongChoice);
        button3.addEventListener("click", rightChoice);
        button4.addEventListener("click", wrongChoice);

    } else if (i === 1) {
        quiz.innerHTML = '';
        h1E1.textContent = questions[1];
        button1.textContent = "1." + questionChoice.choicesTwo[0];
        button2.textContent = "2." + questionChoice.choicesTwo[1];
        button3.textContent = "3." + questionChoice.choicesTwo[2];
        button4.textContent = "4." + questionChoice.choicesTwo[3];
        button1.addEventListener("click", wrongChoice);
        button2.addEventListener("click", wrongChoice);
        button3.addEventListener("click", rightChoice);
        button4.addEventListener("click", wrongChoice);

    } else if (i === 2) {
        quiz.innerHTML = '';
        h1E1.textContent = questions[2];
        button1.textContent = "1." + questionChoice.choicesThree[0];
        button2.textContent = "2." + questionChoice.choicesThree[1];
        button3.textContent = "3." + questionChoice.choicesThree[2];
        button4.textContent = "4." + questionChoice.choicesThree[3];
        button1.addEventListener("click", wrongChoice);
        button2.addEventListener("click", wrongChoice);
        button3.addEventListener("click", wrongChoice);
        button4.addEventListener("click", rightChoice);

    } else if (i === 3) {
        quiz.innerHTML = '';
        h1E1.textContent = questions[3];
        button1.textContent = "1." + questionChoice.choicesFour[0];
        button2.textContent = "2." + questionChoice.choicesFour[1];
        button3.textContent = "3." + questionChoice.choicesFour[2];
        button4.textContent = "4." + questionChoice.choicesFour[3];
        button1.addEventListener("click", wrongChoice);
        button2.addEventListener("click", wrongChoice);
        button3.addEventListener("click", rightChoice);
        button4.addEventListener("click", wrongChoice);

    } else if (i === 4) {
        quiz.innerHTML = '';
        h1E1.textContent = questions[4];
        button1.textContent = "1." + questionChoice.choicesFive[0];
        button2.textContent = "2." + questionChoice.choicesFive[1];
        button3.textContent = "3." + questionChoice.choicesFive[2];
        button4.textContent = "4." + questionChoice.choicesFive[3];
        button1.addEventListener("click", wrongChoice);
        button2.addEventListener("click", wrongChoice);
        button3.addEventListener("click", wrongChoice);
        button4.addEventListener("click", rightChoice);

    } else {
        endQuiz();
    }
    h1E1.setAttribute("style", "width:600px; text-align:left;");
    choicesEl.appendChild(button1);
    choicesEl.appendChild(button2);
    choicesEl.appendChild(button3);
    choicesEl.appendChild(button4);

    quiz.appendChild(h1E1);
    quiz.appendChild(choicesEl);

    button1.setAttribute("style", "margin:5px; width:fit-content;");
    button2.setAttribute("style", "margin:5px; width:fit-content;");
    button3.setAttribute("style", "margin:5px; width:fit-content;");
    button4.setAttribute("style", "margin:5px; width:fit-content;");
    choicesEl.setAttribute("style", "display:flex; flex-direction:column; width:20%;");


}
//Checks if users choice is right or wrong
var correctAnsMsg = document.createElement("p");
var wrongAnsMsg = document.createElement("p");

function rightChoice() {
    i++;
    nextQ();
    correctAnsMsg.textContent = "Correct!";
    setTimeout(function () {
        correctAnsMsg.textContent = "";
    }, 2000);
    correctAnsMsg.setAttribute("style", "font-style:italic; text-align:left; border-top:1px solid black;");
    choicesEl.appendChild(correctAnsMsg);
}

function wrongChoice() {
    if (timeLeft >= 15) {
        timeLeft -= 15;
        nextQ();
        wrongAnsMsg.textContent = "Wrong!";
        setTimeout(function () {
            wrongAnsMsg.textContent = "";
        }, 1000);

    } else if (timeLeft <= 15) {
        endQuiz();
    }
    wrongAnsMsg.setAttribute("style", "font-style:italic; text-align:left; border-top:1px solid black;");
    choicesEl.appendChild(wrongAnsMsg);
}
// End of Quiz shows result
var divEl = document.createElement("div")
var y = document.createElement("p")
var x = document.createElement("input");

function endQuiz() {
    quiz = '';
    choicesEl.remove();
    h1E1.textContent = "All Done!";
    clearTimeout(timer);
    pEl.textContent = "Your Score is " + timeLeft;
    h1E1.appendChild(pEl);

    y.textContent = "Enter Initials: ";
    divEl.appendChild(y);
    y.setAttribute("style", "font-weight: lighter;display: inline-block;");

    x.setAttribute("type", "text");
    x.setAttribute("value", "");
    divEl.appendChild(x);
    submitBtn.textContent = "Submit";
    divEl.appendChild(submitBtn);
    h1E1.appendChild(divEl);
    submitBtn.addEventListener("click", highScore);

}
//Shows High Score
function highScore() {
    document.body.innerHTML = '';
    var h2E1 = document.createElement("h2");
    h2E1.textContent = "HighScore";
    h2E1.setAttribute("style", "text-align:center; font-size:30px;")
    document.body.appendChild(h2E1);
    var score = {
        initials: x.value,
        userScore: timeLeft,
    };

    localStorage.setItem("score", JSON.stringify(score));
    var lastScore = JSON.parse(localStorage.getItem("score"));
    if (lastScore !== null) {
        var scoreList = document.createElement("p");
        scoreList.textContent = lastScore.initials +
            " - " + lastScore.userScore
        h2E1.appendChild(scoreList);
    }
    // Button to go back to beggining of test
    backBtn.textContent = "Go Back"
    h2E1.appendChild(backBtn);
    backBtn.addEventListener("click", function () {
        window.location.replace("./index.html");
    });
    //Button to clear High Score and local storage
    clearBtn.textContent = "Clear"
    h2E1.appendChild(clearBtn);
    clearBtn.addEventListener("click", function () {
        localStorage.clear();
        scoreList.remove();
    });
}
//starts quiz when button is clicked
startButton.addEventListener("click", startQuiz);