
/*
あなたは薬を処方されました。

n 日分の薬が処方され毎日、朝と昼と晩の合計 3 回 m 錠ずつ飲みます。
合計で何錠の薬を処方されたかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 何日分と1回の量を定義する
        Scanner sc = new Scanner(System.in);
        final int days = sc.nextInt();
        final int ones = sc.nextInt();

        // 1日の回数を定義する
        final int times = 3;

        // 合計の量を計算し、出力する
        final int total = ones * times * days;
        System.out.println(total);
    }
}