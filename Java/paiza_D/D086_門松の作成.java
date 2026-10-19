/*
あなたはお正月に向けて門松を作ることにしました。 
門松は3本の竹からなり、それぞれ竹の長さは 3 : 5 : 7 の比率で作る習わしとなっています。

最も短い竹の長さが与えられるので、 
3 本の竹に切断し門松を作るために必要な 1 本の竹の長さを出力してください。
この時切断面は竹に対して垂直に切られるものとします。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 今回は割り算があるので、小数点以下にも対応しないと、計算が間違えてしまう。
        Scanner sc = new Scanner(System.in);
        final double shortBamboo = sc.nextDouble();

        // shortBambooの5倍でも計算できるが、学習のためわざと計算する。
        final double unit = shortBamboo / 3;
        final double middleBamboo = unit * 5;
        final double longBamboo = unit * 7;

        // 合計を求める。出力時は整数に変換する
        final double total = shortBamboo + middleBamboo + longBamboo;
        System.out.println((int) total);
    }
}