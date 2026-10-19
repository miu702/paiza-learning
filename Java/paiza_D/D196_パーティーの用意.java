/*
あなたはクリスマスパーティーに向けて用意を進めています。
必要なモノの値段のリストを作ったので合計でいくらか計算することにしました。

必要なモノの個数 n 個とそれぞれの必要なモノの値段 p_i 
が入力されるので合計でいくらになるかを出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // 価格リストを作成
        ArrayList<Integer> prices = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final int p = sc.nextInt();
            prices.add(p);
        }

        // 合計値を計算し、出力
        int total = 0;
        for (Integer p : prices) {
            total += p;
        }
        System.out.println(total);

    }
}