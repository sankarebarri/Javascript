let questions = [
  {
    question: "Inside which HTML element do we put the javascript ??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js' ?",
    choice1: "<script href='xxx.js'>",
    choice2: "<javascript href='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<scripting href='xxx.js'>",
    answer: 3
  },
  {
    question: "How do you write 'Hello World' in an alert box ?",
    choice1: "asgBox('Hello World')",
    choice2: "alertBox('Hello World')",
    choice3: "asg('Hello World')",
    choice4: "alert('Hello World')",
    answer: 4
  },
]
let currentQuestion = {}
let question = document.getElementById("question");
const  answerChoices = Array.from(document.getElementsByClassName("answer-choices"));
let score = 0;
let scoreBoard = document.getElementById("score-board");
let availableQuestions = [];
let questionCounter = 0;
let progressBarFill = document.getElementById("progress-fill");


const CORRECT_QUESTION = 10;
const MAX_QUESTIONS = 3;


function startGame() {
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS ) {
    localStorage.setItem("recentScore", score);
    return window.location.assign("save_score.html");
  };

  progressBarFill.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  question.textContent = currentQuestion.question;

  answerChoices.forEach(answer => {
    const number = answer.dataset["number"];
    answer.textContent = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

};

answerChoices.forEach(answer => {
  answer.addEventListener("click", e => {
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer){
      classToApply = "correct";
    }

    selectedChoice.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

    if (selectedAnswer == currentQuestion.answer) {
      score = score + CORRECT_QUESTION;
      scoreBoard.textContent = score;
    };
  });
});

startGame();
