import { QA001, QA002, QA003, QA004, QA005, QA006, QA007, QA008, QA009, QA010 } from './chapter/section001-010.js';
import { QA011, QA012, QA013, QA014, QA015, QA016, QA017, QA018, QA019, QA020, QA021 } from './chapter/section011-021.js';
import { QA022, QA023, QA024, QA025, QA026 } from './chapter/section022-026.js';
import { QA027, QA028, QA029, QA030 } from './chapter/section027-030.js';
import { QA031, QA032, QA033, QA034, QA035, QA036, QA037, QA038, QA039, QA040, QA041, QA042, QA043 } from './chapter/section031-043.js';
import { QA044, QA045, QA046, QA047, QA048,  QA049, QA050 } from './chapter/section044-050.js';
import { QA051, QA052, QA053, QA054, QA055, QA056, QA057, QA058, QA059 } from './chapter/section051-059.js';
import { QA060, QA061, QA062, QA063 } from './chapter/section060-063.js';

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
  const answerText = document.createElement('div');
  answerText.innerText = '정답 : ';
  answerText.className = 'answerText';
  answerHTML.className = 'answer';
  aBox.append(answerText, answerHTML);

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
    QA019, QA020, QA021, QA022, QA023, QA024, QA025, QA026, QA027, QA028, QA029, QA030, QA031, QA032, QA033, QA034, QA035, QA036, QA037, QA038,
    QA039, QA040, QA041, QA042, QA043, QA044, QA045, QA046, QA047, QA048,  QA049, QA050, QA051, QA052, QA053, QA054, QA055, QA056, QA057, QA058,
    QA059, QA060, QA061, QA062, QA063];
  
  const a_part = [5, 7, 8, 10, 12, 18, 19, 21, 32, 33, 35, 36, 37, 38, 44, 45, 46, 47, 48, 53, 54, 55, 0];
  let checkPart = new Array(qList.length).fill(0);
  let passQuestion = new Array(qList.length).fill(0);
  
  const createAll = () => {
    // let QA = Math.floor(Math.random() * qList.length);
    // let QAnum = Math.floor(Math.random() * qList[QA].length);
    // quizNum = QA;
    // checkPart[quizNum]++;

    // questionHTML.innerText = qList[QA][QAnum][0];
    // answer = qList[QA][QAnum];

    let partNum = Math.floor(Math.random() * a_part.length);
    
    if (partNum === 0) {
      let QA = Math.floor(Math.random() * qList.length);
      let QAnum = Math.floor(Math.random() * qList[QA].length);
      quizNum = QA;
      checkPart[quizNum]++;
  
      questionHTML.innerText = qList[QA][QAnum][0];
      answer = qList[QA][QAnum];
  } else {
      let QAnum = Math.floor(Math.random() * qList[a_part[partNum]-1].length);
      quizNum = a_part[partNum]-1;
      checkPart[quizNum]++;

      questionHTML.innerText = qList[quizNum][QAnum][0];
      answer = qList[quizNum][QAnum];
  }

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
    }

    for (var i = 1; i < answer.length; i++) {
      var str = answer[i].replace(" ", "");
      if (answer[i] === answerHTML.value || str === answerHTML.value) {
        passQuestion[quizNum]++;
        brerak;
      }
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
    const finalResult = document.createElement('div');
    const moreText = document.createElement('div');

    returnHome.className = 'returnHome';
    resultBox.className = 'resultBox';
    finalResult.className = 'finalResult';
    moreText.className = 'moreText';

    returnHome.innerText = '처음 화면으로 돌아가기';
    moreText.innerText = '▼ 더보기'
    
    document.querySelector('body').append(returnHome, finalResult, moreText, resultBox);

    let allCount = 0;
    let passCount = 0;
    let moreValue = true;
    if (number == -1) {
      checkPart[quizNum]--;

      let text = "";
      for (var i = 0; i < checkPart.length; i++) {
        if (checkPart[i] != 0) text += `${i}차 ${checkPart[i]} 문제 중 ${passQuestion[i]} 문제 정답\n`;
        allCount += checkPart[i];
        passCount += passQuestion[i];
      }
      resultBox.innerText = text === '' ? '푼 문제가 없습니다' : 
      text;
      finalResult.innerText = `총 ${allCount} 문제 중 ${passCount} 문제 정답`;
      resultBox.style.display = 'none';
  } else {
      moreText.style.display = 'none';
      finalResult.style.display = 'none';
      resultBox.innerText = `${number}차 ${checkPart[number]} 문제 중 ${passQuestion[number]} 문제 정답`;
    }


    moreText.addEventListener("click", function() {
      if (moreValue) {
        moreText.innerText = '▲ 더보기';
        resultBox.style.display = 'flex';
        moreValue = false;
      } else {
        moreText.innerText = '▼ 더보기'
        resultBox.style.display = 'none';
        moreValue = true;
      }
    });

    returnHome.addEventListener("click", function() {
      window.location.reload();
    });
  });
}