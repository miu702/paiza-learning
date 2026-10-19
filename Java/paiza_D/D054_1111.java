/*
今日はみんなで棒状のチョコレートお菓子を持ち寄るパーティーをします。このお菓子が合計で 11 本以上あればパーティーが開催できます。

このお菓子の 1 本は数字の "1" で表され、本数分だけ "1" が連続する文字列が与えられるので、
パーティーが開催できれば "OK"、できなければあと最低で何本用意すればいいかを出力してください。
*/

import java.util.*;

public class D054_1111 {
  public static void main(String[] args) {
    // 入力 → 変数
    Scanner sc = new Scanner(System.in);
    final String[] numbers = sc.next().split("");

    // お菓子の数をチェックする
    final int sweets = numbers.length;
    final int referenceValue = 11;
    final boolean check = sweets >= referenceValue;
    System.out.println(check ? "OK" : referenceValue - sweets);
  }
}