
/*
A 君は株取引が大好きです。A 君はもともと X 円所持していましたが、
昨日株価が上昇したため Y 円儲かりました。
しかし、今日株価が下落したため Z 円損してしまいました。

A 君の現在の所持金はいくらですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 所持金、利益、損失をそれぞれ定義
        Scanner sc = new Scanner(System.in);
        final int amount = sc.nextInt();
        final int profit = sc.nextInt();
        final int loss = sc.nextInt();

        // 現在の所持金を計算し、出力する
        final int current = amount + profit - loss;
        System.out.println(current);
    }
}