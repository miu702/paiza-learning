
/*
水が N リットルだけあります。 あなたは a リットルの水が必要です。

必要な分の水を用意できる場合は "Yes" 、用意できない場合は "No" を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final int water = sc.nextInt();
        final int need = sc.nextInt();

        // 条件に沿って出力する
        System.out.println(water >= need ? "Yes" : "No");
    }
}