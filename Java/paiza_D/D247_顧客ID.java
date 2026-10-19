
/*
ある銀行では顧客がつけたニックネームを表す文字列 S の先頭の文字と最後の文字をつなぎ合わせた
文字列 X にランダムな数字を加えたものを ID にしています。

文字列 X を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ニックネームを定義
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.next().split("");

        // id(文字列X)を作成する。
        final String left = words[0];
        final String right = words[words.length - 1];
        final String userId = String.format("%s%s", left, right);
        System.out.println(userId);
    }
}