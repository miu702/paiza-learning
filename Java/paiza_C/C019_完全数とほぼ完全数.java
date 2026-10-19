import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String timesStr = sc.nextLine();

        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < Integer.parseInt(timesStr); i++) {
            final int number = sc.nextInt();
            numbers.add(number);
        }

        for (Integer N : numbers) {
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

            // 6、自分自身を以外の約数を足して、条件に沿って出力する

            // 6-1、全部足す。
            int total = 0;
            for (Integer D : uniqueDiv) {
                total += D;
            }

            total -= N;

            // 6-2、条件に沿って出力する
            if (total == N) {
                System.out.println("perfect");
            } else if (Math.abs(total - N) == 1) {
                System.out.println("nearly");
            } else {
                System.out.println("neither");
            }

        }

    }
}