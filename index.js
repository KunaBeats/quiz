"use strict";

import questionArray from "./questions.js";
import { fetchScore, handleSubmit } from "./utils.js";

const elements = {};
let numberOfQuestions = 15;
let questionIndex = 0;
let score = 0;
let answered = false;
let generatedQuestionArray = [];
let name = "";

const domMapping = () => {
  elements.main = document.querySelector("main");
};

async function renderScores() {
  const scoreData = await fetchScore();
  const scoreDataArray = scoreData.score;

  function sortObjectsByScore(objects) {
    objects.sort((a, b) => b.score - a.score);
    return objects;
  }

  const sortedArray = sortObjectsByScore(scoreDataArray);

  const container = document.createElement("div");
  container.classList = "rang-container-main";

  const scoreContainer = document.createElement("div");
  scoreContainer.classList = "rang-container";

  if (sortedArray.length < 15) {
    sortedArray.forEach((entry, index) => {
      const entryText = document.createElement("p");
      entryText.classList = "entry";
      entryText.innerHTML = `${index + 1}. | ${entry.name} | ${
        entry.score
      } Punkte`;

      scoreContainer.append(entryText);
    });
  } else {
    for (let i = 0; i < 15; i++) {
      const entryText = document.createElement("p");
      entryText.classList = "entry";
      entryText.innerHTML = `${i + 1}. | ${sortedArray[i].name} | ${
        sortedArray[i].score
      } Punkte`;

      scoreContainer.append(entryText);
    }
  }

  const startButton = document.createElement("button");
  startButton.className = "button-back";
  startButton.innerText = "Zum Startbildschirm";
  startButton.addEventListener("click", renderStartPage);

  container.append(scoreContainer, startButton);

  elements.main.append(container);
}

const getQuestionArray = (array) => {
  const newQuestionArray = [];
  for (let i = 0; i <= numberOfQuestions - 1; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const question = array[randomNumber];
    newQuestionArray.push(question);
    array.splice(randomNumber, 1);
  }

  return newQuestionArray;
};

const renderStartPage = () => {
  elements.main.innerHTML = "";
  generatedQuestionArray = getQuestionArray(questionArray);
  questionIndex = 0;
  score = 0;
  name = "";
  const container = document.createElement("div");
  container.className = "container-start";

  const startButton = document.createElement("button");
  startButton.className = "button-startpage";
  startButton.innerText = "Starte Spiel";
  startButton.addEventListener("click", renderQuestions);

  const scoreButton = document.createElement("button");
  scoreButton.className = "button-startpage";
  scoreButton.innerText = "Rangliste";
  scoreButton.addEventListener("click", () => {
    elements.main.innerHTML = "";
    renderScores();
  });

  container.append(startButton, scoreButton);

  elements.main.append(container);
};

const renderQuestions = () => {
  answered = false;
  let interval = 100;
  elements.main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "main-container-questions";

  const scoreContainer = document.createElement("div");
  scoreContainer.className = "score-container";
  scoreContainer.innerHTML = `Frage ${
    questionIndex + 1
  } | Richtige Antworten: ${score}`;

  const questionContainer = document.createElement("div");
  questionContainer.className = "question-container";
  questionContainer.innerHTML = generatedQuestionArray[questionIndex].question;

  const answerContainer = document.createElement("div");
  answerContainer.className = "answer-container";

  let correctAnswer;

  generatedQuestionArray[questionIndex].options.forEach((answer) => {
    const eachAnswerButton = document.createElement("button");
    eachAnswerButton.className = "each-answer-button";
    eachAnswerButton.innerHTML = answer.answer;
    eachAnswerButton.value = answer.isCorrect;
    answerContainer.append(eachAnswerButton);

    if (answer.isCorrect) {
      correctAnswer = eachAnswerButton;
    }

    eachAnswerButton.addEventListener("click", () => {
      if (!answered) {
        checkAnswer(eachAnswerButton, correctAnswer);
        setInterval(() => {
          interval++;
        }, 100);
        answered = true;
      }
    });
  });

  const timeBarContainer = document.createElement("div");
  timeBarContainer.classList = "timebar-container";

  const timebar = document.createElement("div");
  timebar.classList = "timebar";
  timeBarContainer.append(timebar);

  setInterval(() => {
    interval--;

    timebar.style.width = interval + "%";

    if (interval < 50) {
      timebar.style.backgroundColor = "orange";
    }
    if (interval < 25) {
      timebar.style.backgroundColor = "red";
    }
    if (interval === 0) {
      questionIndex++;
      if (questionIndex < numberOfQuestions) {
        renderQuestions();
      } else {
        renderFinalPage();
      }
    }
  }, 100);

  container.append(scoreContainer, questionContainer, answerContainer);

  elements.main.append(container, timeBarContainer);
};

const checkAnswer = (answer, correctAnswer) => {
  questionIndex++;
  if (answer.value === "true") {
    score += 1;
    answer.style.backgroundColor = "#9ef01a";
    if (questionIndex < numberOfQuestions) {
      setTimeout(renderQuestions, 2000);
    } else {
      setTimeout(renderFinalPage, 2000);
    }
  } else {
    answer.style.backgroundColor = "#ef233c";
    correctAnswer.style.backgroundColor = "#9ef01a";
    if (questionIndex < numberOfQuestions) {
      setTimeout(renderQuestions, 2000);
    } else {
      setTimeout(renderFinalPage, 2000);
    }
  }
};

const renderFinalPage = () => {
  elements.main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "container-final-screen";

  const congratsMessage = document.createElement("p");
  congratsMessage.innerHTML = `Herzlichen Glückwunsch!`;
  const scoreMessage = document.createElement("p");
  scoreMessage.innerHTML = `Du hast <b>${score}</b> von ${numberOfQuestions} Fragen richtig beantwortet!`;
  const rangText = document.createElement("p");
  rangText.innerHTML = `Wenn du magst, trag dich in die Rangliste ein:`;

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "Name";

  const submitButton = document.createElement("button");
  submitButton.className = "submit-button";
  submitButton.innerHTML = "SUBMIT";
  submitButton.addEventListener("click", () => {
    name = inputName.value;
    handleSubmit(name, score);
    inputName.value = "";
    renderStartPage();
  });

  const startButton = document.createElement("button");
  startButton.className = "button-back";
  startButton.innerText = "Zum Startbildschirm";
  startButton.addEventListener("click", renderStartPage);

  container.append(
    congratsMessage,
    scoreMessage,
    rangText,
    inputName,
    submitButton,
    startButton
  );

  elements.main.append(container);
};

const init = () => {
  domMapping();
  renderStartPage();
};

init();
