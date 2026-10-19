
/*
あなたは文字列を縦書きに表示するプログラムを作成しています。

文字列 S を 1 文字ごとに改行区切りで出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力を配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        // 1文字ずつ改行しながら、出力する
        for (String w : words) {
            System.out.println(w);
        }
    }
}