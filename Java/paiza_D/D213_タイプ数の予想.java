
/*
あなたは 1 年間 でどれくらいキーボードのキーを押しているかが気になり概算することにしました。

1 日のキーボードのキーを押した回数 N が与えられるので 365 日間で何回になるか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int tips = sc.nextInt();
        final int year = 365;

        // 合計値を求める
        final int total = tips * year;
        System.out.println(total);
    }
}