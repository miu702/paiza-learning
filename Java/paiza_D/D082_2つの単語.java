/*
あなたはしりとりアプリを作っています。
まず、手始めに同じ単語が出たかどうかは考慮せず 2 つの単語からしりとりをミスしたかどうかを判定する部分を作ることにしました。

先に出た単語 A とそれに続く単語 B がそれぞれ入力されます。
単語は必ず半角アルファベット小文字で構成された文字列です。
また、単語 A の最後の 1 文字は "n" ではないとします。

以下のルールを満たす時は "OK" そうでない場合は "NG" と出力するプログラムを作成してください。
・A の最後の 1 文字が B の最初の 1 文字と一致している。
・B の最後の 1 文字が "n" ではない。

*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String A = sc.next();
        final String B = sc.next();
        final String[] A_character = A.split("");
        final String[] B_character = B.split("");
        // 入力 → 変数に変換するend

        // 条件分岐に必要な変数を指定する
        final String left = A_character[A_character.length - 1];
        final String right = B_character[0];
        final String last = B_character[B_character.length - 1];
        // 条件分岐に必要な変数を指定するend

        // 条件式に沿って出力を切り替える
        if (left.equals(right) && !last.equals("n")) {
            System.out.println("OK");
        } else {
            System.out.println("NG");
        }
        // 条件式に沿って出力を切り替えるend

    }
}