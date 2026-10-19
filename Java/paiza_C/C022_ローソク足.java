/*
変化し続ける株価の様子を知るために、始値、終値、高値、安値と呼ばれる 4 種類の株価がしばしば用いられます。

1 日間の 4 種類の株価はそれぞれ次のように定められます。

・始値は 1 日の最初の株価
・終値は 1 日の最後の株価
・高値は 1 日の最大の株価
・安値は 1 日の最小の株価

さらに、n 日間の 4 種類の株価はそれぞれ次のように定められます。

・始値は 1 日目の始値
・終値は n 日目の終値
・高値は 1 日目から n 日目までの最大の高値
・安値は 1 日目から n 日目までの最小の安値


4 種類の株価が 1 日目から順に n 日間分与えられるので、n 日間の 4 種類の株価を求めるプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 日数を定義する
        Scanner sc = new Scanner(System.in);
        final String dayStr = sc.nextLine();

        // 初期値を定義する
        int start = Integer.MIN_VALUE;
        int end = Integer.MIN_VALUE;
        int high = Integer.MIN_VALUE;
        int low = Integer.MAX_VALUE;

        // 日数分ループし、処理をする。
        for (int i = 0; i < Integer.parseInt(dayStr); i++) {
            final String[] priceStr = sc.nextLine().split(" ");
            final int A = Integer.parseInt(priceStr[0]);
            final int B = Integer.parseInt(priceStr[1]);
            final int C = Integer.parseInt(priceStr[2]);
            final int D = Integer.parseInt(priceStr[3]);

            // 条件に沿って変数を変換する
            if (i == 0 && start <= A)
                start = A;
            if (i == Integer.parseInt(dayStr) - 1 && end <= B)
                end = B;
            if (high <= C)
                high = C;
            if (low >= D)
                low = D;

        }

        // 結果を出力する
        System.out.println(start + " " + end + " " + high + " " + low);

    }
}