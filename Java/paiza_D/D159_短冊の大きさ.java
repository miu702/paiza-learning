
/*
あなたは入力された文字を短冊に印刷するプログラムを作成しています。

短冊には3行の文字列が印刷されます。
印刷する短冊の長さは 3 行のうち最も長い文字列 1 文字あたり 1 cmの長さとなります。

3行の短冊に印刷される文字列が入力されるので印刷される短冊の長さを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 入力 → 配列に変換する。
        Scanner sc = new Scanner(System.in);
        ArrayList<String> words = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            final String word = sc.next();
            words.add(word);
        }

        // 最大値を見つける
        int max = 0;
        for (String s : words) {
            final String[] s2 = s.split("");
            max = Math.max(max, s2.length);
        }

        System.out.println(max);
    }
}