
/*
あなたはスマホの通信料金の計算をしています。
1 GBごとの値段 a 円と通信量 n GBが与えられるので通信料金がいくらになるかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        final int price = Integer.parseInt(numberStr[0]);
        final int unit = Integer.parseInt(numberStr[1]);

        final int total = price * unit;
        System.out.println(total);
    }
}