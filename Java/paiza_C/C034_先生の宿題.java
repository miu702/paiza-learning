
/*
あなたは小学校一年生の先生です。今週の授業で、足し算と引き算を教えます。
あなたは、足し算と引き算を用いた宿題を作る必要があり、そのためのプログラムを書くことにしました。

以下の手順で問題をランダム生成するプログラムはもうできているのですが、
その答えを求めるプログラムはまだできていません。答えを求めるプログラムを書いてください。

[問題生成の手順]

1. 正しい式 a + b = c, あるいは a - b = c (a, b, c, は整数) を生成する
2. a, b, c のうちいずれか 1 つを空欄にする

この空欄に入れるべき整数が「答え」となります
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力→変数に変換する。
    Scanner sc = new Scanner(System.in);
    final String[] inputs = sc.nextLine().split(" ");
    final String A = inputs[0];
    final String op = inputs[1];
    final String B = inputs[2];
    final String eq = inputs[3];
    final String C = inputs[4];

    // xの位置で条件分岐する
    if (A.equals("x")) {
      final int B_int = Integer.parseInt(B);
      final int C_int = Integer.parseInt(C);
      if (op.equals("+")) {
        final int X = C_int - B_int;
        System.out.println(X);

      } else if (op.equals("-")) {
        final int X = B_int + Math.abs(C_int);
        System.out.println(X);
      }

    } else if (B.equals("x")) {
      final int A_int = Integer.parseInt(A);
      final int C_int = Integer.parseInt(C);
      if (op.equals("+")) {
        final int X = C_int - A_int;
        System.out.println(X);

      } else if (op.equals("-")) {
        final int X = A_int - C_int;
        System.out.println(X);
      }

    } else if (C.equals("x")) {
      final int A_int = Integer.parseInt(A);
      final int B_int = Integer.parseInt(B);
      if (op.equals("+")) {
        final int X = A_int + B_int;
        System.out.println(X);

      } else if (op.equals("-")) {
        final int X = A_int - B_int;
        System.out.println(X);
      }

    } else {
      System.out.println("xの位置が不正です。");
      return;
    }

  }
}