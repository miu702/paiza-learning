/*
あなたは年月日を出力するプログラムを作成しています。

年 y 、月 m 、 日 d が改行区切りで与えられるので
"/" 区切りの 1 行で出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 年、月、日を定義する
        Scanner sc = new Scanner(System.in);
        final int year = sc.nextInt();
        final int month = sc.nextInt();
        final int day = sc.nextInt();

        // 日付を作成し、出力する
        final String fullDate = String.format("%d/%d/%d", year, month, day);
        System.out.println(fullDate);
    }
}