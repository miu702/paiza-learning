
/*
ある文字列 S を出力する回数 n 回、ある文字列 S が改行区切りで与えられるので、
文字列 S を改行区切りで n 回出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 回数と文字列を定義する
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        final String word = sc.next();

        // 回数分出力する
        for (int i = 0; i < number; i++) {
            System.out.println(word);
        }

    }
}