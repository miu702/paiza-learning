/*
A 君は 1 日 N ページ問題集を進めます。A 君がこのペースで 100 日間、
問題集を進めると 100 日後には何ページ終わりますか？
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int pages = sc.nextInt();

        // 合計値を求める
        final int days = 100;
        final int total = pages * days;
        System.out.println(total);
    }
}