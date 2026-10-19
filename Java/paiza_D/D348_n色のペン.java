
/*
あなたは n 色のペンを 1 本ずつ用意しようとしています。
各ペンの価格は共通で p 円となっています。

合計でいくらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 色の数と1色の値段を定義する
        Scanner sc = new Scanner(System.in);
        final int color = sc.nextInt();
        final int price = sc.nextInt();

        // 合計金額を計算し、出力する
        final int total = color * price;
        System.out.println(total);
    }
}