
/*
あなたはある桜の木の枝を見ています。

枝には n 個のつぼみがついています。この桜は 1 つのつぼみごとに 5 枚の花びらが開きます。

すべてのつぼみが開いた時、合計で何枚の花びらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 蕾の数を定義する
        Scanner sc = new Scanner(System.in);
        final int bud = sc.nextInt();

        // 花の数を計算し、出力する
        final int coefficient = 5;
        final int flower = bud * coefficient;
        System.out.println(flower);
    }
}