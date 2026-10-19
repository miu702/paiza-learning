
/*
箱の中に飴が N 個あります。この飴を 10 人で分けるとき、1 人何個もらえますか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int candy = sc.nextInt();

        // 10人で分ける
        final int member = 10;
        final int ones = candy / member;
        System.out.println(ones);
    }
}