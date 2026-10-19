
/*
あなたはエイプリルフールに冗談で書かれたソースコードを修正する作業に追われています。
そのソースコードは「True」と書くべきところが全て「False」となっています。


文字列が 1 行で与えられるので文字列に含まれる「False」を「True」に置き換えて出力してください。
置き換えが必要ない場合もそのまま文字列を出力してください。

*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String words = sc.nextLine();

    // 変数.replace(変換前, 返還後);で変換することができる。
    final String change = words.replace("False", "True");
    System.out.println(change);
  }
}