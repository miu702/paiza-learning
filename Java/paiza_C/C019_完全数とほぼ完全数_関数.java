/*
N を 2 以上の整数とし、N の約数のうち N 自身を除いたものの和を S とします。 このとき

・N = S となるような N を完全数
・|N-S| = 1 となるような N をほぼ完全数

と言うことにしましょう。ここで、|N-S| は N-S の絶対値を意味します。

たとえば、N = 28 のとき、28 の約数は 1, 2, 4, 7, 14, 28 なので、S = 1+2+4+7+14 = 28 となります。従って、28 は完全数です。
また、N = 16 のときには S = 1+2+4+8 = 15 となるので、16 はほぼ完全数です。

入力された整数が完全数かほぼ完全数かそのいずれでもないかを判定するプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 処理をする回数を定義する
        Scanner sc = new Scanner(System.in);
        final String timesStr = sc.nextLine();

        // 処理する数値を配列に変換する
        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < Integer.parseInt(timesStr); i++) {
            final int number = sc.nextInt();
            numbers.add(number);
        }

        // 配列の数値を1つずつ取り出し、関数に投入する。ループするだけ。
        for (Integer N : numbers) {
            final String result = judge(N);
            System.out.println(result);
        }

    }

    // 関数は別で定義して、使うだけにする。
    static String judge(int N) {
        // 1、平方根を求める
        final double S = (double) N;
        final double sqrt = Math.sqrt(S);

        // 2、平方根の直前の整数に変換する
        final int R = (int) sqrt;

        // 3、約数を求める
        ArrayList<Integer> div = new ArrayList<>();
        for (int j = 1; j <= R; j++) {
            if (N % j == 0) {
                // 4、商の左右を追加する
                div.add(j);
                div.add(N / j);
            }
        }

        // 5、重複要素を削除する
        List<Integer> uniqueDiv = new ArrayList<>(new LinkedHashSet<>(div));

        // 6、自分自身以外の約数を足して、条件に沿って出力する

        // 6-1、全部足す。
        int total = 0;
        for (Integer D : uniqueDiv) {
            total += D;
        }

        // 6-2、自分を引く。
        total -= N;

        // 6-3、条件に沿って出力する
        if (total == N) {
            return "perfect";
        } else if (Math.abs(total - N) == 1) {
            return "nearly";
        } else {
            return "neither";
        }

    }

}