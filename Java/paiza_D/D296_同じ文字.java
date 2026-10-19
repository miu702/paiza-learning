
/*
あなたは文字列に関するプログラムを書いています。

整数 n とある 1 文字 c が与えられます。文字 c を n 個並べた文字列を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int times = sc.nextInt();
        final String word = sc.next();

        // 指定した回数を繰り返す
        ArrayList<String> words = new ArrayList<>();
        for (int i = 0; i < times; i++) {
            words.add(word);
        }

        // 半角スペースなしで出力する
        System.out.println(String.join("", words));
    }
}