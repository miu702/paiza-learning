
/*
あなたは、毎日万歩計をつけて外出することにしていて、
家に帰ると万歩計の数字をノートに記録しています。

1 日あたりどの程度歩いたのか知りたくなったあなたは、
1 日の平均歩数を計算してみることにしました。記録した日数と、
歩数のデータが与えられるので、1 日あたりの歩数の平均を求めるプログラムを作成してください。

平均とは与えられた値の合計をデータの数で割った値を指します。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int days = sc.nextInt();

        // 配列をそのまま入力 → 変数に変換する。
        ArrayList<Integer> stepCount = new ArrayList<>();
        for (int i = 0; i < days; i++) {
            final int step = sc.nextInt();
            stepCount.add(step);
        }

        // 合計値を求める
        int total = 0;
        for (int step : stepCount) {
            total += step;
        }

        // ArrayListはsize()で要素数を取得できる
        final int average = total / stepCount.size();
        System.out.println(average);
    }
}