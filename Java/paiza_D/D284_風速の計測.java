
/*
あなたは春一番の基準に風速があることを知りました。
風速 8 m/s を基準とし判定するプログラムを作成することしました。

風速 w が与えられるので 8 以上であれば "OK" 8 未満であれば "NG" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int wind = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 8;
        System.out.println(wind >= limit ? "OK" : "NG");
    }
}