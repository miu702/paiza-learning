
/*
半角アルファベットのみで構成された長さmの文字列s_iがn行入力されます。
「Hello」に文字列s_iを入力された順に「,」で結合したものを半角スペースで結合し、末尾に「.」を結合した文字列を出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {

  public static void main(String[] args) {
    // 文字列の量を標準入力から取りこむ
    Scanner sc = new Scanner(System.in);
    int number = sc.nextInt();

    // 文字列の配列を作成する。
    String[] words = new String[number];
    for (int i = 0; i < words.length; i++) {
      words[i] = sc.next();
    }

    // 決まりに従って、出力する。
    System.out.print("Hello");
    for (int j = 0; j < words.length; j++) {
      if (j == 0) {
        System.out.print(" ");
        System.out.print(words[j]);
      } else {
        System.out.print(",");
        System.out.print(words[j]);
      }

      if (j == words.length - 1) {
        System.out.print(".");
      }
    }
  }

}
