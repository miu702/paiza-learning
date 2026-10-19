/*
あなたはある車を購入しました。あらかじめ入念に自動車の特性を把握しておきたいあなたは、ある速度で進行している時にブレーキをかけてから
停止するまでに何メートル進むか調べることにしました。この距離を制動距離と言います。

制動距離は、摩擦がない場合を考えると車の重さを m, ブレーキをかけ始めたときの速度を v, 
ブレーキの強さを f としたとき、以下のように表せます。

L = MVV / 2F
以上の値が与えられるので、制動距離 L を求めるプログラムを作成してください。
ただし、小数点以下は切り捨てて出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // 数値を定数に変換する
        final int M = Integer.parseInt(numberStr[0]);
        final int V = Integer.parseInt(numberStr[1]);
        final int F = Integer.parseInt(numberStr[2]);

        // 出力ルールに沿って出力する
        final double brakingDistance = (M * V * V) / (2 * F);
        System.out.println((int) brakingDistance);

    }
}