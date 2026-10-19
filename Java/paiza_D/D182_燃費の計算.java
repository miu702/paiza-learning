/*
あなたは車の燃費の計算をしています。

走行距離 n キロメートルと使用した燃料 m リットルが改行区切りで与えられるので
燃料 1 リットルあたりの走行距離を小数点以下を切り捨てて出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int distance = sc.nextInt();
        final int fuel = sc.nextInt();

        // 燃費を計算する
        final int efficiency = distance / fuel;
        System.out.println(efficiency);
    }
}