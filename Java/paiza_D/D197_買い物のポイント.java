
/*
あなたは買い物をしたときにポイントが付く通販サイトを作成しています。

1000 円以上の買い物をしたときに購入金額の 10 %のポイントが付与されます。
1000 円未満の場合はポイントは 0 となります。
また小数点以下のポイントは切り捨てられます。

購入金額 n 円が入力されるので何ポイント付与されるかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 1000;
        final int unit = 10;
        if (price >= limit) {
            final int point = price / unit;
            System.out.println(point);
        } else {
            System.out.println(0);
        }

    }
}