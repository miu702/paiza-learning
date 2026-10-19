
/*
あなたはコンピュータを使って非常に重たい計算をしています。
画面には計算があと何時間で終了するかが表示されていました。
これが何日に相当するかを出力してください。

ただし、数日ピッタリで計算が終了するとは限りません。
計算が終了している最小の日数を出力してください。
つまり、40 時間であれば 1 日と 16 時間なので 2 日となります。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int hour = sc.nextInt();

        // 日にちと時間を計算する
        final int dayTime = 24;
        final int month = hour / dayTime;
        final int rest = hour % dayTime;

        // 合計の日数を計算する
        if (rest == 0) {
            System.out.println(month);
        } else if (rest > 0) {
            System.out.println(month + 1);
        }

    }
}