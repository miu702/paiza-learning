
/*
あなたはお店で 1000 円以上会計をした場合に
100円割引するキャンペーンを開催することにしました。

会計の金額 p 円が与えられるので割引が適応された場合100円割引いた額、
割引が適応されない場合は p 円をそのまま出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 会計の金額を定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();

        // 1000円以上なら、割引をする
        final int limit = 1000;
        final int discount = 100;
        System.out.println(price >= limit ? price - discount : price);
    }
}