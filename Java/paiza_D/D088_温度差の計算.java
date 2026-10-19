/*
あなたは体調管理のために天気予報の最高気温、最低気温から 1 日の気温がいくつ変化しているかを知りたくなりました。

ある日の最高気温 t と最低気温 u がスペース区切りで入力されるので、 1 日の気温がいくつ変化しているかを出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        final int high = Integer.parseInt(lines[0]);
        final int low = Integer.parseInt(lines[1]);
        final int s = 0;
        if (high < low) {
            System.out.println("気温が不正です");
            return;
        }
        // 入力 → 変数に変換するend

        // 条件に沿って計算し、出力する。マイナスがあるときは絶対値を利用する
        if (high >= s && low >= s) {
            // 両方+
            final int between = high - low;
            System.out.println(between);

        } else if (high < s && low < s) {
            // 両方-
            final int between = Math.abs(low) - Math.abs(high);
            System.out.println(between);

        } else if (high >= s && low < s) {
            // 最低のみ-
            final int between = Math.abs(low) + high;
            System.out.println(between);

        }

    }
}