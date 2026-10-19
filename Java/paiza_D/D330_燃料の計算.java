
/*
あなたは暖房器具の燃料の購入計画を立てています。

1日に n リットルの燃料を消費します。 m 日分で何リットルになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1日の燃料と日にちを定義する
        Scanner sc = new Scanner(System.in);
        final int ones = sc.nextInt();
        final int days = sc.nextInt();

        // 合計の量を計算し、出力する
        final int total = ones * days;
        System.out.println(total);
    }
}