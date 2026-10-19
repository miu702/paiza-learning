
/*
あなたはアメリカで働くことになったので、英語の勉強をしています。
ある雑誌を読んでいると「asap」という表現が出てきて、これは
「as soon as possible」の頭文字を取って略したものであることがわかりました。

いくつかの単語からなる表現が与えられるので、
同じように単語の頭文字を前から順に並べる形で略したものを出力してください
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        final String[] words = sc.nextLine().split(" ");

        // 単語のイニシャルを作成する
        ArrayList<Character> initial = new ArrayList<>();
        for (String w : words) {
            initial.add(w.charAt(0));
        }

        // 作成した配列を半角スペースなしで出力する
        StringBuilder sb = new StringBuilder();
        for (Character s : initial) {
            sb.append(s);
        }
        System.out.println(sb.toString());

    }
}