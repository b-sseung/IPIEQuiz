import createQuiz from "./createQuiz.js";

const selectList = document.createElement('select');
const sectionTitle = ["운영체제의 개념", "운영체제의 종류", "운영체제 기본 명령어", "데이터베이스 개요", "데이터베이스 설계", "E-R(개체-관계) 모델",
  "관계형 데이터베이스의 구조 / 관계형 데이터 모델", "트랜잭션 분석 / CRUD 분석", "인터넷", "OSI 참조 모델", "네트워크 관련 장비", "TCP/IP", 
  "스위치", "경로 제어/ 트래픽 제어", "개발 환경 구축", "개발 지원 도구", "서버 개발", "네트워크 관련 신기술", "SW 관련 신기술", "HW 관련 신기술",
  "DB 관련 신기술 / 용어", "사용자 인터페이스", "사용성 테스트", "UI 테스트 기법의 종류", "UI 테스트 결과 보고", "품질 요구사항", "UI 표준 및 지침",
  "UI 설계 도구", "UI 설계", "HCI / UX / 감성공학"];

function createSelectList () {
  for (var i = 0; i < 63; i++) { 
    const selectOption = document.createElement('option');
    selectOption.value = i;
    selectOption.text = (i+1) + "차 : " + sectionTitle[i];
    selectList.appendChild(selectOption);
  }

  document.querySelector('.sListBox').appendChild(selectList);
  selectList.style.display = "none";
}

createSelectList();

const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');

radio1.addEventListener('change', function() {
  if (radio1.checked) {
    selectList.style.display = "none";
  }
});
radio2.addEventListener('change', function() {
  if (radio2.checked) {
    selectList.style.display = "inline-block";
  }
});

const button = document.querySelector('.startButton');
button.addEventListener('click', function(){
  document.querySelector('.startTest').remove();
  if (radio1.checked) {
    new createQuiz(-1);
  } else {
    new createQuiz(selectList.value);
  }
});