
/*
あなたは天気予報を確認しています。
1 時間あたりの降水量を見て 24 時間でどれくらい降るのか気になりました。

1 時間あたりの降水量 n が与えられるので 24 時間の降水量を 24 × n として計算してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1時間の降水量を定義する
        Scanner sc = new Scanner(System.in);
        final int rain = sc.nextInt();

        // 24時間分を計算し、出力する
        final int day = 24;
        final int total = rain * day;
        System.out.println(total);
    }
}