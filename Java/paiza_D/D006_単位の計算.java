/*
距離 n とその単位 s がスペース区切りで与えられるので、すべての距離をmmに換算し出力してください。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] line = sc.nextLine().split(" ");

    final int number = Integer.parseInt(line[0]);
    final String unit = line[1];

    final int km = 1000;
    final int m = 100;
    final int cm = 10;

    switch (unit) {
      case "km": {
        final int total = number * km * m * cm;
        System.out.println(total);
        break;
      }
      case "m": {
        final int total = number * m * cm;
        System.out.println(total);
        break;
      }
      case "cm": {
        final int total = number * cm;
        System.out.println(total);
        break;
      }
      default:
        break;
    }

  }
}