
/*
あなたは人が集まる施設の人の密度の計算をしています。
一定の面積を確保するために以下のような計算をすることにしました。

1 人あたりに必要な面積 N と人数 M が与えられるので総面積がいくつ必要かを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int area = sc.nextInt();
        final int people = sc.nextInt();

        // エリアの合計を求める
        final int total = area * people;
        System.out.println(total);
    }
}