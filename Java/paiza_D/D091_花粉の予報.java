
/*
あなたは花粉症に悩まされています。
花粉の影響が少ない日に外出するために予報を活用することにしました。

10 日間分の 1, 2, 3, 4, 5 の5段階評価の花粉の量の予報
(1が最も少なく、5が最も多い)が与えられます。

花粉の量が 2 以下であれば外出するとした時、 
10 日間のうち何日外出することが出来るかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        // 入力 → 変数に変換するend

        // 基準値を元にカウントする
        final int limit = 2;
        int count = 0;
        for (String N : numbers) {
            final int number = Integer.parseInt(N);
            if (number <= limit)
                count++;
        }
        // 基準値を元にカウントするend

        // 出力する
        System.out.println(count);
    }
}