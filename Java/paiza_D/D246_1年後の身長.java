
/*
今の A 君の身長は N cm です。A 君は 1 年間 で 10 cm 身長が伸びます。

1 年後の A 君の身長を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 現在の身長を定義
        Scanner sc = new Scanner(System.in);
        final int height = sc.nextInt();

        // 1年後の身長を計算する
        final int add = 10;
        final int total = height + add;
        System.out.println(total);
    }
}