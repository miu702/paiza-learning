
/*
半角アルファベット文字列 s と 整数 n が入力されます。
文字列 s の1番左の文字を 1 文字目とし n 文字目のアルファベットを出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力処理を実施する
        Scanner sc = new Scanner(System.in);
        String[] lines = sc.nextLine().split(" ");

        // それぞれの変数に変換する
        final String[] word = lines[0].split("");
        final int number = Integer.parseInt(lines[1]);

        // インデックス番号を利用して、出力する
        System.out.println(word[number - 1]);
    }
}