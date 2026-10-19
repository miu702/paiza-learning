
/*
あなたは文字列を引用するプログラムを作成しています。

文字列 S が与えられるので文字列の先頭に ">" をつけて出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 出力データを作成する
        final String add = ">";
        final String output = String.format("%s%s", add, word);
        System.out.println(output);
    }
}