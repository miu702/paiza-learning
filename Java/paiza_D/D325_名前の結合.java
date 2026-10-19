
/*
名前を構成する 2 つの文字列 a と b が改行区切りで与えられます。

文字列 a, b の順に結合し 1 行で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 2つの文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String A = sc.next();
        final String B = sc.next();

        // テンプレートリテラルを使用して、合体する
        final String total = String.format("%s%s", A, B);
 ;       System.out.println(total);
    }
}