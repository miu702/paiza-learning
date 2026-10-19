
/*
ある文字列 S が与えられます、S を 3 回繰り返して出来る文字列を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列Sを定義
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 3回繰り返す
        final String output = String.format("%s%s%s", word, word, word);
        System.out.println(output);
    }
}