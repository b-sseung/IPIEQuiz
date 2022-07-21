export const QA051 = [
  ["애플리케이션에 잠재되어 있는 결함을 찾아내는 일련의 행위 또는 절차로, 개발된 소프트웨어가 고객의 요구사항을 만족시키는지 확인(Validation)하고 소프트웨어가 기능을 정확히 수행하는지 검증(Verification)하는 것", "애플리케이션 테스트"],
  ["사용자의 입장에서 개발한 소프트웨어가 고객의 요구사항에 맞게 구현되었는지를 확인하는 것", "확인", "Validation"],
  ["개발자의 입장에서 개발한 소프트웨어가 명세서에 맞게 만들어졌는지를 점검하는 것", "검증", "Verification"],
  ["애플리케이션 테스트의 기본 원리 중 소프트웨어의 잠재적인 결함을 줄일 수 있지만 소프트웨어에 결함이 없다고 증명할 수는 없다는 원리", "완벽한 테스트 불가능"],
  ["애플리케이션 테스트의 기본 원리 중 애플리케이션의 20%에 해당하는 코드에서 전체 결함의 80%가 발견된다는 법칙", "파레토 법칙", "Pareto Principle"],
  ["애플리케이션 테스트의 기본 원리 중 동일한 테스트 케이스로 동일한 테스트를 반복하면 더 이상 결함이 발견되지 않는 현상", "살충제 패러독스", "Pesticide Paradox"],
  ["애플리케이션 테스트의 기본 원리 중 소프트웨어의 특징, 테스트 환경, 테스터의 역량 등 정황(Context)에 따라 테스트 결과가 달라질 수 있으므로, 정황에 따라 테스트를 다르게 수행해야 한다는 원리", "테스팅은 정황(Context) 의존"],
  ["애플리케이션 테스트의 기본 원리 중 소프트웨어 결함을 모두 제거해도 사용자의 요구사항을 만족시키지 못하면 해당 소프트웨어는 품질이 높다고 말할 수 없다는 원리", "오류-부재의 궤변", "Absence of Errors Fallacy"],
  ["애플리케이션 테스트의 기본 원리 중 테스트를 많이 하면 할수록 미래에 발생할 위험을 줄일 수 있다는 원리", "테스트와 위험은 반비례"],
  ["애플리케이션 테스트의 기본 원리 중 테스트는 작은 부분에서 시작하여 점점 확대하며 진행해야 한다는 원리", "테스트의 점진적 확대"],
  ["애플리케이션 테스트의 기본 원리 중 테스트는 개발자와 관계없는 별도의 팀에서 수행해야 한다는 원리", "테스트의 별도 팀 수행"]
];

export const QA052 = [
  ["프로그램을 실행하지 않고 명세서나 소스 코드를 대상으로 분석하는 테스트", "정적 테스트"],
  ["소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도, 남은 결함 등을 발견하기 위해 사용하며, 워크스루, 인스펙션, 코드 검사 등이 해당됨", "정적 테스트"],
  ["프로그램을 실행하여 오류를 찾는 테스트로, 소프트웨어 개발의 모든 단계에서 테스트를 수행하며, 블랙박스 테스트, 화이트박스 테스트 등이 해당됨", "동적 테스트"],
  ["소프트웨어 개발자가 모집한 전문가들이 개발자의 작업 내역을 검토하는 것을 말하며 오류의 조기 검출을 목적으로 하며 발견된 오류는 문서화하는 것", "워크스루", "검토 회의", "Walkthrough"],
  ["워크스루를 발전시킨 형태로, 소프트웨어 개발 단계에서 산출된 결과물의 품질을 평가하고, 이를 개선하기 위한 방법을 제시하는 것", "인스펙션", "Inspection"],
  ["사용자의 요구사항에 대한 명세를 빠짐없이 테스트 케이스로 만들어 구현하고 있는지 확인하는 테스트로, 동등 분할, 경계 값 분석 등이 이 테스트에 해당됨", "명세 기반 테스트"],
  ["소프트웨어 내부의 논리 흐름에 따라 테스트 케이스를 작성하고 확인하는 테스트로, 구문 기반, 결정 기반, 조건 기반 등이 이 테스트에 해당됨", "구조 기반 테스트"],
  ["유사 소프트웨어나 기술 등에 대한 테스터의 경험을 기반으로 수행하는 테스트로 사용자의 요구사항에 대한 명세가 불충분하거나 테스트 시간에 제약이 있는 경우 수행하면 효과적이며, 에러 추정, 체크 리스트, 탐색적 테스팅이 이 테스트에 해당됨", "경험 기반 테스트"],
  ["개발자의 시각에서 제품의 생산 과정을 테스트하는 것으로 제품이 명세서대로 완성됐는지를 테스트함", "검증 테스트", "Verification Test"],
  ["사용자의 시각에서 제품의 결과를 테스트하는 것으로 사용자가 요구한대로 제품이 완성됐는지, 제품이 정상적으로 동작하는지를 테스트함", "확인 테스트", "Validation Test"],
  ["시스템에 여러 가지 결함을 주어 실패하도록 한 후 올바르게 복구되는지를 확인하는 테스트", "회복 테스트", "Recovery Test"],
  ["시스템에 설치된 시스템 보호 도구가 불법적인 침입으로부터 시스템을 보호할 수 있는지를 확인하는 테스트", "안전 테스트", "Security Test"],
  ["시스템에 과도한 정보량이나 빈도 등을 부과하여 과부하 시에도 소프트웨어가 정상적으로 실행되는지를 확인하는 테스트", "강도 테스트", "Stress Test"],
  ["소프트웨어의 실시간 성능이나 전체적인 효율성을 진단하는 테스트로, 소프트웨어의 응답 시간, 처리량 등을 테스트", "성능 테스트", "Performance Test"],
  ["소프트웨어 내부의 논리적인 경로, 소스 코드의 복잡도 등을 평가하는 테스트", "구조 테스트", "Structure Test"],
  ["소프트웨어의 변경 또는 수정된 코드에 새로운 결함이 없음을 확인하는 테스트", "회귀 테스트", "Regression Test"],
  ["변경된 소프트웨어와 기존 소프트웨어에 동일한 데이터를 입력하여 결과를 비교하는 테스트", "병행 테스트", "Parallel Test"]
];

export const QA053 = [
  ["모듈의 원시 코드를 오픈시킨 상태에서 원시 코드의 논리적인 모든 경로를 테스트하여 테스트 케이스를 설계하는 방법으로, 모듈 안의 작동을 직접 관찰하고, 원시 코드(모듈)의 모든 문장을 한 번 이상 실행함으로써 수행되는 테스트", "화이트박스 테스트", "White Box Test"],
  ["테스트 케이스 설계자가 직접 절차적 설계의 논리적 복잡성을 측정할 수 있게 해주는 테스트 기법으로 대표적인 화이트박스 테스트 기법임", "기초 경로 검사", "Base Path Testing"],
  ["화이트박스 테스트의 종류 중 조건 검사(Condition Testing), 루프 검사(Loop Testing), 데이터 흐름 검사(Data Flow Testing)로 나누어지는 검사", "제어 구조 검사", "Control Structure Testing"],
  ["프로그램 모듈 내에 있는 논리적 조건을 테스트하는 테스트 케이스 설계 기법", "조건 검사", "Condition Testing"],
  ["프로그램의 반복(Loop) 구조에 초점을 맞춰 실시하는 테스트 케이스 설계 기법", "루프 검사", "Loop Testing"],
  ["프로그램에서 변수의 정의와 변수의 사용의 위치에 초점을 맞춰 실시하는 테스트 케이스 설계 기법", "데이터 흐름 검사", "Data Flow Testing"],
  ["화이트박스 테스트의 검증 기준 중 소스 코드의 모든 구문이 한 번 이상 수행되도록 테스트 케이스를 설계해야 한다는 기준", "문장 검증 기준", "Statement Coverage"],
  ["화이트박스 테스트의 검증 기준 중 소스 코드의 모든 조건문에 대해 조건식의 결과가 True인 경우와 False인 경우가 한 번 이상 수행되도록 테스트 케이스를 설계하는 기법으로 결정 검증 기준(Decision Coverage)라고도 함", "분기 검증 기준", "Branch Coverage"],
  ["화이트박스 테스트의 검증 기준 중 소스 코드의 조건문에 포함된 개별 조건식의 결과가 True인 경우와 False인 경우가 한 번 이상 수행되도록 테스트 케이스를 설계하는 기법", "조건 검증 기준", "Condition Coverage"],
  ["화이트박스 테스트의 검증 기준 중 분기 검증 기준과 조건 검증 기준을 모두 만족하는 설계로, 조건문이 True인 경우와 False인 경우에 따라 조건 검증 기준의 입력 데이터를 구분하는 테스트 케이스를 설계하는 기준", "분기/조건 검증 기준", "Branch/Condition Coverage"],
  ["소프트웨어가 수행할 특정 기능을 알기 위해서 각 기능이 완전히 작동되는 것을 입증하는 테스트로, 기능 테스트라고도 함", "블랙박스 테스트", "Black Box Test"],
  ["사용자의 요구사항 명세를 보면서 테스트하며, 주로 구현된 기능을 테스트하고, 소프트웨어 인터페이스를 통해 실시되는 테스트", "블랙박스 테스트", "Black Box Test"],
  ["블랙박스 테스트의 종류 중 프로그램의 입력 조건에 타당한 입력 자료와 타당하지 않은 입력 자료의 개수를 균등하게 하여 테스트 케이스를 정하고, 해당 입력 자료에 맞는 결과가 출력되는지 확인하는 기법으로, 동등 분할 기법이라고도 함", "동치 분할 검사", "동치 클래스 분해", "Equivalence Partitioning Testing"],
  ["블랙박스 테스트의 종류 중 입력 조건의 중간값보다 경계값에서 오류가 발생될 확률이 높다는 점을 이용하여 입력 조건의 경계값을 테스트 케이스로 선정하여 검사하는 기법", "경계값 분석", "Boundary Value Analysis"],
  ["블랙박스 테스트의 종류 중 입력 데이터 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석한 다음 효용성이 높은 테스트 케이스를 선정하여 검사하는 기법", "원인-효과 그래프 검사", "Cause-Effect Graphing Testing"],
  ["블랙박스 테스트의 종류 중 과거의 경험이나 확인자의 감각으로 테스트하는 기법", "오류 예측 검사", "Error Guessing"],
  ["블랙박스 테스트의 종류 중 여러 버전의 프로그램에 동일한 테스트 자료를 제공하여 동일한 결과가 출력되는지 테스트하는 기법", "비교 검사", "Comparison Testing"]
];

export const QA054 = [
  ["소프트웨어의 개발 단계에 따라 단위 테스트, 통합 테스트, 시스템 테스트, 인수 테스트로 분류된 것", "테스트 레벨"],
  ["애플리케이션 테스트(요구사항 > 분석 > 설계 > 구현)와 소프트웨어 개발 단계(단위 테스트 > 통합 테스트 > 시스템 테스트 > 인수 테스트)를 연결하여 표현한 것", "V-모델"],
  ["코딩 직후 소프트웨어 설계의 최소 단위인 모듈이나 컴포넌트에 초점을 맞춰 테스트하는 것으로, 사용자의 요구사항을 기반으로 한 기능성 테스트를 최우선으로 수행하는 것", "단위 테스트", "Unit Test"],
  ["개발 단계에 따른 애플리케이션 테스트 중 인터페이스, 외부적 I/O, 자료 구조, 독립적 기초 경로, 오류 처리 경로, 경계 조건 등을 검사하는 테스트로, 구조 기반 테스트와 명세 기반 테스트로 나뉘지만 주로 구조 기반 테스트를 시행하는 테스트", "단위 테스트", "Unit Test"],
  ["단위 테스트가 완료된 모듈들을 결합하여 하나의 시스템으로 완성시키는 과정에서의 테스트를 의미하며, 모듈 간 또는 통합된 컴포넌트 간의 상호 작용 오류를 검사함", "통합 테스트", "Integration Test"],
  ["개발된 소프트웨어가 해당 컴퓨터 시스템에서 완벽하게 수행되는가를 점검하는 테스트로 기능적 요구사항과 비기능적 요구사항으로 구분하여 각각을 만족하는지 테스트함", "시스템 테스트", "System Test"],
  ["개발한 소프트웨어가 사용자의 요구사항을 충족하는지에 중점을 두고 테스트하는 방법으로 개발한 소프트웨어를 사용자가 직접 테스트하는 것", "인수 테스트", "Acceptance Test"],
  ["인수 테스트 중 사용자가 시스템 사용의 적절성 여부를 확인하는 테스트", "사용자 인수 테스트"],
  ["인수 테스트 중 시스템 관리자가 시스템 인수 시 수행하는 테스트 기법으로 백업/복원 시스템, 재난 복구, 사용자 관리, 정기 점검 등을 확인함", "운영상의 인수 테스트"],
  ["인수 테스트 중 계약상의 인수/검수 조건을 준수하는지 여부를 확인하는 테스트", "계약 인수 테스트"],
  ["인수 테스트 중 소프트웨어가 정부 지침, 법규, 규정 등 규정에 맞게 개발 되었는지 확인하는 테스트", "규정 인수 테스트"],
  ["인수 테스트 중 개발자의 장소에서 사용자가 개발자 앞에서 행하는 테스트 기법으로 통제된 환경에서 행해지며, 오류와 사용상의 문제점을 사용자와 개발자가 함께 확인하면서 기록하는 테스트", "알파 테스트"],
  ["인수 테스트 중 선정된 최종 사용자가 여러 명의 사용자 앞에서 행하는 테스트 기법으로 실업무를 가지고 사용자가 직접 테스트하는 것", "베타 테스트"]
];

export const QA055 = [
  ["단위 테스트가 끝난 모듈을 통합하는 과정에서 발생하는 오류 및 결함을 찾는 테스트 기법", "통합 테스트", "Integration Test"],
  ["통합 테스트의 방식 중 단계적으로 통합하는 절차 없이 모든 모듈이 미리 결합되어 있는 프로그램 전체를 테스트를 하는 방법으로 빅뱅 통합 테스트 방식이 여기에 해당된다.", "비점진적 통합 방식"],
  ["모듈 간의 상호 인터페이스를 고려하지 않고 단위 테스트가 끝난 모듈을 한꺼번에 결합시켜 테스트하는 방법으로 주로 소규모 프로그램이나 프로그램의 일부만을 대상으로 테스트 할 때 사용됨", "빅뱅 통합 테스트"],
  ["통합 테스트의 방식 중 모듈 단위로 단계적으로 통합하면서 테스트하는 방법으로 하향식 통합 테스트, 상향식 통합 테스트, 혼합식 통합 테스트가 여기에 해당된다.", "점진적 통합 방식"],
  ["프로그램의 상위 모듈에서 하위 모듈 방향으로 통합하면서 테스트하는 기법으로 깊이 우선 통합법이나 넓이 우선 통합법을 사용함", "하향식 통합 테스트", "Top Down Integration Test"],
  ["주요 제어 모듈을 중심으로 해당 모듈에 종속된 모든 모듈을 통합하는 것으로 하향식 통합 테스트 기법 중 하나이다.", "깊이 우선 통합법"],
  ["구조의 수평을 중심으로 해당하는 모듈을 통합하는 것으로 하향식 통합 기법 중 하나이다.", "넓이 우선 통합법"],
  ["주요 제어 모듈은 작성된 프로그램을 사용하고 주요 제어 모듈의 종속 모듈은 스텁(Stub)으로 대체 > 통합 방식에 따라 스텁들의 한 번에 하나씩 실제 모듈로 교체 > 모듈이 통합될 때마다 테스트 실시 > 회귀 테스트 실시\n이 절차는 어떤 통합 테스트에 대한 설명인가", "하향식 통합 테스트", "Top Down Integration Test"],
  ["제어 모듈이 호출하는 타 모듈의 기능을 단순히 수행하는 도구로, 하향식 통합에 있어서 모듈 간의 통합 시험을 위해 일시적으로 필요한 조건만을 가지고 있는 시험용 모듈", "스텁", "Stub"],
  ["프로그램의 하위 모듈에서 상위 모듈 방향으로 통합하면서 테스트하는 기법", "상향식 통합 테스트", "Bottom Up Integration Test"],
  ["하위 모듈들을 클러스터(Cluster)로 결합 > 데이터의 입출력을 확인하기 위해 더미 모듈인 드라이버(Driver)를 작성 > 클러스터 단위로 테스트 > 테스트가 완료되면 클러스터는 결합하고, 드라이버는 실제 모듈로 대체\n이 절차는 어떤 통합 테스트에 대한 설명인가", "상향식 통합 테스트", "Bottom Up Integration Test"],
  ["하나의 주요 제어 모듈과 관련된 종속 모듈의 그룹을 의미하며 상향식 통합 테스트에서 하위 모듈들을 결합하는 것", "클러스터", "Cluster"],
  ["테스트 대상의 하위 모듈을 호출하고, 파라미터를 전달하고, 모듈 테스트 수행 후의 결과를 도출하는 도구이자 상위 모듈에서 더미 모듈에 해당하는 것", "드라이버", "Driver"],
  ["하위 수준에서는 상향식 통합, 상위 수준에서는 하향식 통합을 사용하여 최적의 테스트를 지원하는 방식으로 샌드위치(Sandwich)식 통합 테스트 방법이라고도 함", "혼합식 통합 테스트"],
  ["통합 테스트로 인해 변경된 모듈이나 컴포넌트에 새로운 오류가 있는지 확인하는 테스트로 이미 테스트된 프로그램의 테스팅을 반복하는 것", "회귀 테스트", "Regression Testing"],
  ["수정한 모듈이나 컴포넌트가 다른 부분에 영향을 미치는지, 오류가 생기지 않았는지 테스트하여 새로운 오류가 발생하지 않음을 보증하기 위해 반복 테스트하는 것", "회귀 테스트", "Regression Testing"]
];

export const QA056 = [
  ["소프트웨어가 사용자의 요구사항을 정확하게 준수했는지를 확인하기 위한 테스트 항목에 대한 명세서로 이것을 이용하지 않은 테스트는 특정 요소에 대한 검증이 누락되거나 불필요한 검증의 반복으로 인해 인력과 시간을 낭비할 수 있음", "테스트 케이스", "Test Case"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 항목 식별자, 일련번호에 해당하는 것", "식별자", "Identifier"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 테스트 대상(모듈 또는 기능)에 해당하는 것", "테스트 항목", "Test Item"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 입력 데이터 또는 테스트 조건에 해당하는 것", "입력 명세", "Input Specification"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 테스트 케이스 수행 시 예상되는 출력 결과", "출력 명세", "Output Specification"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 필요한 하드웨어나 소프트웨어의 환경", "환경 설정", "Environmental Needs"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 테스트 케이스 수행 시 특별히 요구되는 절차", "특수 절차 요구", "Special Procedure Requirement"],
  ["ISO/IEC/IEEE 29119-3 표준에 따른 테스트 케이스의 구성 요소 중 테스트 케이스 간의 의존성", "의존성 기술", "Inter-case Dependencies"],
  ["테스트 케이스를 적용하는 순서에 따라 여러 개의 테스트 케이스를 묶은 집합으로 테스트 케이스를 적용하는 구체적인 절차를 명세하고, 테스트 순서에 대한 구체적인 절차, 사전 조건, 입력 데이터 등이 설정되어 있음", "테스트 시나리오", "Test Scenario"],
  ["테스트 결과가 올바른지 판단하기 위해 사전에 정의된 참 값을 대입하여 비교하는 기법 및 활동을 말하며 결과를 판단하기 위해 테스트 케이스에 대한 예상 결과를 계산하거나 확인함", "테스트 오라클", "Test Oracle"],
  ["테스트 오라클의 특징 중 테스트 오라클을 모든 테스트 케이스에 적용할 수 없다는 특징", "제한된 검증"],
  ["테스트 오라클의 특징 중 테스트 오라클의 값을 수학적 기법을 이용하여 구할 수 있다는 특징", "수학적 기법"],
  ["테스트 오라클의 특징 중 테스트 대상 프로그램의 실행, 결과 비교, 커버리지 측정 등을 자동화 할 수 있다는 특징", "자동화 기능"],
  ["테스트 오라클의 종류 중 모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클로, 발생된 모든 오류를 검출할 수 있는 오라클", "참 오라클", "True Oracle"],
  ["테스트 오라클의 종류 중 특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클로 전수 테스트가 불가능한 경우 사용하는 오라클", "샘플링 오라클", "Sampling Oracle"],
  ["테스트 오라클의 종류 중 특정 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 나머지 입력 값들에 대해서는 추정으로 처리하는 오라클", "추정 오라클", "Heuristic Oracle"],
  ["테스트 오라클의 종류 중 애플리케이션에 변경이 있을 때, 테스트 케이스의 수행 전과 후의 결과 값이 동일한지를 확인하는 오라클", "일관성 검사 오라클", "Consistent Oracle"]
];

export const QA057 = [
  ["사람이 반복적으로 수행하던 테스트 절차를 스크립트 형태로 구현하는 자동화 도구를 적용함으로써 쉽고 효율적으로 테스트를 수행할 수 있도록 한 것으로 정적 분석 도구, 테스트 실행 도구, 성능 테스트 도구, 테스트 통제 도구가 여기에 해당한다.", "테스트 자동화"],
  ["프로그램을 실행하지 않고 분석하는 도구로 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함 등을 발견하기 위해 사용됨", "정적 분석 도구", "Static Analysis Tools"],
  ["스크립트 언어를 사용하여 테스트를 실행하는 도구로 테스트 데이터와 테스트 수행 방법 등이 포함된 스크립트를 작성한 후에 실행하며, 데이터 주도 접근 방식과 키워드 주도 접근 방식이 있다.", "테스트 실행 도구", "Test Execution Tools"],
  ["테스트 실행 도구 중 스프레드시트에 테스트 데이터를 저장하고, 이를 읽어 실행하는 방식", "데이터 주도 접근 방식"],
  ["테스트 실행 도구 중 스프레드시트에 테스트를 수행할 동작을 나타내는 키워드와 테스트 데이터를 저장하여 실행하는 방식", "키워드 주도 접근 방식"],
  ["애플리케이션의 처리량, 응답 시간, 경과 시간, 자원 사용률 등을 인위적으로 적용한 가상의 사용자를 만들어 테스트를 수행함으로써 성능의 목표 달성 여부를 확인하는 도구", "성능 테스트 도구", "Performance Test Tools"],
  ["테스트 계획 및 관리, 테스트 수행, 결함 관리 등을 수행하는 도구로 형상 관리 도구, 결함 추적/관리 도구 등이 여기에 해당한다.", "테스트 통제 도구", "Test Control Tools"],
  ["테스트 수행에 필요한 다양한 도구 및 데이터를 관리하는 도구", "형상 관리 도구"],
  ["테스트가 실행될 환경을 시물레이션 하여 컴포넌트 및 모듈이 정상적으로 테스트되도록 하는 도구", "테스트 하네스 도구", "Test Harness Tools"],
  ["애플리케이션의 컴포넌트 및 모듈을 테스트하는 환경의 일부분으로, 테스트를 지원하기 위해 생성된 코드와 데이터를 의미함", "테스트 하네스", "Test Harness"],
  ["테스트 하네스의 구성 요소 중 테스트 대상의 하위 모듈을 호출하고, 파라미터를 전달하고, 모듈 테스트 수행 후의 결과를 도출하는 도구", "테스트 드라이버", "Test Driver"],
  ["테스트 하네스의 구성 요소 중 제어 모듈이 호출하는 타 모듈의 기능을 단순히 수행하는 도구로, 일시적으로 필요한 조건만을 가지고 있는 테스트용 모듈", "테스트 스텁", "Test Stub"],
  ["테스트 하네스의 구성 요소 중 테스트 대상 컴포넌트나 모듈, 시스템에 사용되는 테스트 케이스의 단순한 집합", "테스트 슈트", "Test Suites"],
  ["테스트 하네스의 구성 요소 중 사용자의 요구사항을 정확하게 준수했는지 확인하기 위한 입력 값, 실행 조건, 기대 결과 등으로 만들어진 테스트 항목의 명세서", "테스트 케이스", "Test Case"],
  ["테스트 하네스의 구성 요소 중 자동화된 테스트 실행 절차에 대한 명세서", "테스트 스크립트", "Test Script"],
  ["테스트 하네스의 구성 요소 중 사전에 사용자의 행위를 조건부로 입력해 두면, 그 상황에 맞는 예정된 행위를 수행하는 객체", "목 오브젝트", "Mock Object"],
  ["테스트 계획 단계에서 사용자의 요구사항 정의 및 변경 사항 등을 관리하는 자동화 도구", "요구사항 관리"],
  ["테스트 분석/설계 단계에서 테스트 기법에 따른 테스트 데이터 및 테스트 케이스 작성을 지원하는 도구", "테스트 케이스 생성"],
  ["테스트 수행 단계에서 테스트의 자동화를 도와주는 도구로 테스트의 효율성을 높임", "테스트 자동화"],
  ["테스트 수행 단계에서 코딩 표준, 런타임 오류 등을 검증하는 도구", "정적 분석"],
  ["테스트 수행 단계에서 대상 시스템의 시뮬레이션을 통해 오류를 검출하는 도구", "동적 분석"],
  ["테스트 수행 단계에서 가상의 사용자를 생성하여 시스템의 처리 능력을 측정하는 도구", "성능 테스트"],
  ["테스트 수행 단계에서 CPU, Memory 등과 같은 시스템 자원의 상태 확인 및 분석을 지원하는 도구", "모니터링"],
  ["테스트 관리 단계에서 테스트 완료 후 테스트의 충분성 여부 검증을 지원하는 도구", "커버리지 분석"],
  ["테스트 관리 단계에서 테스트 수행에 필요한 다양한 도구 및 데이터를 관리하는 도구", "형상 관리"],
  ["테스트 관리 단계에서 테스트 시 발생한 결함 추적 및 관리 활동을 지원하는 도구", "결함 추적/관리"]
];

export const QA058 = [
  ["오류 발생, 작동 실패 등과 같이 소프트웨어가 개발자가 설계한 것과 다르게 동작하거나 다른 결과가 발생되는 것을 의미하며, 사용자가 예상한 결과와 실행 결과 간의 차이나 업무 내용의 불일치 등으로 인해 변경이 필요한 부분도 모두 여기에 해당됨", "결함", "Fault"],
  ["(\0\0\0)의 순서는 결함 관리 계획 > 결함 기록 > 결함 검토 > 결함 수정 > 결함 재확인 > 결함 상태 추적 및 모니터링 활동 > 최종 결함 분석 및 보고서 작성 \n괄호 안에 들어갈 단어는?", "결함 관리 프로세스"],
  ["결함 관리 프로세스의 처리 순서 중 전체 프로세스에 대한 결함 관리 일정, 인력, 업무 프로세스 등을 확보하여 계획을 수립하는 단계", "결함 관리 계획"],
  ["결함 관리 프로세스의 처리 순서 중 테스터가 발견된 결함을 결함 관리 DB에 등록하는 단계", "결함 기록"],
  ["결함 관리 프로세스의 처리 순서 중 테스터, 프로그램 리더, 품질 관리(QA) 담당자 등이 등록된 결함을 검토하고 결함을 수정할 개발자에게 전달하는 단계", "결함 검토"],
  ["결함 관리 프로세스의 처리 순서 중 개발자가 전달받은 결함을 수정하는 단계", "결함 수정"],
  ["결함 관리 프로세스의 처리 순서 중 테스터가 개발자가 수정한 내용을 확인하고 다시 테스트를 수행하는 단계", "결함 재확인"],
  ["결함 관리 프로세스의 처리 순서 중 결함 관리 DB를 이용하여 프로젝트별 결함 유형, 발생률 등을 한눈에 볼 수 있는 대시보드 또는 게시판 형태의 서비스를 제공하는 단계", "결함 상태 추적 및 모니터링 활동"],
  ["결함 관리 프로세스의 처리 순서 중 발견된 결함에 대한 정보와 이해관계자들의 의견이 반영된 보고서를 작성하고 결함 관리를 종료하는 단계", "최종 결함 분석 및 보고서 작성"],
  ["결함 관리 측정 지표 중 모듈 또는 컴포넌트의 특정 소속에 해당하는 결함 수를 측정하는 지표", "결함 분포"],
  ["결함 관리 측정 지표 중 테스트 진행 시간에 따른 결함 수의 추이를 분석하는 지표", "결함 추세"],
  ["결함 관리 측정 지표 중 특정 결함 상태로 지속되는 시간을 측정하는 지표", "결함 에이징"],
  ["(\0\0\0) 순서는 결함 등록(Open) > 결함 검토(Reviewed) > 결함 할당(Assigned) > 결함 수정(Resolved) > 결함 조치 보류(Deferred) > 결함 종료(Closed) > 결함 해제(Clarified) 이다. \n 괄호 안에 들어갈 단어는?", "결함 추적"],
  ["결함 추적 순서 중 테스터와 품질 관리(QA) 담당자에 의해 발견된 결함이 등록된 상태에 해당하는 단계는?", "결함 등록", "Fault Open"],
  ["결함 추적 순서 중 등록된 결함이 테스터, 품질 관리(QA) 담당자, 프로그램 리더, 담당 모듈 개발자에 의해 검토된 상태에 해당하는 단계는?", "결함 검토", "Fault Reviewed"],
  ["결함 추적 순서 중 결함을 수정하기 위해 개발자와 문제 해결 담당자에게 결함이 해당된 상태에 해당하는 단계는?", "결함 할당", "Fault Assigned"],
  ["결함 추적 순서 중 개발자가 결함 수정을 완려한 상태에 해당하는 단계는?", "결함 수정", "Fault Resolved"],
  ["결함 추적 순서 중 결함의 수정이 불가능해 연기된 상태로, 우선순위, 일정 등에 따라 재오픈을 준비중인 상태에 해당하는 단계는?", "결함 조치 보류", "Fault Deferred"],
  ["결함 추적 순서 중 결함이 해당되어 테스터와 픔질 관리(QA) 담당자가 종료를 승인한 상태에 해당하는 단계는?", "결함 종료", "Fault Closed"],
  ["결함 추적 순서 중 테스터, 프로그램 리더, 품질 관리(QA) 담당자가 종료 승인한 결함을 검토하여 결함이 아니라고 판명한 상태에 해당하는 단계는?", "결함 해제", "Fault Clarified"],
  ["결함 분류 중 애플리케이션 환경이나 데이터베이스 처리에서 발생된 결함", "시스템 결함"],
  ["결함 분류 중 애플리케이션의 기획, 설계, 업무 시나리오 등의 단계에서 유입된 결함", "기능 결함"],
  ["결함 분류 중 사용자 화면 설계에서 발생된 결함", "GUI 결함"],
  ["결함 분류 중 기획자, 사용자, 개발자 간의 의사소통 및 기록이 원활하지 않아 발생된 결함", "문서 결함"],
  ["애플리케이션에 발생한 결함이 전체 시스템에 미치는 치명도를 나타내는 척도로, High, Medium, Low 또는 치명적(Critical), 주요(Major), 보통(Normal), 경미(<inor), 단순(Simple) 등으로 분류됨", "결함 심각도"],
  ["발견된 결함 처리에 신속성을 나타내는 척도로 결함의 중요도와 심각도에 따라 설정되고 수정 여부가 결정되며, 결정적(Critical), 높음(High), 보통(Medium), 낮음(Low) 또는 즉시 해결, 주의 요망, 대기, 개선 권고 등으로 분류됨", "결함 우선순위"],
  ["결함 관리 도구 중 결함 및 이슈 관리 도구로, 소프트웨어 설계 시 단위별 작업 내용을 기록할 수 있어 결함 추적도 가능한 도구", "Mantis"],
  ["결함 관리 도구 중 결함 추적은 물론 결함을 통합하여 관리할 수 있는 도구", "Trac"],
  ["결함 관리 도구 중 프로젝트 관리 및 결함 추적이 가능한 도구", "Redmine"],
  ["결함 관리 도구 중 결함 신고, 확인, 처리 등 결함을 지속적으로 관리할 수 있는 도구로, 결함의 심각도와 우선순위를 지정할 수 있음", "Bugzilla"]
];

export const QA059 = [
  ["나쁜 코드(Bad Code)를 배제하고, 클린 코드(Clean Code)로 작성하는 것", "소스 코드 최적화"],
  ["누구나 쉽게 이해하고, 수정 및 추가할 수 있는 단순, 명료한 코드, 즉 잘 작성된 코드", "클린 코드", "Clean Code"],
  ["프로그램의 로직(Logic)이 복잡하고 이해하기 어려운 코드로, 대표적으로 스파게티 코드와 외계인 코드가 있음", "나쁜 코드", "Bad Code"],
  ["코드의 로직이 서로 복잡하게 얽혀 있는 나쁜 코드의 대표적인 예", "스파게티 코드"],
  ["아주 오래되거나 참고문서 또는 개발자가 없어 유지보수 작업이 어려운, 나쁜 코드의 대표적인 예", "외계인 코드"],
  ["클린 코드의 작성 원칙 중 누구든지 코드를 쉽게 읽을 수 있도록 작성하고, 코드 작성 시 이해하기 쉬운 용어를 사용하거나 들여쓰기 기능 등을 사용한다는 원칙", "가독성"],
  ["클린 코드의 작성 원칙 중 코드를 간단하게 작성하고, 한 번에 한 가지를 처리하도록 코드를 작성하고 클래스/메소드/함수 등을 최소 단위로 분리한다는 원칙", "단순성"],
  ["클린 코드의 작성 원칙 중 코드가 다른 모듈에 미치는 영향을 최소화하고, 코드 변경 시 다른 부분에 영향을 없도록 작성한다는 원칙", "의존성 배제"],
  ["클린 코드의 작성 원칙 중 코드의 중복성을 최소화하고, 중복된 코드는 삭제하고 공통된 코드를 사용한다는 원칙", "중복성 최소화"],
  ["클린 코드의 작성 원칙 중 상위 클래스/메소드/함수에서는 간략하게 애플리케이션의 특성을 나타내고, 상세 내용은 하위 클래스/메소드/함수에서 구현한다는 원칙", "추상화"],
  ["소스 코드 최적화 유형 중 하나의 클래스는 하나의 역할만 수행하도록 응집도를 높이고, 크기를 작게 작성하는 유형", "클래스 분할 배치"],
  ["소스 코드 최적화 유형 중 인터페이스 클래스를 이용하여 추상화된 자료 구조와 메소드를 구현함으로써 클래스 간의 의존성을 최소화하는 유형", "느슨한 결합", "Loosely Coupled"],
  ["명령어나 호출문 등 모듈의 내부 요소들이 서로 관련되어 있는 정도, 즉 모듈이 독립적인 기능으로 정의되어 있는 정도를 의미함", "응집도", "Cohesion"],
  ["불필요한 부분을 생략하고 객체의 속성 중 가장 중요한 것에만 중점을 두어 개략화하는 것, 즉 모델화하는 것", "추상화", "Abstraction"],
  ["소스 코드의 코딩 스타일, 코드에 설정된 코딩 표준, 코드의 복잡도, 코드에 존재하는 메모리 누수 현상, 스레드 결함 등을 발견하기 위해 사용하는 분석 도구로 성적 분석 도구와 동적 분석 도구로 나뉨", "소스 코드 품질 분석 도구"],
  ["작성한 소스 코드를 실행하지 않고 코딩 표준이나 코딩 스타일 결함 등을 확인하는 코드 분석 도구로, pmd, cppcheck, SonarQube, checkstyle, ccm, cobertura 등이 있음", "정적 분석 도구"],
  ["작성한 소스 코드를 실행하여 코드에 존재하는 메모리 누수, 스레드 결함 등을 분석하는 도구로, Avalanche, Valgrind 등이 있음", "동적 분석 도구"],
  ["소스 코드 품질 분석 도구의 종류 중 Linux, Windows 환경에서 지원하며 소스 코드에 대한 미사용 변수, 최적화되지 않은 코드 등 결함을 유발할 수 있는 코드를 검사하는 도구", "pmd"],
  ["소스 코드 품질 분석 도구의 종류 중 Windows 환경에서 지원하며 C/C++ 코드에 대한 메모리 누수, 오버플로우 등을 분석하는 도구", "cppcheck"],
  ["소스 코드 품질 분석 도구의 종류 중 Cross-Platform 환경에서 지원하며 중복 코드, 복잡도, 코딩 설계 등을 분석하는 소스 분석 통합 플랫폼", "SonarQube"],
  ["소스 코드 품질 분석 도구의 종류 중 Cross-Platform 환경에서 지원하며, 자바 코드에 대해 소스 코드 표준을 따르고 있는지 검사하고, 다양한 개발 도구에 통합하여 사용 가능한 도구", "checkstyle"],
  ["소스 코드 품질 분석 도구의 종류 중 Cross-Platform 환경에서 지원하며, 다양한 언어의 코드 복잡도를 분석하는 도구", "ccm"],
  ["소스 코드 품질 분석 도구의 종류 중 Cross-Platform 환경에서 지원하며, 자바 언어의 소스 코드 복잡도 분석 및 테스트 커버리지를 측정하는 도구", "cobertura"],
  ["소스 코드 품질 분석 도구의 종류 중 Linux, Android 환경에서 지원하며, Valgrind 프레임워크 및 STP 기반으로 구현되며, 프로그램에 대한 결함 및 취약점 등을 분석하는 도구", "Avalanche"],
  ["소스 코드 품질 분석 도구의 종류 중 Cross-Platform 환경에서 지원하며, 프로그램 내에 존재하는 메모리 및 쓰레드 결함 등을 분석하는 도구", "Valgrind"]
];