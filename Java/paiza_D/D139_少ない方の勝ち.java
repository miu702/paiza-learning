/*
あなたはあるイベントを主催していて、参加者の一人にゲストのサイン入りの本をプレゼントしようとしています。
公平を期すため、じゃんけんでプレゼントする人を決めようとしていますが、数が多いため通常のじゃんけんでは決着がつきません。

そこで、じゃんけんをして、最も同じ手の人が少なかった手を出した人をひとまず勝者とすることにしました。
ただしこのじゃんけんでは、グーおよびパーしか出すことができません。

勝った人はどちらの手を出していたか求めるプログラムを作成してください。
ただし、どちらの手も出している人の数が同じ場合は引き分けとなります。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        final String[] words = sc.nextLine().split(" ");

        // カウントする
        int count_G = 0;
        int count_P = 0;
        for (String w : words) {
            if (w.equals("G")) {
                count_G++;
            } else if (w.equals("P")) {
                count_P++;
            }
        }

        // 勝敗を出力する
        if (count_G == count_P) {
            System.out.println("Draw");
        } else if (count_G > count_P) {
            System.out.println("P");
        } else if (count_G < count_P) {
            System.out.println("G");
        }

    }
}