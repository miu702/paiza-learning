
/*
空港は、それぞれアルファベット3文字のコードを持っています。
例えば羽田空港のコードは HND です。
たくさんの社員を抱える会社の社長であるあなたは、
このようなコードを社員に割り当てることにしました。


コードは名前の頭から数えて 3 文字としたとき、
入力された名前に対して対応するコードを出力するプログラムを作成してください。

例えば、入力例 1 では paiza の頭 3 文字が対応するコードと
なるので pai と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 文字列なので、文字列.substring(左, 右)で切り取ることができる
        final int left = 0;
        final int right = 3;
        final String initial = word.substring(left, right);
        System.out.println(initial);
    }
}