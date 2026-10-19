
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    // 1つしか要素がない時に、改行を無視する方法。Lineで1行読むことで改行を無視する。
    final String familyStr = sc.nextLine();
    final int family = Integer.parseInt(familyStr);

    // お菓子の量を計算する
    final String[] lines = sc.nextLine().split(" ");
    final int x = Integer.parseInt(lines[0]);
    final int y = Integer.parseInt(lines[1]);
    final int total_sweets = x * y;

    // 余りを計算する
    final int rest = total_sweets % family;
    System.out.println(rest);
  }
}