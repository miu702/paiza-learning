
/*
あなたは文字列を表示するプログラムを作成しています。
表示する領域は10文字分しかありません。何文字表示されないのかを調べることにしました。

文字列 S が与えられるので 10 文字以内の場合は 0 、
11 文字以上の場合は文字列 S の長さ - 10 を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String words = sc.next();

        // 条件に沿って出力する
        final int length = words.length();
        final int limit = 10;
        System.out.println(length > limit ? length - limit : 0);
    }
}