
/*
お菓子が N 個用意されています。お菓子 1 個の重さは a です。

N と a が改行区切りで与えられるので、全体の重さを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // お菓子の個数と重さを定義する
        Scanner sc = new Scanner(System.in);
        final int quantity = sc.nextInt();
        final int weight = sc.nextInt();

        // 合計の重さを計算し、出力する
        final int total_weight = weight * quantity;
        System.out.println(total_weight);
    }
}