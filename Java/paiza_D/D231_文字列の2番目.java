
/*
ある文字列 S が与えられます。A 君は文字列の 2 番目の文字が気になりました。
文字列Sの 2 番目の文字を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();
        final int index = 2;

        // 変数.charAt(インデックス番号)とすると、1つの文字のみを出力することができる。
        final Character pickUp = word.charAt(index - 1);
        System.out.println(pickUp);
    }
}