
/*
あなたは、paiza さんとあるゲームをしています。
このゲームではまず、あなたと paiza さんがそれぞれ 1 から 100 までの整数のうち、
どれか 1 つを選んで紙に書きます。次に、1 から 100 までの整数が書かれた玉の入った
箱から玉を 1 つ取り出し、そこに書かれていた数字が目標の数値となります。

このとき、自分が選んだ数値と目標の数値との差が得点になります。

あなたと paiza さんが書いた数値と、目標の数値があたえられるので、
あなたと paiza さんの得点を求めるプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();
        final int goal = sc.nextInt();

        // ポイントを計算し、出力する
        final int A_Point = A - goal;
        final int B_Point = B - goal;
        System.out.println(A_Point + " " + B_Point);
    }
}