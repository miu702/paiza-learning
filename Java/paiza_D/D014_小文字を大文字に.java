
/*
半角アルファベットの小文字で構成された長さ n の文字列 s が与えられます。
文字列 s を大文字に変換して出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String word = sc.nextLine();

    String big = word.toUpperCase();
    System.out.println(big);
  }
}