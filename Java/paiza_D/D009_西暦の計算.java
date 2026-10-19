
/*
2つの西暦 a, b が半角スペース区切りの整数で入力されます。a から b が何年間あるか出力してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    final int a = Integer.parseInt(lines[0]);
    final int b = Integer.parseInt(lines[1]);

    final int difference = b - a;
    System.out.println(difference);
  }
}