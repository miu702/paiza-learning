
/*
あなたはある文字列 S の前後 1 文字を削除して出力するプログラムを作成しています。

文字列 S の先頭と末尾の 1 文字ずつ削除した文字列を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 切り取る位置を指定する
        final int left = 1;
        final int right = word.length() - 1;

        // 文字列は変数.substring(left, right + 1)でleft~rightの位置で切り取ることができる。
        final String output = word.substring(left, right);
        System.out.println(output);
    }
}