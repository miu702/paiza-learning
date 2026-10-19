/*
あなたは忘年会の幹事を任されました。
お店を予約しようと考えましたが、お酒を飲まない人がおり、
お酒飲み放題をつけなくていい人が居ることに気が付きました。

お酒飲み放題がある場合は 6000 円、お酒飲み放題がない場合は 4000円のお店において
お酒飲み放題をつける人数が n 人、お酒飲み放題をつけない人数が m 人

それぞれ与えられるので合計が何円かを出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        // 人数を固定する
        final int A = Integer.parseInt(lines[0]);
        final int B = Integer.parseInt(lines[1]);

        // 金額を定義する
        final int alc = 6000;
        final int not_alc = 4000;

        // 合計を計算する
        final int total_price = alc * A + not_alc * B;
        System.out.println(total_price);
    }
}