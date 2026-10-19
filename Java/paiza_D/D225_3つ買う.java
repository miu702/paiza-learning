
/*
1 個の値段が N 円のリンゴがあります。このリンゴを 3 つ買ったとき合計で何円になりますか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 価格を定義
        Scanner sc = new Scanner(System.in);
        final int apple = sc.nextInt();

        // 合計値を求める
        final int times = 3;
        final int total = apple * times;
        System.out.println(total);
    }
}