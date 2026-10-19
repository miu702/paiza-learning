
/*
あなたはサッカーの試合の結果を表示するプログラムを作成しています。

チームAの点数 x 、チームBの点数 y の順で改行区切りで与えられます。

チームAの点数の方が多ければ "A" 、チームBの点数の方が多ければ "B" 、
同点であれば "DRAW" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 点数を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 条件に沿って出力する
        if (A == B) {
            System.out.println("DRAW");
        } else if (A > B) {
            System.out.println("A");
        } else if (A < B) {
            System.out.println("B");
        }

    }
}