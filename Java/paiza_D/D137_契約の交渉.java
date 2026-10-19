/*
あなたはある会社と取引をしていて、先日 10 個の要求を提出したところ、
ちょうど今要求の可否を書いた紙が送られてきました。
その紙には相手方が承諾した要求については yes の頭文字 "y"、
承諾しなかった要求については no の頭文字 "n" として、"y" と "n" のみが 10 個並んでいました。


このとき、いくつの要求が承諾されたかを返すプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        // 許可(y)の数をカウントする
        int count = 0;
        for (String w : words) {
            if (w.equals("y"))
                count++;
        }

        System.out.println(count);
    }
}