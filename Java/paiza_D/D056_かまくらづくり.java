
/*
今日は大雪、子どもたちはかまくらをつくろうとはしゃいでいます。
どれだけの体積の雪が必要かを計算してあげましょう。

かまくらは 1 辺が r1 (m) の立方体から r2 (m) の立方体分をくり抜く形でつくります 。
このときかまくらの体積 (m^3)はr1^3 - r2^3で求められます。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    // 数値を固定する
    final int A = Integer.parseInt(lines[0]);
    final int B = Integer.parseInt(lines[1]);

    // 累乗の計算とかまくらの大きさの計算をする。累乗の計算は少数になるので、変換する。
    final int full = (int) Math.pow(A, 3);
    final int hollowOut = (int) Math.pow(B, 3);
    final int Kamakura = full - hollowOut;
    System.out.println(Kamakura);
  }
}