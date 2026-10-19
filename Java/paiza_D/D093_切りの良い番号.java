/*
あなたは数を数え上げるプログラムを作成しています。
そこで「切りの良い番号」を見つけたら表示したくなりました。
「切りの良い番号」とは以下のルールを満たすものとします。
・全ての桁の数字が同じ


判定する数字 n が与えられるので条件を満たした場合は、
その数字をそのまま出力、それ以外は「No」と出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split("");
        // 入力 → 変数に変換するend

        // 数値が全て同じかチェックする
        final String sample = numberStr[0];
        boolean check = true;
        for (String N : numberStr) {
            if (!N.equals(sample))
                check = false;
        }
        // 数値が全て同じかチェックするend

        // 三項演算子で結果を出力する
        System.out.println(check ? String.join("", numberStr) : "No");
    }
}