
/*
A 君は休日ショッピングモールに行き、商品 A ・商品 B をそれぞれ 2 個ずつ購入しました。
商品 A ・ 商品 B の値段が与えられるので、購入する商品の合計金額を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 商品の値段を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 合計の金額を計算する
        final int unit = 2;
        final int total = (A * unit) + (B * unit);
        System.out.println(total);
    }
}