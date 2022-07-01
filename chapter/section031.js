export const QA031 = [
  ["변수명 작성 시 변수의 자료형을 알 수 있도록 자료형을 의미하는 문자를 포함하여 작성하는 방법", "헝가리안 표기법", "Hungarian Notation"],
  ["정수형 10진수의 입출력에 사용하는 서식 문자열", "%d"],
  ["정수형 8진수의 입출력에 사용하는 서식 문자열", "%o"],
  ["정수형 16진수의 입출력에 사용하는 서식 문자열", "%x"],
  ["#include <stdio.h>\nmain() {\n\0int result, a = 100 b = 200, c = 300;\n\0result = a < b ? b++ : --c;\n\0printf(\"%d, %d, %d\", result, b, c);\n}", "200, 201, 300"],
  ["#include <stdio.h>\nmain() {\n\0\0int i, j;\n\0\0scanf(\"%o#%x\", &i, & j);\n\0\0printf(\"%d %d\", i, j);\n\0}\n}", "13 34"],
  ["#include <stdio.h>\nmain () {\n\0int j = 024, k = 24, L = 0x24, hap;\n\0hap = j + k + L;\n\0printf(\"%d, %dd, %d\", j, k, L, hap);\n}", "20, 24, 36"],
  ["public class Test {\n\0public static void main(string []args) {\n\0\0int x = 1;\n\0\0System.out.println(!(x > 0));\n\0}\n}", "false"],
  ["public class Test {\n\0public static void main(string []args) {\n\0\0int x = 1;\n\0\0System.out.println(x > 0 || x < 4);\n\0}\n}", "true"],
  ["public class Test {\n\0public static void main(string []args) {\n\0\0int x = 1;\n\0\0System.out.println(x << 2);\n\0}\n}", "4"],
  ["public class Test {\n\0public static void main(string []args) {\n\0\0int x = 1;\n\0\0System.out.println(x & 2);\n\0}\n}", "0"],
  ["public class Test {\n\0public static void main(string []args) {\n\0\0int x = 1;\n\0\0System.out.println(x % 3);\n\0}\n}", "1"],
  ["public class Test {\n\0public static void main(String[] args) {\n\0\0int w = 3, x = 4, y = 3, z = 5;\n\0\0System.out.println((w == 2 | w == y) & !(y > z) & (1 == x ^ y != z));\n\0}\n}", "1"],
  ["public class Test {\n\0public static void main(String[] args) {\n\0\0int w = 3, x = 4, y = 3, z = 5;\n\0\0System.out.println(7 == x ^ y != w);\n\0}\n}", "1"],
  ["public class Test {\n\0public static void main(String[] args) {\n\0\0int w = 3, x = 4, y = 3, z = 5;\n\0\0System.out.println(7 == x ^ y == w);\n\0}\n}", "0"],
  ["public class Test {\n\0public static void main(String[] args) {\n\0\0int w = 3, x = 4, y = 3, z = 5;\n\0\0System.out.println(7 == y ^ z != w);\n\0}\n}", "1"],
  ["public class Test {\n\0public static void main(String[] args) {\n\0\0int w = 3, x = 4, y = 3, z = 5;\n\0\0System.out.println(7 == y ^ z == w);\n\0}\n}", "0"]
];

