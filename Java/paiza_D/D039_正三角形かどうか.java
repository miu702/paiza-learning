
/*
あなたは、3つの辺の長さが分かっている三角形が正三角形なのかを判別しようとしています。
正三角形を判別する場合、3つの辺すべての長さが等しければ正三角形と判別できます。
3つの辺の長さ a, b, c が改行区切りで与えられるので正三角形なら "YES", 正三角形でなければ "NO" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        final int A = sc.nextInt();
        final int B = sc.nextInt();
        final int C = sc.nextInt();

        if (A == B && A == C && B == C) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

    }
}