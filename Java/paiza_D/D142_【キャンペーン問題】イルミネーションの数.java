
/*
クリスマスといえばやはりイルミネーションです。
あなたはある並木道の木に電飾を施そうと考えています。
大量の電球が必要になるので、あらかじめ必要な個数を数えて一度に注文しようと考えています。
もっとも、予算には限りがあるので、一定の間隔で電飾を施すことにしています。

端の木には必ず電飾を施すこととしたとき、並木道の木の本数、一本あたりの装飾に必要な電球の数、
何本ごとに電飾を施すかが与えられるので必要な電球の数を計算するプログラムを作成してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // 数値を定数にする
        final int trees = Integer.parseInt(numberStr[0]);
        final int between = Integer.parseInt(numberStr[1]);
        final int illuminations = Integer.parseInt(numberStr[2]);

        // 計算を実施する
        final int total = ((trees - 1) / between + 1) * illuminations;
        System.out.println(total);
    }
}