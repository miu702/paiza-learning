/*
2 つの数値 a と b が a, b の順でスペース区切りで与えられるので 
b, a の順でスペース区切りで出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split(" ");

        // テンプレートリテラルを使用して、位置を変更する
        final String output = String.format("%s %s", words[1], words[0]);
        System.out.println(output);

    }
}