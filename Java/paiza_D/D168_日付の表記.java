/*
日本では日付を 2020年10月31日 と言ったように年、月、日の順に記載します。
一方アメリカなどでは 月、日、年の順で 10/31/2020 などと記載します。

日本で一般的な順の年、月、日の順に日付が改行区切りで与えられるので
アメリカなどで使われている形式で月/日/年の形式で出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String year = sc.next();
        final String month = sc.next();
        final String day = sc.next();

        // Javaのテンプレートリテラルを使用して、出力。(変数 + 変数でもOK！)
        final String fullDate = String.format("%s/%s/%s", month, day, year);
        System.out.println(fullDate);
    }
}