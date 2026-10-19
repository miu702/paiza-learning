/*
あなたは日記を書いています。日記のタイトルに日付を付けて保存することにしました。

月 m 、日付 d 、タイトルの文字列 S がそれぞれ改行区切りで与えられるので
"m/d-S" という形式で出力して下さい。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 月、日、タイトルを定義する
        Scanner sc = new Scanner(System.in);
        final int month = sc.nextInt();
        final int day = sc.nextInt();
        final String title = sc.next();

        // テンプレートリテラルを使用して、データを作成する
        final String fullName = String.format("%d/%d-%s", month, day, title);
        System.out.println(fullName);
    }
}