/*
あなたはハロウィンに向けてお菓子を用意しています。
n 人に p 円のお菓子を 1 人ごとに m 個用意することにしました。

お菓子を渡す人数 n 人、お菓子の値段 p 円、1 人ごとに用意する
お菓子の個数 m 個が改行区切りで与えられるので合計で何円になるか出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // お菓子を渡す人数、お菓子の値段、お菓子の個数を定義する
        Scanner sc = new Scanner(System.in);
        final int member = sc.nextInt();
        final int price = sc.nextInt();
        final int sweets = sc.nextInt();

        // 合計の価格を計算する
        final int total = (price * sweets) * member;
        System.out.println(total);
    }
}