
/*
あなたはある文字列から 0 から 9 のいずれかの数字の個数を数えています。

個数を数える数字 n とある文字列 s が改行区切り与えられるので
s に含まれる n の個数を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String target = sc.nextLine();
        final String[] words = sc.nextLine().split("");

        // キーと値のペアで管理したいのでHashMapを使用する。
        Map<String, Integer> counts = new HashMap<>();
        for (String w : words) {
            counts.put(w, counts.getOrDefault(w, 0) + 1);
        }

        // HashMapから要素を取得するには、getを使用する。
        System.out.println(counts.get(target) != null ? counts.get(target) : 0);
    }
}
