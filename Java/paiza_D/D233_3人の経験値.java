
/*
A 君の経験値は a ポイントで、B 君の経験値は b ポイント、C 君の経験値は c ポイントです。

3 人の合計の経験値は何ポイントですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 3人の経験値を配列にする
        final int member = 3;
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < member; i++) {
            final int number = sc.nextInt();
            numbers.add(number);
        }

        // 合計値を求める
        int total = 0;
        for (Integer N : numbers) {
            total += N;
        }

        // 出力する
        System.out.println(total);
    }
}