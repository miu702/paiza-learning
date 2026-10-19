
/*
あなたは、脱出ゲームをしていて、部屋の鍵のところに "012" なるメモがあるのを見つけました。

これまでのゲーム結果から、このような暗号は数字が文字の穴の数に対応していて、かつ構成する文字は A, B, C のみであることがわかっています。
文字の穴の数は A が 1 個、B が 2 個、C が 0 個であるので、"012" は "CAB" を表すことがわかります。

このような暗号が与えられるので、復号した文字列を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] cipher = sc.nextLine().split("");

        // 辞書を作成する
        Map<String, String> conversionTable = new HashMap<>();
        conversionTable.put("0", "C");
        conversionTable.put("1", "A");
        conversionTable.put("2", "B");

        // 辞書を参考に変換する
        ArrayList<String> composite = new ArrayList<>();
        for (String c : cipher) {
            composite.add(conversionTable.get(c));
        }

        // 配列を半角スペースなしで出力する
        StringBuilder sb = new StringBuilder();
        for (String s : composite) {
            sb.append(s);
        }
        System.out.println(sb.toString());
    }
}