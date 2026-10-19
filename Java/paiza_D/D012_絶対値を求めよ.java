/*
-100から100までの整数 n が与えられるので、絶対値を出力して下さい。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int number = sc.nextInt();

    int abs = Math.abs(number);
    System.out.println(abs);
  }
}