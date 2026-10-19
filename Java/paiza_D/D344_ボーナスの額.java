
/*
あなたは給料のボーナスの額を計算しています。

1 ヶ月の給与 n 円に対してボーナスの額は m 倍の額になります。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1か月の給料と倍数を定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int coefficient = sc.nextInt();

        // ボーナスの額を計算し、出力する
        final int total = price * coefficient;
        System.out.println(total);
    }
}