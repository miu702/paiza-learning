/*
あなたは本の表紙を作っています。本の表紙は最大で10文字分の幅しかありません。

表紙に印刷する文字列 S が与えられるので 10 文字ごとに改行して出力するプログラムを作成してください
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {

    // 1、入力 → 変数に変換する。
    Scanner sc = new Scanner(System.in);
    final String words = sc.nextLine();

    // 2、変数.length()とすることで、変数の長さを知ることができる。
    System.out.println(words.length());

    // 3、変数の長さ + 変数 += 数値とすることで、数列の長さを参考に、数値分まとめて処理できる。
    for (int i = 0; i < words.length(); i += 10) {

      // 4、右の数値を処理できる場所まで処理をする。文字列なので、substring(左、右)とすることで切り取ることができる。
      int right = Math.min(i + 10, words.length());
      System.out.println(words.substring(i, right));
    }
  }
}
