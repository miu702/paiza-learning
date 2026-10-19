
/*
あなたはクリスマスツリーの用意をしています。

n 本のクリスマスツリーそれぞれに m 個の飾りつけを用意することにしました。

クリスマスツリーの本数 n とそれぞれの飾りつけの個数 m が改行区切りで与えられるので
合計で何個の飾りを用意するか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 木の数と1本の飾りの数を定義する
        Scanner sc = new Scanner(System.in);
        final int tree = sc.nextInt();
        final int decoration = sc.nextInt();

        // 合計の飾りの数を計算し、出力する
        final int total = tree * decoration;
        System.out.println(total);
    }
}