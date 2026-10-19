
/*
あなたは文字列を省略表示するプログラムを作成しています。

文字列 S が入力されるので左から 3 文字を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // javaで一部を切り出すには、変数.substring(開始、終了 + 1)とする
        final String shortWords = word.substring(0, 3);
        System.out.println(shortWords);
    }
}