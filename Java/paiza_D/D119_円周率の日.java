
/*
1 から 15 までの整数 N が入力されるので、円周率を小数点第 N 位まで出力してください。
例えば N = 2 の場合、答えは 3.14 となります。

また、円周率の小数点第 15 位までは 3.141592653589793 です。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        final String pi = "3.141592653589793";

        // substringを使って文字列の切り取りを行う。「3.」があるので、+2をする
        final String output = pi.substring(0, number + 2);
        System.out.println(output);

    }
}