
/*
あなたは 2 つの単語で構成される文字列を省略して表記するプログラムを作成しようとしています。

各単語の文字列 A, B が改行区切りで与えられるので、
文字列 A , B の先頭 1 文字を繋げて 1 行で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String A = sc.next();
        final String B = sc.next();

        // 変数.substringで文字列を切り取ることができる。
        final String output = A.substring(0, 1) + B.substring(0, 1);
        System.out.println(output);
    }
}