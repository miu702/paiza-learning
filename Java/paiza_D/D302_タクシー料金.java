/*
あなたは出先から帰ろうとしたところ、電車が止まっていたのでタクシーを使うことにしました。
タクシーの初乗り運賃は 500 円で、3 kmより長く走るとそこからは運賃が 1km あたり K 円加算されます。

タクシーの走行距離 D と運賃 K 円が与えられます。タクシーの運賃を出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 距離と追加する値段を定義する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int distance = Integer.parseInt(numberStr[0]);
        final int add = Integer.parseInt(numberStr[1]);

        // 条件に必要な数値を定義する
        final int start = 500;
        final int limit = 3;

        // 距離がlimit以上なら、値段を追加する
        if (distance >= limit) {
            final int total = start + ((distance - limit) * add);
            System.out.println(total);
        } else if (distance < limit) {
            System.out.println(start);
        }

    }
}