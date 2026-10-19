/*
あなたはクリスマスのプレゼントの準備をしています。
プレゼントをリボンで飾りつけようと考えています。

用意したリボンの長さ n センチメートル、 1 つのプレゼントで使うリボンの長さ m センチメートルが
与えられるのでいくつのプレゼントを飾ることができるかを出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 数値を配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // 計算し、出力する
        final int unit = Integer.parseInt(numberStr[0]) / Integer.parseInt(numberStr[1]);
        System.out.println(unit);
    }
}