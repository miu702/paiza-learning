
/*
A 君は 1 個 a 円の鞄を b 個持っています。
合計で何円かかりましたか。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 鞄の値段と、個数を定義
        Scanner sc = new Scanner(System.in);
        final int bag_price = sc.nextInt();
        final int times = sc.nextInt();

        // 合計値を求める
        final int total_price = bag_price * times;
        System.out.println(total_price);
    }
}