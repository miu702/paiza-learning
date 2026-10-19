
/*
正の整数 N が入力されるので、N が奇数ならば"odd" 偶数ならば"even" と出力するプログラムを作成して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int number = sc.nextInt();

    System.out.println(number % 2 == 0 ? "even" : "odd");

  }
}