
/*
長さ n の文字列 S が入力されるので文字を逆順にして出力してください。
入力は長さ n 、文字列 S が改行区切りで入力されます。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        final String words = sc.nextLine();

        // StringBuilder + reverse()で元の変数を破壊せずに操作できる
        StringBuilder sb = new StringBuilder();
        sb.append(words);
        sb.reverse();
        System.out.println(sb.toString());
    }
}