/*
あなたは天気予報のデータを使って梅雨入りかどうかを判断することにしました。
梅雨の判断は色々な基準がありますが 1 週間( 7 日間)のうち 5 日間以上が雨であれば梅雨と判断することに決めました。

7 日間分の天気予報が、雨であれば 1 、晴れであれば 0 としてスペース区切りで入力されます。
雨の日が 5 日間以上であれば「yes」、未満であれば「no」と出力するプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        int rainyCount = 0;
        for (String w : numberStr) {
            if (w.equals("1"))
                rainyCount++;
        }

        final int limit = 5;
        System.out.println(rainyCount >= limit ? "yes" : "no");
    }
}