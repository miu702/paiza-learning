
/*
あなたはプールで泳ぎの練習をしています。

50 メートルのプールを n 往復した時、合計で何メートルになるか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 往復数を定義する
        Scanner sc = new Scanner(System.in);
        final int roundTrip = sc.nextInt();

        // 合計の距離を計算する
        final int times = roundTrip * 2;
        final int unit = 50;
        final int total = unit * times;

        // 結果を出力する
        System.out.println(total);
    }
}