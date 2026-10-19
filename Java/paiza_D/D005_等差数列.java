
/*
数列を出力するプログラムを作りましょう。
初項 m が与えられ、公差 n が与えられるので 10番目までの数字をスペース区切りで出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力値 → 変数
    Scanner sc = new Scanner(System.in);
    String[] line = sc.nextLine().split(" ");
    final int FirstTerm = Integer.parseInt(line[0]);
    final int Tolerance = Integer.parseInt(line[1]);

    // 空の配列を作る
    final int max = 10;
    int[] NumberSequence = new int[max];

    // 計算し、配列を更新
    for (int i = 0; i < max; i++) {
      final int total = FirstTerm + Tolerance * i;
      NumberSequence[i] = total;
    }

    // 出力する
    for (int j = 0; j < max; j++) {
      if (j != 0)
        System.out.print(" ");
      System.out.print(NumberSequence[j]);
    }

  }
}