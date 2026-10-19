
/*
そろそろ衣替えのシーズンです。夏物の服をしまって冬物の服を出しましょう。

10 着の服に関してそれが夏物か冬物かの情報が与えられるので、
その半分 (5 着) 以上が冬物になっているかどうか 
(なっていれば OK、なっていなければ NG) を判定してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String[] clothes = sc.nextLine().split(" ");

    final String winter = "W";
    int total = 0;
    for (int i = 0; i < clothes.length; i++) {
      if (clothes[i].equals(winter))
        total++;
    }

    final int referenceValue = 5;
    System.out.println(total >= referenceValue ? "OK" : "NG");
  }
}