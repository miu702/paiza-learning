
/*
著名な占い師であるあなたはとある国の大統領から占いを依頼されました。
正しい占いをしたいところですが、この大統領は気難しいので
あまり悪い結果を伝えるのはためらわれます。

占いの結果はトランプカード "J", "Q", "K" の 2 枚 1 組で表れます。
もし結果が「最悪」を表す "J" 2 枚になってしまったときには
片方 (2 枚目) を "Q" に変更するプログラムを作ってください。


*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String[] lines = sc.nextLine().split(" ");
    final String A = lines[0];
    final String B = lines[1];

    final String Jack = "J";
    final String Queen = "Q";
    if (A.equals(Jack) && B.equals(Jack)) {
      System.out.println(A + " " + Queen);
    } else {
      System.out.println(A + " " + B);
    }
  }
}