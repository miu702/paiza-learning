/*
入力される文字数 n と n 文字分の文字が1文字ずつ改行区切りで入力されます。
n 個の文字を全て結合し1つの文字列として1行で出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // ArrayListを使って、配列を作成する
        ArrayList<String> words = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final String word = sc.next();
            words.add(word);
        }

        // 配列をStringBuilderを使って半角スペースなしで出力
        StringBuilder sb = new StringBuilder();
        for (String w : words) {
            sb.append(w);
        }
        System.out.println(sb);
    }
}