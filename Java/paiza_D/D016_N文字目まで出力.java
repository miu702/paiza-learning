
/*
半角アルファベットで構成された文字列 S と正の整数 N 入力されます。1文字目から N 文字目までを出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String word = sc.nextLine();
    int number = sc.nextInt();

    String cutWord = word.substring(0, number);
    System.out.println(cutWord);
  }
}