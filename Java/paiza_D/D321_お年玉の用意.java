
/*
あなたはお年玉の用意をしています。

お年玉は 1000 円札で用意することにしました。 n 枚の 1000 円札を用意し m 袋のお年玉袋を用意しました。
各お年玉袋に同じ枚数の 1000 円札を入れたとき余った額が何円かを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 金額と袋の数を定義する
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        final int container = sc.nextInt();

        // 残りの金額を計算し、出力する
        final int rest = number % container;
        final int unit = 1000;
        System.out.println(rest * unit);
    }
}