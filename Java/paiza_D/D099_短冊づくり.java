
/*
7月7日は七夕です。
あなたは短冊を印刷するプログラムを作成することにしました。

文字列 S が入力されるので1文字ずつ改行し縦書きに出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 改行区切りで出力するには、配列にした後に、\n(改行の意味)を活用する
        final String[] words = sc.next().split("");
        System.out.println(String.join("\n", words));
    }
}