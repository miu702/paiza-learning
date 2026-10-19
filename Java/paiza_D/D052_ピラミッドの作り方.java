
/*
あなたのクラスでは、運動会の出し物で人間ピラミッドをやることになりました。
ある段数のピラミッドを組むのに必要な人数を求めるプログラムをつくりましょう。

ピラミッドでは以下のように上から i 段目には i 人が必要となります。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final int number = sc.nextInt();

    int total = 0;
    for (int i = 1; i <= number; i++) {
      total += i;
    }
    System.out.println(total);
  }
}