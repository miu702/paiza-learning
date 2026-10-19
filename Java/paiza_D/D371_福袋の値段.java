
/*
あなたは福袋を買って中身を確認しています。

あなたが購入した福袋の値段は n 円で 2 つの商品が入っています。
2つの商品の定価 a 円、 b 円を調べました。

定価に対していくらお得な福袋であったかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 商品の価格を定義する
        Scanner sc = new Scanner(System.in);
        final int N = sc.nextInt();
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 利益を計算し、出力する
        final int profit = (A + B) - N;
        System.out.println(profit);
    }
}