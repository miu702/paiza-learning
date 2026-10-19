/*
あなたはあるサービスに月額料金を払っています。
年間でいくらになるか気になったので計算することにしました。

月額 p 円の料金の時、 12 ヶ月でいくら払うことになるか出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();

        // 1年の金額を作成する
        final int year = 12;
        final int total = price * year;
        System.out.println(total);

    }
}