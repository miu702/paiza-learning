/*
あなたはあるゲームをプレイしています。

プレイヤーはスタミナのポイント N を所持しており1プレイあたり M ポイントずつ消費されます。
プレイヤーのスタミナと1プレイあたりの消費ポイントがスペース区切りで与えられるので
何回プレイ出来るかを出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // スタミナと必要スタミナを定義
        final int hp = Integer.parseInt(numberStr[0]);
        final int need = Integer.parseInt(numberStr[1]);

        // プレイ可能回数を計算
        final int times = hp / need;
        System.out.println(times);
    }
}