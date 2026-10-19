
/*
あなたはある食品工場で商品の検品をしています。
大量に流れてくる商品を見て、あなたは 1 日にいくつの商品が完成するのか気になりました。

1 時間あたりに流れてくる商品の個数 n と、 1 日あたりの工場の稼働時間 h が与えられるので、
1 日にいくつの商品が生産されているのか計算するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int ones = sc.nextInt();
        final int hour = sc.nextInt();

        final int total = ones * hour;
        System.out.println(total);
    }
}