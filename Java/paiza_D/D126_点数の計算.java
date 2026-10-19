
/*
Paiza くんが参加するコーディングコンテストではコードの正確性、実行時間、綺麗さの
3つの項目がそれぞれ 10 点満点で評価され、それらの合計点数が得点となります。

Paiza くんのコンテスト結果が、正確性、実行時間、きれいさの 3 つで与えられるので、
彼の得点を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        final int C = Integer.parseInt(numberStr[0]);
        final int T = Integer.parseInt(numberStr[1]);
        final int A = Integer.parseInt(numberStr[2]);

        final int total = C + T + A;
        System.out.println(total);
    }
}