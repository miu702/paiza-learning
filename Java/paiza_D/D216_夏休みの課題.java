
/*
A 君には夏休みの課題が 500 ページあります。
A 君は一昨日に a ページ、 昨日に b ページ分の課題を終わらせました。

課題は残り何ページですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();
        final int total = 500;

        // 残りページを計算する
        final int rest = total - (A + B);
        System.out.println(rest);
    }
}