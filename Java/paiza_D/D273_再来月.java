
/*
あなたは、子供から「再来月って、何月？」とよく質問されます。
あまりに質問されるので、聞かれるたびに考えるのが面倒に感じてきました。

今月が何月かを表す整数 M を与えると、再来月が何月であるかを出力するプログラムを作成してください。

例えば、M = 2 である場合、2 月の 2 ヶ月後は 4 月です。よって 4 を出力してください。
M = 11 である場合、11 月の 2 ヶ月後は 1 月です。よって 1 を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 現在の月を定義する
        Scanner sc = new Scanner(System.in);
        final int month = sc.nextInt();

        // 2か月後を計算する
        final int add = 2;
        final int total = month + add;

        // 12月以上にあるときは調整して、出力する
        final int limit = 12;
        System.out.println(total > limit ? total - limit : total);
    }
}