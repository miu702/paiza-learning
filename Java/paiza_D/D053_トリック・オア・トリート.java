
/*
Trick or Treat! ハロウィーンのシーズンです。
あなたの子供はわがままなのでお菓子といってもキャンディかチョコレートでないと満足してくれません。

文字列が与えられるので、これが "candy" か "chocolate" であれば "Thanks!"、
その他の場合は "No!" という子供のリアクションを出力してください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String word = sc.next();

    // 欲しいものが受け取ることができるかチェックする。||はまたはの意味。
    final boolean check = word.equals("chocolate") || word.equals("candy");
    System.out.println(check ? "Thanks!" : "No!");
  }
}