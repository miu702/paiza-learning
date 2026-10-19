
/*
あなたは通販サイトのセールの価格を決めています。

ある商品の価格 p 円と割引額 x 円が改行区切りで与えられます。

p - x 円として割引後の価格を出力してください。
ただし割引額が商品の価格以上の場合はすべて 1 円として出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 価格と割引額を定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int discount = sc.nextInt();

        // 条件に沿って出力する
        System.out.println(price > discount ? price - discount : 1);
    }
}