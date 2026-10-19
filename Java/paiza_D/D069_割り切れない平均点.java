/*
テストが返却されたので、友達同士で平均点を計算することになりました。 
人数が自分を含め 7 人なので、どうしても割り切れない場合があるため、
小数点 1 桁まで計算し、小数点以下 2 桁目で四捨五入することにしました。
例えば入力例 1 の場合、平均点が 58.571.... と続いていくので、
小数点第一位までの "58.6" を出力します。

7 人の点数が入力されるので、平均点を小数点以下 1 桁で表示してください。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    String[] numberStr = sc.nextLine().split(" ");

    // 全ての要素を足し算する。
    int total = 0;
    for (String num : numberStr) {
      int number = Integer.parseInt(num);
      total += number;
    }

    // 平均は答えが少数になるので、少数に変換する。
    double average = (double) total / (double) numberStr.length;

    // 小数点以下第〇位で四捨五入するときは、2位なら10を3位なら100をかけ、割る。
    double rounded = Math.round(average * 10) / 10.0;
    System.out.println(rounded);
  }
}