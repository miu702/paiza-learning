
/*
あなたはある資格試験に挑戦しようとしています。
その試験は、試験 1 と試験 2 のふたつの試験からなり、
試験1で必要最低点以上の点数を取らないと、試験2の点数が合計得点に加算されません。

1行目に試験 1 と試験 2 の点数が半角スペース区切り、
2行目に試験1の必要最低点が与えられるので、合計得点を求めるプログラムを作成してください。
なお、試験 1 の点数が必要最低点ちょうどの場合、試験 2 の得点は合計得点に加算されます。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();
        final int C = sc.nextInt();

        // 条件に沿って出力する
        if (A >= C) {
            System.out.println(A + B);
        } else {
            System.out.println(A);
        }

    }
}