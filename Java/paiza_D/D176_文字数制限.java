/*
あなたはブログのタイトルを入力させるプログラムを作成しています。
ブログのタイトルの長さは 20 文字以内に収めると決まっており1文字でも超えた場合はエラーを出すことにしました。

タイトルの長さが 20 文字以内であれば「OK」、21文字以上の場合「NG」と出力してください。

*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String words = sc.next();

        // 変数.length()で文字列の大きさを配列にせずに長さを知ることができる。
        final int limit = 20;
        System.out.println(words.length() >= limit ? "NG" : "OK");
    }
}