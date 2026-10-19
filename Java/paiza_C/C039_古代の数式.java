/*
考古学者兼ITエンジニアであるあなたはパイザ遺跡の発掘に成功し、そこに数式のようなものが刻まれていることに気づきました。
あなたはこの数式の記法をパイザ記法と命名し、解読を試みたところ、以下のルールを見つけ出しました。


・数式はすべて 2 個以上の整数の足し算となっている
・使用する整数は 1 から 99 までで、10 進法を用いる
・連続する "<" の数が整数の 10 の位を表し、それに続く連続する "/" (スラッシュ) の数が整数の 1 の位を表す
・"+" が足し算の記号を表す


このルールをもとに、パイザ記法で書かれた数式を解釈し、その結果を返すプログラムを作成してください。
なお、上記のルールで解釈不能な入力は与えられません。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力を全て1つずつの配列にする。
    Scanner sc = new Scanner(System.in);
    final String[] inputs = sc.nextLine().split("");

    // 条件に沿って、数を増加させる。今回は足し算のみなので、これでOK。
    final String ten = "<";
    final String one = "/";
    int total = 0;
    for (String I : inputs) {
      if (I.equals(ten))
        total += 10;
      if (I.equals(one))
        total++;
    }

    // 結果を出力する
    System.out.println(total);
  }
}