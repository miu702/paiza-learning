
/*
あなたは電気代の計算機を作っています。

1 時間 1 キロワットで 25 円かかるとします。
n キロワットの電気を連続して使ったとき、 24 時間でいくらの料金になるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int use = sc.nextInt();

        // 計算し、出力
        final int unit = 25;
        final int day = 24;
        final int totalPrice = unit * use * day;
        System.out.println(totalPrice);
    }
}