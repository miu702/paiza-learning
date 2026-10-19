/*
オーケストラなどで合奏をする際、演奏前に全ての楽器が同じ高さの音を出してチューニングを行います。
このとき、他の楽器と自分の楽器の高さが少しでも異なると、音がうなって聞こえてしまいます。


他の楽器の音の高さを F_1 とし、自分の楽器の音の高さを F_2 としたとき、
うなりの程度は |F_1 - F_2| で求められます。

他の楽器の音の高さと自分の楽器の音の高さが与えられるので、
うなりの程度がどの程度あるか求めるプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        // 計算のため数値化する
        final int A = Integer.parseInt(lines[0]);
        final int B = Integer.parseInt(lines[1]);

        // Math.abs(数値)で絶対値を求めることができる
        final int abs = Math.abs(A - B);
        System.out.println(abs);
    }
}