/*
あなたは今だるま落としで遊んでいます。
そのだるま落としは 5 段の木片からなり、
その木片には 1 つにつき 1 つの英字小文字が書いてあります。

木片を飛ばす前の文字列と、飛ばしたのが何段目の木片であったかが与えられるので、
木片を飛ばした後の文字列を求めるプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");
        final int index = sc.nextInt();

        // 指定した要素を削除する
        ArrayList<String> output = new ArrayList<>();
        for (int x = 0; x < words.length; x++) {
            if (x != index - 1)
                output.add(words[x]);
        }

        // 半角スペースで結合する
        StringBuilder sb = new StringBuilder();
        for (String s : output) {
            sb.append(s);
        }
        System.out.println(sb.toString());
    }
}