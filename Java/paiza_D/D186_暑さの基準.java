
/*
あなたは気温から真夏日を確認するプログラムを作成しています。


真夏日とは気温が 30 度以上、35 度未満と定義します。

気温 t が入力されるので、真夏日であれば "M" と出力し、
それ以外の場合は入力された気温をそのまま出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int temperature = sc.nextInt();

        // 条件に沿って出力する
        final int under = 30;
        final int upper = 35;
        if (temperature >= under && temperature < upper) {
            System.out.println("M");
        } else {
            System.out.println(temperature);
        }
    }
}