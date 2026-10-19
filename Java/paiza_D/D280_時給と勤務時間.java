
/*
あなたのアルバイト先の時給と、先月の勤務時間が分単位で与えられます。
給料日に振り込まれる給与額を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int hour_pay = Integer.parseInt(numbers[0]);
        final int minutes = Integer.parseInt(numbers[1]);

        // 単位を分に合わせて、計算をする
        final int minutes_pay = hour_pay / 60;
        final int total = minutes_pay * minutes;
        System.out.println(total);
    }
}