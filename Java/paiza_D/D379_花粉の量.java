
/*
あなたは花粉の 1 平方センチメートルあたりの花粉の数を観測しています。

1 平方センチメートルあたりの花粉の数 n が与えれます。

100 個以上の場合は非常に多いため "DANGER" と出力してください。
また 100 個未満の場合は n をそのまま出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 花粉の量を定義する
        Scanner sc = new Scanner(System.in);
        final int pollen = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 100;
        System.out.println(pollen >= limit ? "DANGER" : pollen);
    }
}