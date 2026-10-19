/*
あなたは PAIZA 大学の 7 科目からなる入学試験を受けました。
7 つの科目はすべて 100 点満点のテストで、平均点が合格点以上なら合格します。

あなたの 7 科目それぞれの点数と合格点が与えられるので、
合格する場合は"pass"を、不合格の場合は"failure"を出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");
        final int reference_value = sc.nextInt();

        // 合計得点を計算する
        int total = 0;
        for (String N : lines) {
            total += Integer.parseInt(N);
        }

        // 平均点を出し、基準点を超えていたら、合格する。
        final double average = total / lines.length;
        if (average >= reference_value) {
            System.out.println("pass");
        } else {
            System.out.println("failure");
        }

    }
}