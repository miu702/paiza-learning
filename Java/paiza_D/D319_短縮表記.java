
/*
あなたは文字列を短縮して表示するプログラムを作成しています。
文字列の先頭から 3 文字を出力することにしました。

文字列 S が与えられるので先頭から 3 文字を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を変数に変換する
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 文字列.substring(左, 右 + 1)とすることで、左から右の範囲で切り取ることができる。
        final String output = word.substring(0, 3);
        System.out.println(output);
    }
}