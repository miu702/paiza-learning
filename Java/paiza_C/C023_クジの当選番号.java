/*
今日は PAIZA 6 というくじの当選番号の公表日です。

PAIZA 6 の購入者は 1 から 100 までの好きな数字を 6 つ選びます。
抽選では同様に 6 つの当選番号が発表され、購入したくじの数字と一致していた数字の数に応じて賞金が当たります。

あなたは、先日 N 枚のくじを購入しました。
プログラマーであるあなたは、N 枚の宝くじそれぞれについて、 
当選番号と一致した数字の数について調べるプログラムを書くことにしました。

なお、くじの数字は昇べきの順に並んでいるとは限りません。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 当たりの番号リストと買った枚数を定義する
        final String[] winners = sc.nextLine().split(" ");
        final String bay_lottery = sc.nextLine();

        // 買った枚数分ループ処理をする
        for (int i = 0; i < Integer.parseInt(bay_lottery); i++) {
            final String[] hands = sc.nextLine().split(" ");

            // ここで関数を使用する。
            final int result = hitCounts(winners, hands);
            System.out.println(result);

        }
    }

    // 関数では、変数以外も引数として利用できる。配列の時はデータ型[] 配列名とする。
    static Integer hitCounts(String[] winners, String[] hands) {
        int count = 0;
        for (String H : hands) {

            // 配列.contains(チェックしたいデータ)を使いたいが、ArrayListでないと使えないので、変換する。
            if (Arrays.asList(winners).contains(H))
                count++;
        }

        return count;
    }

}