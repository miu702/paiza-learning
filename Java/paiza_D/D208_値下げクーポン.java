/*
あなたは購入金額から値下げされるクーポン券を持っています。

購入金額 x とクーポン券で値下げされる額 y が与えられます。
値下げ後の価格を出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // 数値に変換する
        final int price = Integer.parseInt(numberStr[0]);
        final int cut = Integer.parseInt(numberStr[1]);

        // 計算し出力する
        final int rest = price - cut;
        System.out.println(rest);
    }
}