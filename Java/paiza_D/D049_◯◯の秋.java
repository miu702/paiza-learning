
/*
あなたは、「わたしの秋は◯◯の秋」というアンケートの集計を任されました。

アンケートの回答はまちまちで、「◯◯の秋」と書く人もいれば「◯◯」の部分だけ書く人もいます。こ
れでは不便なのでまず「◯◯」の部分だけを取り出すプログラムを作りましょう。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数
    Scanner sc = new Scanner(System.in);
    final String words = sc.next();
    final String[] wordsSplit = words.split("");

    // 判断するための文字を切り取る
    final int wedge = wordsSplit.length - 5;
    final String check = words.substring(wedge);
    final String sample = "noaki";

    // 見本と切り取る個所が同じとき、切り取って出力
    if (check.equals(sample)) {
      final String output = words.substring(0, wedge);
      System.out.println(output);
    } else {
      System.out.println(words);
    }
  }
}