
/*
あなたはカレンダーのプログラムを作成しています。そこで N 週間後が何日後かを表示する機能を作ることにしました。
N 週間後は何日後かを計算してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int week = sc.nextInt();

        // 計算を実施する
        final int unit = 7;
        final int total = unit * week;
        System.out.println(total);
    }
}