
/*
あなたは曲名と歌手名を表示をするプログラムを作成しています。

曲名と歌手名が改行区切りで入力されるので曲名、歌手名の順に「/」区切りの1行で出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String word_1 = sc.next();
        final String word_2 = sc.next();

        // テンプレートリテラルを使用して、出力する
        final String sentence = String.format("%s/%s", word_1, word_2);
        System.out.println(sentence);

    }
}