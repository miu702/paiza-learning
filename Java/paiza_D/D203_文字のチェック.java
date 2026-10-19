
/*
あなたは文字列 s の中に文字 c が n 文字目に存在するかどうか確認するプログラムを作成しています。

文字列 s ,文字 c ,確認する文字列の位置 n が改行区切りで与えられるので、
文字列 s の n 文字目に文字 c が存在する場合は "Yes" と
存在しない場合は "No" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] word = sc.next().split("");
        final String target = sc.next();
        final int index = sc.nextInt();

        // インデックス番号を活用して、存在するか確認する
        System.out.println(word[index - 1].equals(target) ? "Yes" : "No");
    }
}