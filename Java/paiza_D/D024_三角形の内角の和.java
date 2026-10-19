
/*
平面上の三角形の内角の和は全て足すと 180 度になります。
平面上の三角形の 2 つの角の角度 a, b が改行区切りで与えられるので残りの 1 つの角の角度を出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final int A = sc.nextInt();
    final int B = sc.nextInt();

    final int rest = 180 - A - B;
    System.out.println(rest);
  }
}