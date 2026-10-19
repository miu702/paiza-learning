/*
あなたは運悪く病気にかかってしまい入院しなくてはいけなくなりました。
しかし、嫌いな数字があり、その数字が含まれる部屋番号の病室に入ると治療が
うまく行かないのでは無いかと不安になってしまいます…。

そこで、部屋番号のどの桁にも嫌いな数字が含まれていない病室をリストアップして
入院先に伝えることにしました。

・1行目に嫌いな数字 n (0から9までの1桁の数字)
・2行目に病室の総数 m
・3行目以降に各病室の部屋番号を表す整数 r_i (1 <= i <= m)

が改行区切りで与えられるので、希望する病室の部屋番号をすべて改行区切りで出力して下さい。

もし、希望する病室が1つもない場合は"none" と出力して下さい。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 嫌いな数字と部屋の数を定義する
        Scanner sc = new Scanner(System.in);
        final String hate = sc.next();
        final int rooms = sc.nextInt();

        ArrayList<String> passing = new ArrayList<>();// 希望する部屋リスト
        for (int i = 0; i < rooms; i++) {
            final String room = sc.next();

            // containsで文字列が含まれるか？の調査ができるので、数値ではなく、文字列でそれぞれを定義する。
            if (!room.contains(hate))
                passing.add(room);

        }

        // 希望する部屋リストがあるとき、1つずつ出力する
        if (passing.size() > 0) {
            for (String p : passing)
                System.out.println(p);
        } else {
            System.out.println("none");
        }
    }
}