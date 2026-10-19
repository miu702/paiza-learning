
/*
あなたは、水道設備の整っていない街に住んでいて、雨水を貯水して生活用水として用いています。
貯水タンクの容量と、直前一週間分の1日あたりの降水量のデータが与えられるので、
現在貯水タンクにはどれだけ水が溜まっているか求めてください。

なお、貯水タンクの水ははじめ一切水が入っておらず、
一週間の間溜めるのみで使用することはないものとします。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int water_tank = sc.nextInt();

        // 水の合計値を求める
        int total = 0;
        for (int j = 0; j < 7; j++) {
            final int water = sc.nextInt();
            total += water;
        }

        // タンクと合計の水の少ない方を出力する
        System.out.println(Math.min(total, water_tank));
    }
}