
/*
あなたは 5 つの数字を足し算するプログラムを作成しています。しかし、出力したい数字は下一桁のみです。

5 つの数字がスペース区切りで入力されるので、全てを足した結果の下一桁を出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numbersStr = sc.nextLine().split(" ");

        // for-of文と同じ方式で合計を求める
        int total = 0;
        for (String N : numbersStr) {
            total += Integer.parseInt(N);
        }

        // String.valueOf(数値)で数値→文字列にできる
        final String totalStr = String.valueOf(total);

        // 要素.charAt(インデックス番号)で要素の1文字を取り出すことができる
        System.out.println(totalStr.charAt(totalStr.length() - 1));
    }
}