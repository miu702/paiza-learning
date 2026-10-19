
/*
あなたは徒歩で移動する予定がありますが遅刻しないように何分かかるのかを事前にしておくことにしました。

徒歩では 1 分あたり 80 m 進むとし移動する距離 n が与えられるので何分かかるかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 距離を定義する
        Scanner sc = new Scanner(System.in);
        final int distance = sc.nextInt();

        // 何分かかるのか計算し、出力する
        final int unit = 80;
        final int minutes = distance / unit;
        System.out.println(minutes);
    }
}