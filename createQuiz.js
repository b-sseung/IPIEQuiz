import { QA001 } from './chapter/section001.js';
import { QA002 } from './chapter/section002.js';
import { QA003 } from './chapter/section003.js';
import { QA004 } from './chapter/section004.js';
import { QA005 } from './chapter/section005.js';
import { QA006 } from './chapter/section006.js';
import { QA007 } from './chapter/section007.js';
import { QA008 } from './chapter/section008.js';
import { QA009 } from './chapter/section009.js';
import { QA010 } from './chapter/section010.js';
import { QA011 } from './chapter/section011.js';
import { QA012 } from './chapter/section012.js';
import { QA013 } from './chapter/section013.js';
import { QA014 } from './chapter/section014.js';
import { QA015 } from './chapter/section015.js';
import { QA016 } from './chapter/section016.js';
import { QA017 } from './chapter/section017.js';
import { QA018 } from './chapter/section018.js';
import { QA019 } from './chapter/section019.js';
import { QA020 } from './chapter/section020.js';
import { QA021 } from './chapter/section021.js';
import { QA022 } from './chapter/section022.js';
import { QA023 } from './chapter/section023.js';
import { QA024 } from './chapter/section024.js';
import { QA025 } from './chapter/section025.js';
import { QA026 } from './chapter/section026.js';
import { QA027 } from './chapter/section027.js';
import { QA028 } from './chapter/section028.js';
import { QA029 } from './chapter/section029.js';
import { QA030 } from './chapter/section030.js';
import { QA031, QA032, QA033, QA034, QA035, QA036 } from './chapter/section031-043.js';

export default function createQuiz(number) {
  const qBox = document.createElement('div');
  const aBox = document.createElement('div');
  const cBox = document.createElement('div');
  
  qBox.className = 'QBox';
  aBox.className = 'ABox';
  cBox.className = 'CBox';
  
  const questionHTML = document.createElement('p');
  questionHTML.className = 'question';
  qBox.appendChild(questionHTML);

  const answerHTML = document.createElement('input');
  answerHTML.className = 'answer';
  aBox.appendChild(answerHTML);

  const button1 = document.createElement('button');
  button1.className = 'checkButton';
  button1.innerText = "채점하기";

  const button2 = document.createElement('button');
  button2.className = 'closeButton';
  button2.innerText = "종료하기";

  cBox.append(button1, button2);

  document.querySelector('body').append(qBox, aBox, cBox);

  let answer = "";
  let quizNum = 0;

  const qList = [QA001, QA002, QA003, QA004, QA005, QA006, QA007, QA008, QA009, QA010, QA011, QA012, QA013, QA014, QA015, QA016, QA017, QA018,
    QA019, QA020, QA021, QA022, QA023, QA024, QA025, QA026, QA027, QA028, QA029, QA030, QA031, QA032, QA033, QA034, QA035, QA036];
  
  let checkPart = new Array(qList.length).fill(0);
  let passQuestion = new Array(qList.length).fill(0);
  
  const createAll = () => {
    let QA = Math.floor(Math.random() * qList.length);
    let QAnum = Math.floor(Math.random() * qList[QA].length);
    quizNum = QA;
    checkPart[quizNum]++;

    questionHTML.innerText = qList[QA][QAnum][0];
    answer = qList[QA][QAnum];
  }

  const createPart = (num) => {
    if (num >= qList.length) {
      alert("아직 접근이 불가한 파트입니다.");
      window.location.reload();
      return;
    }

    let QAnum = Math.floor(Math.random() * qList[num].length);
    quizNum = num;
    checkPart[quizNum]++;

    questionHTML.innerText = qList[num][QAnum][0];
    answer = qList[num][QAnum];
  }

  const checkAnswer = () => {
    let answerText = "";
    for (var i = 1; i < answer.length; i++) {
      if (i == 1) answerText += answer[i]; else answerText += " 또는 " + answer[i];
      if (answer[i] === answerHTML.value) passQuestion[quizNum]++;
    }
    alert(answerText);
    answerHTML.value = "";

    if (number == -1) createAll(); else createPart(number);
  }

  if (number == -1) createAll(); else createPart(number);

  answerHTML.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      checkAnswer();
    }
  });

  button1.addEventListener("click", function() {
      checkAnswer();
  });

  button2.addEventListener("click", function() {
    qBox.remove();
    aBox.remove();
    cBox.remove();

    const resultBox = document.createElement('div');
    const returnHome = document.createElement('div');
    
    returnHome.className = 'returnHome';
    resultBox.className = 'resultBox';

    returnHome.innerText = '처음 화면으로 돌아가기';

    document.querySelector('body').append(returnHome, resultBox);

    if (number == -1) {
      let text = "";
      for (var i = 0; i < checkPart.length; i++) {
        text += `${i}차 ${checkPart[i]} 문제 중 ${passQuestion[i]} 문제 정답\n`;
      }

      resultBox.innerText = text;
    } else {
      resultBox.innerText = `${number}차 ${checkPart[number]} 문제 중 ${passQuestion[number]} 문제 정답`;
    }
  });
}
