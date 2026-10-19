
/*
あなたはダイエットをしています。
合計カロリーの目標値 X と朝昼晩の 3 食分のカロリー Y_1, Y_2, Y_3 が与えられます。

3 食分のカロリー合計が目標値以下の場合 "OK" と出力し、
目標値より大きい場合は "NG" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String limitStr = sc.nextLine();
        final String[] calories = sc.nextLine().split(" ");

        // 合計値を計算する
        int total = 0;
        for (String c : calories) {
            total += Integer.parseInt(c);
        }

        // 合計値が上限以下なら、OK。超えるならNGと出力する。
        final int limit = Integer.parseInt(limitStr);
        System.out.println(total <= limit ? "OK" : "NG");
    }
}