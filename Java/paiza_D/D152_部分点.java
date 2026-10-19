
/*
あなたは、あるマークシート式の試験の採点をしています。

問題のうちのひとつに、 5 つの選択肢の正誤をそれぞれ判定するという問題がありました。
しかし全問正解している者が少なく、全問正解者のみに得点を与えると差がつかない可能性があるため、
一定以上の数正解した者には部分点を与えることにしました。

その問題におけるある受験者の選択肢別の正誤と、部分点を得るために必要な正解数が与えられるので、
部分点もしくは満点が得られる場合は "Yes", 
得点が得られない場合は "No" を出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] answer = sc.nextLine().split("");
        final int limit = sc.nextInt();

        // 正解数をカウントする
        int count = 0;
        final String allow = "R";
        for (String A : answer) {
            if (A.equals(allow))
                count++;
        }

        // 条件に沿って出力する
        System.out.println(count >= limit ? "Yes" : "No");

    }
}