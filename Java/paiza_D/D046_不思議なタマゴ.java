/*
持ったまま一定の距離を歩くと孵化する不思議なタマゴがあります。
あなたはこのタマゴをなるべくいっぺんに孵化させようと思い、3 つをまとめて持っていくことにしました。
これらをすべて孵化させるのに最低限必要な歩行距離を求めてください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] numberStr = sc.nextLine().split(" ");

        /*
         * 最大値なので、データ型の最小値を初期値に比べる
         */
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < numberStr.length; i++) {
            final int egg = Integer.parseInt(numberStr[i]);
            max = Math.max(egg, max);
        }
        System.out.println(max);
    }
}