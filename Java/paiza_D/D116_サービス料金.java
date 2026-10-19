
/*
あるお店では、お会計の金額の下二桁、100 円未満の部分を割引サービスしています。
例えば 1,080 円の場合、80 円割引されます。

割引前のお会計の金額が与えられるので、割引後の金額を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.next();

        // 切り取るための位置を決定する
        final int length = numberStr.split("").length;
        final String left = numberStr.substring(0, length - 2);

        // 金額を作成する
        final String add = "00";
        final String price = String.valueOf(left) + add;
        System.out.println(price);
    }
}