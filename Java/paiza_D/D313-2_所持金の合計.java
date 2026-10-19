
/*
A 君の所持金は a 円です。また B 君の所持金は b 円です。
A 君と B 君の合計の所持金は何円ですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 所持金を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 合計を計算し、出力する
        final int total = A + B;
        System.out.println(total);
    }
}