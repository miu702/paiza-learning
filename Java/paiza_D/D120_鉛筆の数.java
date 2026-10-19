
/*
あなたは鉛筆を箱買いしました。それぞれの箱には1ダースの鉛筆が入っています。

合計で何ダースの鉛筆を買ったかが入力されるので、買った鉛筆の本数を出力してください。
1ダースは12本です。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int box = sc.nextInt();

        // 合計の量を計算する
        final int unit = 12;
        final int total = unit * box;
        System.out.println(total);
    }
}