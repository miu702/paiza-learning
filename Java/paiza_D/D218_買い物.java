
/*
商品 A の値段は 1000 円です。B 君の所持金は N 円で、所持金が商品 A の金額以上なら購入できます。
B 君が商品 A を購入できるなら Yes を、購入できないなら No を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int cash = sc.nextInt();

        final int price = 1000;
        System.out.println(cash >= price ? "Yes" : "No");
    }
}