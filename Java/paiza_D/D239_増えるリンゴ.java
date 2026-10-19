
/*
かごの中に N 個のリンゴがあり、 1 日に 1 個ずつ増えていきます。
10 日後のリンゴの数はいくつですか？

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // スタートのりんごの数を定義
        Scanner sc = new Scanner(System.in);
        final int apple = sc.nextInt();

        // 10日後のりんごの数を計算。+10でもいいが、意味的にはこれ？
        int total = apple;
        final int days = 10;
        for (int i = 0; i < days; i++)
            total++;

        // 10日後のりんごの数を出力
        System.out.println(total);
    }
}