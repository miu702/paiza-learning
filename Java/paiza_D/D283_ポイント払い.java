/*
あなたはスーパーに買い物をしに来ました。
あなたは様々な商品をカートにいれ、その合計金額は X 円でした。

スーパーのポイントカードには P ポイント貯まっており、
1 ポイント 1 円から利用することができます。
あなたはポイントをできる限り使ってお会計をすることにしました。

あなたが支払う金額を出力してください。
支払う金額がマイナスになる場合はなく最大でも 0 円までという点に注意してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int price = Integer.parseInt(numbers[0]);
        final int points = Integer.parseInt(numbers[1]);

        // 価格がポイントと同じか、価格の方が高い時、ポイントを全て使う。ポイントの方が多い時、無料にする。
        System.out.println(price >= points ? price - points : 0);
    }
}