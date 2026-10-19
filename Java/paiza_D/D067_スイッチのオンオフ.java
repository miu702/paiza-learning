
/*
あなたはスイッチの状態を表示するプログラムを作成しています。
そのスイッチは1度押すと "ON" と "OFF" が切り替わります。


スイッチの初期状態は "OFF" でスイッチを押した回数 n が入力されるので
n 回スイッチが押された後の状態を出力してください。

*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int number = sc.nextInt();

    // 今回はスイッチの回数が偶数か奇数かによって異なるので、あまりの計算を実施
    if (number % 2 == 0) {
      System.out.println("OFF");
    } else if (number % 2 == 1) {
      System.out.println("ON");
    }
  }
}