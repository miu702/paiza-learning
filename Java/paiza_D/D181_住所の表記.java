/*
あなたは住所の表示をするプログラムを作成しています。

番地、住居番号、部屋番号の3つの数字が改行区切りで
入力されるので「-」区切りで出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String number_1 = sc.next();
        final String number_2 = sc.next();
        final String number_3 = sc.next();

        // テンプレートリテラルを使用して、出力する
        final String address = String.format("%s-%s-%s", number_1, number_2, number_3);
        System.out.println(address);
    }
}