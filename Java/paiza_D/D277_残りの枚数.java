
/*
あなたはカードゲームをしています。
そのゲームは全部で n 枚のカードがありそのうち m 枚を使用します。

使用せずに余ったカードの枚数を計算して出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 全体のカードの枚数と使う枚数を定義する
        Scanner sc = new Scanner(System.in);
        final int total = sc.nextInt();
        final int use = sc.nextInt();

        // 残りの枚数を計算し、出力する
        final int rest = total - use;
        System.out.println(rest);
    }
}