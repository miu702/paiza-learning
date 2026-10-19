
/*
あなたは漫画を全巻購入しようとしています。

1 巻の値段が p 円の漫画を全 n 巻購入しようとしています。
合計でいくらになるか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1巻の値段と巻数を定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int times = sc.nextInt();

        // 合計の金額を計算し、出力する
        final int total = price * times;
        System.out.println(total);
    }
}