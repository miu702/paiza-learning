
/*
あなたは食事のカロリーの計算をしています。
主食のお米のカロリーを計算することにしました。

1 合あたり 540 kcalとして1日に食べるお米の量 n 合が与えられるので何 kcal摂取するのかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int unit = sc.nextInt();

        // 計算し、出力する
        final int rice = 540;
        final int total = rice * unit;
        System.out.println(total);
    }
}