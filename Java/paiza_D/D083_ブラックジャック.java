/*
あなたは整数を足して 21 を目指すゲームをプレイするプログラムを作成しています。

そのゲームでは、はじめに 2 つの数字を受け取り、更に数字を受け取るかどうかの判断をします。
受け取る場合は "HIT" 、受け取らない場合は "STAND" と出力するルールになっています。

以下のルールで "HIT" もしくは "STAND" を出力するプログラムを作成してください。

・2つの数字の合計が 16 未満であれば "HIT"
・2つの数字の合計が 16 以上であれば "STAND"
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        // 入力 → 変数に変換するend

        // 処理に必要な変換をする
        final int A = Integer.parseInt(numberStr[0]);
        final int B = Integer.parseInt(numberStr[1]);
        final int total = A + B;
        final int limit = 16;
        // 処理に必要な変換をするend

        // 三項演算子で処理をする
        System.out.println(total >= limit ? "STAND" : "HIT");
        // 三項演算子で処理をするend
    }
}