/*
あなたはとある数値の集計をするプログラムを作成しています。文字列で保存された記録から数字のみを取り出したいです。
対象の文字列は数字が0以上の整数値 n 、単位が必ず1文字以上の半角アルファベットで構成された文字列 s が結合した形で表されます。

結合された文字列から整数値 n だけを出力するプログラムを作成してください。

*/

/*
1、Javaでは、import java.util.regex.Pattern;とimport java.util.regex.Matcher;
の2つを追加することで正規表現を使うことができる
*/
import java.util.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 2、Javaでは、正規表現パターン作成→検索対象を設定→一致箇所検索→一致文字取得をする
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(word);
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
}