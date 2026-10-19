
/*
電子決済サービス Paiza Pay は、残高が 10,000 円を切っていると
自動で 10,000 円をチャージするサービスを始めることになりました。

残高が入力されるので、チャージするべきかどうか判断をし、
チャージする場合はチャージ後の残高、必要ない場合はそのままの残高を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int add = 10000;

        if (price < add) {
            final int addPrice = price + add;
            System.out.println(addPrice);
        } else if (price >= add) {
            System.out.println(price);
        }

    }
}