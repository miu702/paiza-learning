
/*
あなたはあるワインの銘柄のマーケティングを担当しています。
良いキャッチコピーを考えるため、とりあえず「〜の中で最高」というフレーズを色々作ってみることにしました。

2 つの文字列が与えられるので、"Best in" とそれらの文字列をすべて半角スペース区切りで
結合して出力してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String word = sc.nextLine();

    final String add = "Best in";
    final String output = add + " " + word;
    System.out.println(output);
  }
}