
/*
消費税 a % で 税抜き価格 b 円 の買い物をしました。

小数点以下は切り捨てられるものとして、税込価格いくらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final double tax = sc.nextInt();
        final double price = sc.nextInt();

        // 税率計算では、少数になるので、少数型で定義
        final double total = price * (1 + (tax / 100));
        System.out.println((int) total);
    }
}