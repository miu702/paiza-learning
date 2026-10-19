
/*
アルファベットからなる長さ 5 の文字列 S が与えられます。この文字列の最後の文字を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 文字列.charAt(文字列の長さ - 1)での文字列の最後の文字を出力できる。
        final Character w = word.charAt(word.length() - 1);
        System.out.println(w);
    }
}