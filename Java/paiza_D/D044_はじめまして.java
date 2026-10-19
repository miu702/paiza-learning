/*
はじめましてのあいさつをしましょう。
名前が文字列 s1 で、性別が文字列 s2 (男性は "M", 女性は "F") で与えられます。
これに対し、男性なら "Hi, Mr. 〇〇(名前)" と、女性なら "Hi, Ms. 〇〇(名前)" と返してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数
        Scanner sc = new Scanner(System.in);
        String[] words = sc.nextLine().split(" ");

        // 変数を固定値にする
        final String name = words[0];
        final String gender = words[1];

        // 条件式にして、出力結果を分岐
        if (gender.equals("F")) {
            System.out.println("Hi, Ms. " + name);
        } else if (gender.equals("M")) {
            System.out.println("Hi, Mr. " + name);
        }
    }
}