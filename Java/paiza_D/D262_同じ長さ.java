
/*
あなたは文字列が同じかどうかを確認しようとしています。
文字列 A と文字列 B が改行区切りで与えられるので長さが一致する時は "Yes" 一致しない時は "No" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列Aと文字列Bを定義する
        Scanner sc = new Scanner(System.in);
        final String A = sc.next();
        final String B = sc.next();

        // 変数名.length()とすることで文字列の長さを知ることができる。
        System.out.println(A.length() == B.length() ? "Yes" : "No");
    }
}