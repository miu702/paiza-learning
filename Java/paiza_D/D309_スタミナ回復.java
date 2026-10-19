
/*
paiza さんはソーシャルゲームをプレイしています。
ゲームを遊ぶにはスタミナが必要で、スタミナは X 分ごとに 1 回復します。
スタミナを貯めておける上限は 100 です。

現在のスタミナが N のとき、スタミナが 100 になるまでに必要な時間を分単位で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // スタミナ1回復するのに必要な時間と、現在のスタミナを定義する
        Scanner sc = new Scanner(System.in);
        final int time = sc.nextInt();
        final int current = sc.nextInt();

        // 残りの時間を計算し、出力する
        final int max_s = 100;
        final int rest = (max_s - current) * time;
        System.out.println(rest);
    }
}