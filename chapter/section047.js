export const QA047 = [
  ["SELECT문의 일반 형식은 \nSELECT [(\0\0\0)] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 검색할 튜플 수를 제한하는 명령어를 기술할 때 쓰는 단어는?", "PREDICATE"],
  ["SELECT문의 일반 형식은 \nSELECT [(\0\0\0)] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 중복된 튜플이 있으면 그 중 첫 번째 한 개만 표시한다는 단어는?", "DISTINCT"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [(\0\0\0) 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 속성이나 연산의 이름을 다른 이름으로 표시하기 위해 사용하는 단어는?", "AS"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \n(\0\0\0) 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 검색할 데이터가 들어있는 테이블 이름을 기술하는 단어는?", "FROM"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[(\0\0\0) 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 검색할 조건을 기술할 때 쓰는 단어는?",  "WHERE"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[(\0\0\0) 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 데이터를 정렬하여 검색할 때 사용하는 단어는?", "ORDER BY"],
  ["대표 문자를 이용해 지정된 속성의 값이 문자 패턴과 일치하는 튜플을 검색하기 위해 사용되는 연산자는?", "LIKE", "LIKE 연산자"],
  ["LIKE 연산자의 대표 문자 중 모든 문자를 대표하는 문자는?", "%"],
  ["LIKE 연산자의 대표 문자 중 문자 하나를 대표하는 문자는?", "_"],
  ["LIKE 연산자의 대표 문자 중 숫자 하나를 대표하는 문자는?", "#"],
  ["조건절에 주어진 질의를 먼저 수행하여 그 검색 결과를 조건절의 피연산자로 사용하는 질의는?", "하위 질의"],
  ["NULL이 아닌 값을 검색할 때 쓰는 에약어", "IS NOT NULL"],
  ["하위 질의로 검색된 결과가 존재하는지 확인할 때 사용하는 예약어", "EXISTS"]
];