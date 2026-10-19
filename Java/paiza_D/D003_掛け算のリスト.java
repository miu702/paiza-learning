
/*
ある正の整数nが入力されます。
正の整数1から9に整数nをそれぞれを掛けた数を半角スペース区切りで出力して下さい。
*/
import java.util.*;

public class Main {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int number = sc.nextInt();

    int[] numberList = new int[9];
    for (int i = 1; i <= 9; i++) {
      final int total = number * i;
      numberList[i - 1] = total;
    }

    for (int i = 0; i < numberList.length; i++) {
      if (i != 0) {
        System.out.print(" ");
      }
      System.out.print(numberList[i]);
    }
  }
}
