
/*
あなたは気温の寒暖差の激しい季節に体調を崩さないように気温の寒暖差が
確認するプログラムを作ることにしました。

最高気温 H 度と最低気温 L 度がスペース区切りで入力されるので
寒暖の差が何度かを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int high = Integer.parseInt(numberStr[0]);
        final int low = Integer.parseInt(numberStr[1]);

        // 条件に沿って出力する
        final int between = high - low;
        System.out.println(between);
    }
}