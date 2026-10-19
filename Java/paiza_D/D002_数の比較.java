
/*
ある正の整数aとbがスペース区切りで入力されます。
aとbを比較し大きい方の値を出力して下さい。aとbが同じ場合は「eq」と出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] line = sc.nextLine().split(" ");

    final int A = Integer.parseInt(line[0]);
    final int B = Integer.parseInt(line[1]);

    if (A == B) {
      System.out.println("eq");
    } else if (A > B) {
      System.out.println(A);
    } else if (A < B) {
      System.out.println(B);
    }
  }
}