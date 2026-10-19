/*
あなたはバレンタインデーにもらったお菓子のお返しとして、
ホワイトデーにお菓子をプレゼントしようとしています。

バレンタインデーにもらったお菓子は、チョコレートかケーキのいずれかでした。
もらったお菓子よりも安いお返しをしては失礼だと考えたあなたは、
チョコレートをもらった場合はその 2 倍、ケーキをもらった場合はその 5 倍の金額の価格の
お返しをすることにしました。

もらったお菓子の種類と金額が与えられるので、お返しの金額を求めるプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String sweets = sc.next();
        final int price = sc.nextInt();

        // 変換表を作成する
        Map<String, Integer> priceDict = new HashMap<>();
        priceDict.put("chocolate", 2);
        priceDict.put("cake", 5);

        // お返しの金額を計算する
        final int returnPrice = price * priceDict.get(sweets);
        System.out.println(returnPrice);
    }
}