/*
お菓子が N 個あります。お腹が空いているあなたとあなたの友達はお菓子をそれぞれ a 個、 b 個だけつまみ食いしてしまいました。

N と a と b が改行区切りで与えられるので、お菓子が何個残っているかを出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 必要なデータを変数に変換する
        Scanner sc = new Scanner(System.in);
        final int total = sc.nextInt();
        final int A = sc.nextInt();
        final int B = sc.nextInt();
        
        // 計算を実施し、出力する
        final int rest = total - (A + B);
        System.out.println(rest);
    }
}