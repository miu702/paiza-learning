
/*
あなたはある呪文の文字列を解読するためにプログラムを作成しています。
文字列の奇数番目を取り出して順に並べると解読できることがわかったあなたは解読プログラムを書くことにしました。

文字列 S が与えられるので奇数文字目を取り出し、取り出した順に並べ 1 行で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力を配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.next().split("");

        // 長さの可変が可能な配列を作成し、インデックス番号が偶数の要素を投入する。
        ArrayList<String> output = new ArrayList<>();
        for (int i = 0; i < words.length; i++) {
            if (i % 2 == 0)
                output.add(words[i]);
        }

        // 半角スペースなしで出力する
        System.out.println(String.join("", output));
    }
}