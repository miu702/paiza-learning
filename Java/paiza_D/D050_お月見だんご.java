/*
あなたはお月見の準備をしています。子供 2 人にいくつお月見だんごがほしいかをたずねますが、
やんちゃな子は明らかに食べきれない数のだんごを要求してきます。

付き合いきれないのであなたは 5 より大きい数字を要求された場合には 
5 個しか与えないことにしました。もちろん 5 以下の場合にはその数のだんごを与えます。
必要なだんごの数を求めましょう。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数
    Scanner sc = new Scanner(System.in);
    final String[] numbers = sc.nextLine().split(" ");

    // 必要な値を設置
    final int max = 5;
    int total = 0;

    // 団子の数を調査する
    for (int i = 0; i < numbers.length; i++) {
      final int dumpling = Integer.parseInt(numbers[i]);
      total += Math.min(max, dumpling);
    }

    // 合計数を表示
    System.out.println(total);
  }
}