
/*
あなたはバッテリー残量を表示するプログラムを作成しています。

バッテリー残量は 0 から 100 の整数値 n で与えられます。
バッテリー残量 n が 10 以下の場合は "low" と出力しそれ以外は n を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // バッテリー量を定義する
        Scanner sc = new Scanner(System.in);
        final int battery = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 10;
        System.out.println(battery <= limit ? "low" : battery);
    }
}