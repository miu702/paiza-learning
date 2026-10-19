
/*
あなたは買い物をしています。

買い物の合計金額 n 円と支払った額 m 円が改行区切りで与えられます。
お釣りがいくらかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int pay = sc.nextInt();

        // おつりの計算をする
        final int rest = Math.abs(price - pay);
        System.out.println(rest);
    }
}