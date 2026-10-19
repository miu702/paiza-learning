
/*
あなたはソースコードを読んでいる時に区切り文字として「_」(アンダースコア)と「-」(ハイフン)が混在している文字列の存在に気が付きました。
そこで「_」か「-」どちらか一方に統一するため以下のルールで変換することにしました。

・「_」と「-」のうち数が多い方に統一
・もし同数の場合は「_」に統一
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();
        final String[] checkWord = word.split("");
        // 入力 → 変数に変換するend

        // どっちが多いかカウントする
        int countA = 0;// _カウント用
        int countB = 0;// -カウント用
        for (String w : checkWord) {
            if (w.equals("_")) {
                countA++;
            } else if (w.equals("-")) {
                countB++;
            }
        }
        // どっちが多いかカウントするend

        // 条件に沿って出力をする
        if (countA >= countB) {
            final String output = word.replace("-", "_");
            System.out.println(output);
        } else if (countA < countB) {
            final String output = word.replace("_", "-");
            System.out.println(output);
        }
        // 条件に沿って出力をするend

    }
}