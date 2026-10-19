
/*
ある小学校では、冬のスポーツとしてマラソンを推奨しています。
もっとも、ただ走るだけでは面白味に欠けるため、
具体的に走った総距離を計算することで生徒のやる気を引き出すことにしました。

そこで、校庭一周の距離とある生徒の走った周数が与えられるので、
その生徒が走った総距離を計算するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int schoolyard = sc.nextInt();
        final int laps = sc.nextInt();

        // 合計値を計算し、出力する
        final int total = schoolyard * laps;
        System.out.println(total);
    }
}