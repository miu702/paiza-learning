/*
あなたは文字列として記録された天気の分析をしています。
その文字列は晴れの日を "S" 雨の日を "R" とし、 1 日ごとに記録していった長さ n の文字列です。


文字列に記録された晴れの日数と、雨の日数をスペース区切りで出力してください。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int number = sc.nextInt();
    String[] lines = sc.next().split("");

    // 入力エラーを弾く
    if (number != lines.length) {
      System.out.println("指定した日にちと入力した天気の日数が一致しません。");
      return;
    }

    // 晴れと雨をカウントする
    int sunny = 0;
    int rainy = 0;
    for (String w : lines) {
      if (w.equals("S")) {
        sunny++;
      } else if (w.equals("R")) {
        rainy++;
      } else {
        System.out.println("天気に指定できるのは、S(晴れ)、R(雨)のみです。");
        return;
      }
    }

    // 結果を出力する
    System.out.println(sunny + " " + rainy);
  }
}