/*
あなたは何周年記念かを確認するプログラムを作成しています。

最初の年 x と確認する年 y が改行区切りで与えられるので何周年かを出力して下さい。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int year_1 = sc.nextInt();
        final int year_2 = sc.nextInt();

        // 計算し、結果を出力
        final int between = year_2 - year_1;
        System.out.println(between);
    }
}