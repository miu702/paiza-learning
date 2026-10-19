/*
あなたは電池が必要な機器のために電池を買うことにしました。

その機器に必要な本数 n と購入した電池の本数 m が与えられるので
毎回 n 本すべてを取り替える場合に何回交換可能かと余る本数を改行区切りで出力して下さい。

*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int need = sc.nextInt();
        final int buy = sc.nextInt();

        // 計算し、出力する
        final int times = buy / need;
        final int rest = buy % need;
        System.out.println(times);
        System.out.println(rest);
    }
}