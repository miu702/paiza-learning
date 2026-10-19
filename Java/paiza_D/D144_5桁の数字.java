
/*
あなたは学校で 2 進数表記について学習したので、2 進数表記の数字を 10 進数に直すプログラムを作成しようと思っています。
5 桁からなる 2 進数表記の数が与えられるので、10 進数に直して出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 基数変換するには、文字列で投入する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.next();

        // Integer.parseInt(文字列, 変換先の基数)で変換することができる
        final int output = Integer.parseInt(numberStr, 2);
        System.out.println(output);
    }
}