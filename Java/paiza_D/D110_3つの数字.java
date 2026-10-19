
/*
3 つの整数がスペース区切りで与えられます。
3 つの整数を掛け算した数値を出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int A = Integer.parseInt(numberStr[0]);
        final int B = Integer.parseInt(numberStr[1]);
        final int C = Integer.parseInt(numberStr[2]);

        // 3つの合計値を求める
        final int total = A * B * C;
        System.out.println(total);
    }
}