
/*
整数 m と n が与えられます。m を n で割り算した商と余りを出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    final int m = Integer.parseInt(lines[0]);
    final int n = Integer.parseInt(lines[1]);

    final int quotient = m / n;
    final int rest = m % n;

    System.out.println(quotient + " " + rest);
  }
}