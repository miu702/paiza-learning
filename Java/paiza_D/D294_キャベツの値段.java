/*
あなたはキャベツを購入しようとしています。
キャベツは 1 玉と 1/2 玉で販売されています。

どちらで買うか迷ったあなたはひとまず 1 玉あたりにするといくら高いのかを求めることにしました。

キャベツ 1 玉の値段 n とキャベツ 1/2 玉の値段 m が改行区切りで与えられるので 1/2 玉を
1 玉分買った場合に 1 玉の値段 m に対していくら高いかを出力してください。

*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int full = sc.nextInt();
        final int half = sc.nextInt();
        
        
        // どのくらい高いか計算し、出力する
        final int half_d = half * 2;
        final int between = half_d - full;
        System.out.println(between);
    }
}