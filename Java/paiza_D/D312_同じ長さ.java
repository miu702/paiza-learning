
/*
あなたは 2 つの文字列の長さが同じかどうかを確認するプログラムを作成しています。

文字列 A と文字列 B が改行区切りで与えられるので同じ長さであれば "Yes" それ以外は "No" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String A = sc.next();
        final String B = sc.next();

        // 2つの変数の長さが同じなら、Yes。違うなら、Noを出力する
        System.out.println(A.length() == B.length() ? "Yes" : "No");
    }
}