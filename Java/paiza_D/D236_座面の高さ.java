
/*
あなたは椅子の座面の適切な高さを計算するプログラムを作成しています。
一般的に適切な座面の高さは身長の 4 分の 1 と言われているのでそれに従って計算することにしました。

身長 n cmが与えられるので 4 で割った数値を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int height = sc.nextInt();

        // 座面の高さを計算する
        final int divisor = 4;
        final int seat = height / divisor;
        System.out.println(seat);
    }
}