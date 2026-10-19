
/*
1 列が N 字で、 C 列ある原稿用紙があります。
この原稿用紙に最大で何字書くことができるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int ones = sc.nextInt();
        final int col = sc.nextInt();

        // 合計を計算し、出力する
        final int total = ones * col;
        System.out.println(total);
    }
}