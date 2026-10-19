
/*
PAIZA さんの行きつけのカラオケ店では、利用料金が 30 分ごとに X 円に設定されています。
料金の境界はちょうど 30 分で、1 分でも越えると次の 30 分の料金を支払う必要があります。

たとえば、61 分利用した場合、支払う利用料金は 90 分のものになります。

PAIZA さんが部屋を利用した時間が与えられるので、PAIZA さんが支払う利用料金を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int time = sc.nextInt();

        // 30で割り、30の塊がいくつあるか？あまりがあるか？を確認する
        final int ones = 30;
        final int unit = time / ones;
        final int rest = time % ones;

        // 料金形態を参考に料金を出力する
        final int total_price = rest > 0 ? price * (unit + 1) : price * unit;
        System.out.println(total_price);
    }
}