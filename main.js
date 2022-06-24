import { QA001 } from './chapter/section001.js';
import { QA002 } from './chapter/section002.js';
import { QA003 } from './chapter/section003.js';
import { QA004 } from './chapter/section004.js';
import { QA005 } from './chapter/section005.js';
import { QA006 } from './chapter/section006.js';
import { QA007 } from './chapter/section007.js';

const questionHTML = document.querySelector('.question');
const answerHTML = document.querySelector('.answer');
const button = document.querySelector('.checkButton');

let answer = "";

const qList = [QA001, QA002, QA003, QA004, QA005, QA006, QA007];

const createQuestion = () => {
  let QA = Math.floor(Math.random() * qList.length);
  let QAnum = Math.floor(Math.random() * qList[QA].length);

  questionHTML.innerText = qList[QA][QAnum][0];
  answer = qList[QA][QAnum];
}

const checkAnswer = () => {
  let answerText = "";
  for (var i = 1; i < answer.length; i++) {
    if (i == 1) answerText += answer[i]; else answerText += " 또는 " + answer[i];
  }
  alert(answerText);
  answerHTML.value = "";
  createQuestion();
}

createQuestion();

answerHTML.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    checkAnswer();
  }
});

button.addEventListener("click", function() {
    checkAnswer();
});
