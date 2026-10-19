
/*
あなたは数字の書かれた 2 枚のカードを引いて足して 21 になると勝ちというゲームを遊んでいます。

2 枚のカードの数字が改行区切りで入力されるので足して 21 であれば「Win」と出力しそうでない場合は足した数を出力して下さい
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int number_1 = sc.nextInt();
        final int number_2 = sc.nextInt();

        // 計算し、条件に沿って出力する
        final int total = number_1 + number_2;
        final int limit = 21;
        System.out.println(total == limit ? "Win" : total);
    }
}