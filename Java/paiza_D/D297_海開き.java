
/*
あなたは海水浴のための海開きの日を検討しています。

海開きの基準を 3 日間の水温が全て 20 度以上の場合とすることにしました。
3 日間の水温が改行区切りで与えられるので海開きの基準を満たしていれば "OK" 
そうでない場合は "NG" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);

        final int number = 3;
        ArrayList<Integer> temperatures = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final Integer temperature = sc.nextInt();
            temperatures.add(temperature);
        }

        // 気温の配列をチェックし、基準値以下なら、flaseにして強制停止する。
        final int limit = 20;
        boolean check = true;
        for (Integer T : temperatures) {
            if (T < limit) {
                check = false;
                break;
            }
        }

        // 条件に沿って出力する
        System.out.println(check ? "OK" : "NG");

    }
}