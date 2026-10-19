/*
あなたは洗剤の詰め替えを購入しようとしています。

詰め替えるための容器の容量 x ミリリットルと購入する詰め替えの量 y ミリリットルがこの順に
改行区切りで与えられるので詰め替えるための容器を何本満たせるかと余った量を改行区切りで出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int container = sc.nextInt();
        final int spare = sc.nextInt();

        // 計算し、出力する
        final int unit = spare / container;
        final int rest = spare % container;
        System.out.println(unit);
        System.out.println(rest);
    }
}