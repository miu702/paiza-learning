
/*
1 から 10 の整数 N と 10 個の単語が与えられます。
10の単語の中から N 番目の単語を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberstr = sc.nextLine();
        final String[] wordList = sc.nextLine().split(" ");

        // 配列の中から、要素を出力する
        final int index = Integer.parseInt(numberstr);
        final String output = wordList[index - 1];
        System.out.println(output);

    }
}