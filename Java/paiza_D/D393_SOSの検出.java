
/*
あなたは通信データからSOSの信号を探すプログラムを作成しています。

長さ n の文字列 S が与えられるので "SOS" という文字列が含まれていれば "YES" 
含まれていなければ "NO" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を定義する
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        final String word = sc.next();

        // 対象の文字が含まれていると、YESと出力する
        final String target = "SOS";
        System.out.println(word.contains(target) ? "YES" : "NO");
    }
}