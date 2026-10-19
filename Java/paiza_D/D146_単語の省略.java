
/*
ある単語が与えられるので、母音を削除した結果の文字列を出力するプログラムを作成してください。
なお、母音とは 「a, e, i, o, u」 のことを指しています。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        // 許可リスト、禁止リストを作成する。
        Set<String> not_allowed = new HashSet<>(
                Arrays.asList("a", "i", "u", "e", "o"));

        // 配列の要素を1つずつループし、禁止リストにない時に処理をする
        ArrayList<String> output = new ArrayList<>();
        for (String w : words) {
            // 禁止リストにない時、出力用配列に追加
            if (!not_allowed.contains(w)) {
                output.add(w);
            }
        }

        // StringBuilderを利用して、半角スペースなしで出力する
        StringBuilder sb = new StringBuilder();
        for (String o : output) {
            sb.append(o);
        }
        System.out.println(sb.toString());

    }
}