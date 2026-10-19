
/*
あなたはモンスターを捕まえるゲームをしています。
あなたは n 種類いるモンスターのうち m 種類のモンスターを捕まえています。

モンスターの種類 n と捕まえたモンスターの種類 m が改行区切りで与えられるので、
残り何種類捕まえるとすべての種類を捕まえることができるかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int full = sc.nextInt();
        final int current = sc.nextInt();

        // 残りの計算し、出力する
        final int rest = full - current;
        System.out.println(rest);
    }
}