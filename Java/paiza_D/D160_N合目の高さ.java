
/*
あなたは山の高さを表す「合」という単位を計算することにしました。
山の高さを表す単位「合」は山の高さの 10 分の 1 を 1 単位として計算することにします。

山の高さ N メートルと M 合目が与えられるので M 合目の高さは何メートルかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int full = sc.nextInt();
        final int station = sc.nextInt();

        // 計算をする。割り算があるので、安全のため、少数で計算する。
        final double current = (full / 10) * station;
        System.out.println((int) current);
    }
}