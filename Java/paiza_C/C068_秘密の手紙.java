/*
あなたは友達と秘密を共有するために暗号文を作り、その暗号文を元に戻すプログラムを作成することになりました。
暗号文を元に戻す際のルールは以下の通りです。


・全ての文は大文字アルファベットのみを使う。
・文字の番号は左から順番に 1 番目から数え始めるものとする。
・暗号文の元に戻す操作として、暗号文の奇数番目の文字に対しては、
各文字をアルファベットの逆方向に N 文字ずらし、偶数番目の文字に対しては、
各文字を順方向に N 文字ずらしたものとする。
・ずらした文字数 N は互いに知っている。


暗号化された文字列と元の文をずらした文字数 N が与えられるので、
元に戻された文字列を出力するプログラムを作成してください。
ただし、文字をずらした時、アルファベットの先頭、及び末尾をはみ出してしまった場合、
それぞれ、アルファベットの末尾、アルファベットの先頭から続きを数えるものとします。


入力される値
入力は以下のフォーマットで与えられます。

N
S
・1 行目には、ずらした文字数を表す整数 N が与えられます。
・続く 1 行には、暗号文字列を表す文字列 S が与えられます。入力は 2 行となり、末尾に改行が 1 つ入ります。
・S は暗号化文字された文字列を表す 英字大文字 からなる文字列
それぞれの値は文字列で標準入力から渡されます。


期待する出力
元に戻された文字列を出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 25
・S は 英字大文字 で構成される文字列。
・1 ≦ (S の長さ) ≦ 500



入力例1
4
QEPG

出力例1
MILK

入力例2
19
KXKPMQVI

出力例2
RQRITJCB

*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String shifted = sc.nextLine();
    final char[] cipher = sc.nextLine().toCharArray();

    final int length = 26;
    final int start = 65;
    // 大文字アルファベットの配列を作成する。
    ArrayList<Character> alphabets = new ArrayList<>();
    for (int i = start; i < start + length; i++) {
      final char c = (char) i;
      alphabets.add(c);
    }

    // アルファベットを3回繋げ、前後の文字への折り返しを扱いやすくする。
    ArrayList<Character> conversion = new ArrayList<>();
    conversion.addAll(alphabets);
    conversion.addAll(alphabets);
    conversion.addAll(alphabets);
    System.out.println(conversion);

    // 暗号分の長さだけ、繰り返し処理をする。
    ArrayList<Character> output = new ArrayList<>();
    for (int j = 0; j < cipher.length; j++) {
      // 暗号の文字の位置を見つける。
      final int index = alphabets.indexOf(cipher[j]);

      // 条件に沿ってずらす。+26は3つの配列の真ん中にするための補正。
      if (j % 2 == 0) {
        final int shift = index - Integer.parseInt(shifted) + 26;
        output.add(conversion.get(shift));

      } else {
        final int shift = index + Integer.parseInt(shifted) + 26;
        output.add(conversion.get(shift));

      }
    }

    // 結果を出力する
    StringBuilder sb = new StringBuilder();
    for (Character s : output) {
      sb.append(s);
    }
    System.out.println(sb.toString());

  }
}