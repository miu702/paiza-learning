
/*
あるラーメン屋があります、A 君は X グラム B 君は Y グラム食べました。
多く食べたほうの食べた量を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 数値をそれぞれ定義
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 多い方を出力。今回同じはないので、これでOK
        System.out.println(A > B ? A : B);
    }
}