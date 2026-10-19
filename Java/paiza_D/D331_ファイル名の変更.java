
/*
あなたはファイル名が 1 つの半角スペース区切りになっているファイルを "_" 区切りに変更するプログラムを作成しています。

ファイル名 S が与えられるので半角スペースを "_" に置き換えて出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String words = sc.nextLine();

        // 変数名.replace(変換前, 変換後)とすることで変換することができる。
        final String output = words.replace(" ", "_");
        System.out.println(output);
    }
}