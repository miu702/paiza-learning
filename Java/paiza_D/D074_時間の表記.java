/*
時刻のうち n 時の部分が日をまたいで 25 時となってしまった場合は 
1 時とするように 0 時から 23 時までの 24 時間表記として正しい数値に修正する
プログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int hours = sc.nextInt();

        // 時間を24時間までの表記にする
        final int days = 24;
        final int rest = hours % days;
        System.out.println(rest);

    }
}