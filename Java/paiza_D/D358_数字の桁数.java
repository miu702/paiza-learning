
/*
あなたは入力された数字の桁数を表示するプログラムを作成しています。

ある数字 n が与えられるので桁数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 数値を文字列型で定義する
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.next();

        // 変数.lengthで配列にせずにそのまま長さを知ることができる。
        final int size = numberStr.length();
        System.out.println(size);
    }
}