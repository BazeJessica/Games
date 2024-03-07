const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainer = document.getElementById("question_container");
const questionElement = document.getElementById("question");
const answeButton = document.getElementById("answer_button");

let shuffleQuestion, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffleQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  questionContainer.classList.add('block');
  setNextQuestion();
  quizScore = 0;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestion[currentQuestionIndex]);
}

function showQuestion(question) {

  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answeButton.appendChild(button);
  });
}


function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answeButton.firstChild) {
    answeButton.removeChild(answeButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answeButton.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
  if ((selectButton.dataset = correct)) {
    quizScore++;
  }
  document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "How is the quiz going?",
    answers: [
      { text: "well", correct: true },
      { text: "Awesome", correct: false },
      { text: "Bad", correct: false },
      { text: "Negative", correct: false },
    ],
  },
  {
    question: "Enjoying thhe day?",
    answers: [
      { text: "Awesome", correct: false },
      { text: "well", correct: true },
      { text: "Negative", correct: false },
    ],
  },
  {
    question: "Interesting time?",
    answers: [
      { text: "Awesome", correct: false },
      { text: "Bad", correct: false },
      { text: "well", correct: true },
    ],
  },
];
