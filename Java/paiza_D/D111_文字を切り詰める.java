
/*
あなたはある文字を表示するプログラムを作成しています。

しかし、文字を表示可能な文字数に限りがあることに気が付きました。
とりあえず表示をするために先頭 1 文字目から表示領域分の文字を取り出すことにしました。

表示可能な文字数 n と文字列 S が入力されるので、文字列 S のうち先頭から n 文字を出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int right = sc.nextInt();
        final String word = sc.next();

        // Javaで変数の一部を切り取るには変数.substring(left, right)とする
        final String cutWord = word.substring(0, right);
        System.out.println(cutWord);
    }
}