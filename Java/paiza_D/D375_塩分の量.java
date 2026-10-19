
/*
あなたは健康のために食事の塩分の量を知りたくなりました。

食事の量 x グラム、塩分濃度 y パーセントが改行区切りで与えられるので何グラムの塩分が含まれるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 食事の量、塩分濃度を定義する
        Scanner sc = new Scanner(System.in);
        final int meal = sc.nextInt();
        final int percent = sc.nextInt();

        // 最後に割り算することで、int型で計算することができる。
        final int total_salt = meal * percent / 100;
        System.out.println(total_salt);
    }
}