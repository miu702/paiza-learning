
/*
あるゲームの id である文字列 S が与えられます。

あるゲーム会社では id とそれ以外を区別するために id の最後に
大文字の A を加えたものをデータベース用 id として使用しています。

データベース用 id を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String names = sc.next();

        // 文字列を結合し、出力する
        final String add = "A";
        final String user_id = String.format("%s%s", names, add);
        System.out.println(user_id);
    }
}