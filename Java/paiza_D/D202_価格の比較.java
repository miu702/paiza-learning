
/*
あなたは2社の通信販売サイトの価格比較をしています。

価格、送料がスペース区切りで各社1行ずつ改行区切りで与えられるので価格と
送料の合計が安い方の合計価格を出力してください。


価格、送料の合計が同じ場合はどちらの合計を出力しても問題ない点に注意してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // それぞれのデータを配列で定義する
        Scanner sc = new Scanner(System.in);
        final String[] A = sc.nextLine().split(" ");
        final String[] B = sc.nextLine().split(" ");

        // A社の合計値を求める
        final int A_price = Integer.parseInt(A[0]);
        final int A_send = Integer.parseInt(A[1]);
        final int A_total = A_price + A_send;

        // B社の合計値を求める
        final int B_price = Integer.parseInt(B[0]);
        final int B_send = Integer.parseInt(B[1]);
        final int B_total = B_price + B_send;

        // 条件に沿って出力する(同じ時はどっちでもいいので、この書き方でOK)
        System.out.println(A_total <= B_total ? A_total : B_total);
    }
}