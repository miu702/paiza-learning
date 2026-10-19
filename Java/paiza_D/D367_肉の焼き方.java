
/*
あなたは肉の焼き方にこだわりがあります。

肉を 1 枚ずつ表面と裏面をそれぞれ n 秒焼きます。
m 枚の肉を焼くのに何秒かかるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 焼く時間と肉の枚数を定義する
        Scanner sc = new Scanner(System.in);
        final int seconds = sc.nextInt();
        final int meats = sc.nextInt();

        // 合計時間を計算し、出力する
        final int total = seconds * 2 * meats;
        System.out.println(total);
    }
}