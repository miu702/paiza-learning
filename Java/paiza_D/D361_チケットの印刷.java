
/*
あなたはチケットの印刷をするプログラムを作成しています。

チケットにはアルファベットと数字を "-" 区切りで印刷する必要があります。

印刷するアルファベット c と数字 n が改行区切りで与えられるので "-" を区切り文字として印刷する文字列を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String word1 = sc.next();
        final String word2 = sc.next();

        // チケットの番号を作成する
        final String ticket = String.format("%s-%s", word1, word2);
        System.out.println(ticket);
    }
}