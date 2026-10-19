
/*
あなたはソーシャルゲームで遊んでいます。
ステージに挑戦するためにスタミナと呼ばれる数値を m 消費します。

あなたの現在のスタミナ n が与えられるので、
ステージに挑戦可能であれば挑戦した後のスタミナの数値、
挑戦が不可能な場合は "No" を出力してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    // 定数に変換し、ずれないようにする
    final int required = Integer.parseInt(lines[0]);
    final int current = Integer.parseInt(lines[1]);

    // 結果で分岐し、出力する
    if (current >= required) {
      final int rest = current - required;
      System.out.println(rest);
    } else {
      System.out.println("No");
    }
  }
}