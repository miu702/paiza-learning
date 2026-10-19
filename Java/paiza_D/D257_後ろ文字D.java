
/*
ある文字列が与えられるので、その文字列の一番最後の文字が d であれば Yes を、
そうでなければ No を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 文字列を配列にする
        Scanner sc = new Scanner(System.in);
        final String[] word = sc.next().split("");

        // 条件に沿って出力する
        final String check = word[word.length - 1];
        final String target = "d";
        System.out.println(check.equals(target) ? "Yes" : "No");
    }
}