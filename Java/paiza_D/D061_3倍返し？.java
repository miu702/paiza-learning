/*
バレンタインデーも終わり、あなたはホワイトデーにいくつチョコレートを
用意すればよいかを計算するプログラムを作ることにしました。

もらったチョコレートが 1 つ以上であればその 3 倍の数を、
0 個であれば自分用に 1 つだけ用意することにします......。

*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int number = sc.nextInt();

    // 処理前に想定しない入力を弾く
    final int under = 0;
    final int upper = 100;
    if (number < under || number > upper) {
      System.out.println("チョコの量が不正です");
      return;
    }

    // 計算を実施し、結果を出力する
    final int coefficient = 3;
    final int personal = 1;
    if (number == under) {
      System.out.println(personal);
    } else {
      final int total = number * coefficient;
      System.out.println(total);
    }

  }
}