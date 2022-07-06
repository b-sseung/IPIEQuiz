export const QA048 = [
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 튜플 수를 구하는 함수는?", "COUNT"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 합계를 구하는 함수는?", "SUM"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 평균을 구하는 함수는?", "AGE"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 최대값을 구하는 함수는?", "MAX"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 최소값을 구하는 함수는?", "MIN"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 표준편차를 구하는 함수는?", "STDDEV"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 분산을 구하는 함수는?", "VARIANCE"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 소계 구하는 함수이자 하위 레벨에서 상위 레벨 순으로 데이터가 집계되는 함수는?", "ROLLUP"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, (\0\0\0)(속성명) [AS 별칭]] \n[, Windows함수 OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 GROUP BY절에 지정된 그룹별 소계 구하는 함수이자 상위 레벨에서 하위 레벨 순으로 데이터가 집계되는 함수는?", "CUBE"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, (\0\0\0) OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 윈도우별로 각 레코드에 대한 일련번호를 반환하는 WINDOW 함수는?", "ROW NUMBER()"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, (\0\0\0) OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 윈도우별로 순위를 반환하며, 공동 순위를 반영하는 WINDOW 함수는?", "RANK()"],
  ["SELECT문의 일반 형식은 \nSELECT [PREDICATE] [테이블명.]속성명 [AS 별칭][, [테이블명.]속성명, ...] \n[, 그룹함수(속성명) [AS 별칭]] \n[, (\0\0\0) OVER (PARTITION BY 속성명1, 속성명2, ... \n\0\0\0ORDER BY 속성명3, 속성명4, ...)] \nFROM 테이블명[, 테이블명, ...] \n[WHERE 조건] \n[GROUP BY 속성명, 속성명, ...] \n[HAVING 조건] \n[ORDER BY 속성명 [ASC | DESC]]; 이다. 괄호 안에 들어갈 윈도우별로 순위를 반환하며, 공동 순위를 무시하고 순위를 부여하는 함수는?", "DENSE_RANK()"],
  ["집합 연산자를 사용하여 2개 이상의 테이블의 데이터를 하나로 통합하는 질의", "통합 질의"],
  ["통합 질의의 표기 형식은 \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n(\0\0\0) \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 두 SELECT문의 조회 결과를 통합하고, 중복된 행은 한 번만 출력하는 집합 연산자는?", "UNION"],
  ["통합 질의의 표기 형식은 \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n(\0\0\0) \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 두 SELECT문의 조회 결과를 통합하고, 중복된 행도 모두 그대로 출력하는 집합 연산자는?", "UNION ALL"],
  ["통합 질의의 표기 형식은 \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n(\0\0\0) \nSELECT 속성명1, 속성명2, ... \nFROM 테이블명 \n[ORDER BY 속성명 [ASC | DESC]]; 이다. \n괄호 안에 들어갈 두 SELECT문의 조회 결과 중 공통된 행만 출력하는 집합 연산자는?", "INTERSECT"]
];