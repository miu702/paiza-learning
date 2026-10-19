/*
今は月末。そろそろ今月の家計簿をつけないといけません。 
あなたの手元には、とあるスーパーマーケットのレシートの山があります。

スーパーマーケットにはポイントカードが導入されていて、買い物をするたびに
購入金額に応じたポイントがたまります。 加算されるポイントは次の 3 つのルールに
従って決定されます。

1. 通常は購入金額の 1 ％（小数点以下切り捨て）とする
2. ただし、3 のつく日は購入金額の 3 ％（小数点以下切り捨て）とする
3. ただし、5 のつく日は購入金額の 5 ％（小数点以下切り捨て）とする

あなたはポイントカードに、今、何ポイントたまっているのかが気になりました。 
レシートの数が多いので、手で計算するのは大変です。

早速、これを計算するプログラムを書きましょう。
ただし、今月のはじめには全くポイントがたまっておらず（0 ポイント）、
また、今月中ポイントは消費されなかったものとします。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // レシートの数を定義する
        Scanner sc = new Scanner(System.in);
        final String receiptStr = sc.nextLine();
        final int receipts = Integer.parseInt(receiptStr);

        // レシートのかずだけ処理を繰り返す。
        int totalPoint = 0;
        for (int i = 0; i < receipts; i++) {
            // 日にちと価格を定義する
            final String[] receiptData = sc.nextLine().split(" ");
            final String day = receiptData[0];
            final int price = Integer.parseInt(receiptData[1]);

            // 対象.contains(ターゲット)で対象にターゲットが含まれているか？で条件分岐する。
            if (day.contains("5")) {
                // 始めにポイント分をかけ、100で割ることで少数にせずに定義できる。
                int addPoint = price * 5 / 100;
                totalPoint += addPoint;

            } else if (day.contains("3")) {
                int addPoint = price * 3 / 100;
                totalPoint += addPoint;

            } else {
                int addPoint = price / 100;
                totalPoint += addPoint;

            }

        }

        // 合計ポイントを出力する
        System.out.println(totalPoint);
    }
}
