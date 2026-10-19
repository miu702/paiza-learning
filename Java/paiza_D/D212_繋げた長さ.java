
/*
ある棒の長さ N が与えられます。この棒を 10 本つなげたときにできる棒の長さを求めてください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int rod = sc.nextInt();
        final int unit = 10;

        // 合計値を求める
        final int total = rod * unit;
        System.out.println(total);
    }
}