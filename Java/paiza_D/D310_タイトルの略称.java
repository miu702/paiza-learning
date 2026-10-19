
/*
あなたはゲームのタイトルの省略表記するためのプログラムを作成しています。

タイトルの単語が 3 つ改行区切りで与えられるで各単語の 1 文字目を繋げた 3 文字を略称として 1 行で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力を配列に変換する
        Scanner sc = new Scanner(System.in);
        final int number = 3;
        ArrayList<String> words = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final String word = sc.next();
            words.add(word);
        }

        // 配列の要素から、1文字ずつ取り出す。Stringのまま取り出すには、変数.substring(左, 右 + 1)とする。
        ArrayList<String> output = new ArrayList<>();
        for (String W : words) {
            final String o = W.substring(0, 1);
            output.add(o);
        }

        // 半角スペースなしで出力する
        System.out.println(String.join("", output));
    }
}