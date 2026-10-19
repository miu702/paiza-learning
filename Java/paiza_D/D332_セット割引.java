
/*
あなたは飲食店の割引の計算をするプログラムを作成しています。

p 円の食べ物と q 円の飲み物を頼んだ時に合計金額が 1000 円以上の場合に 100 円引きされます。

食べ物の値段 p 円と飲み物の値段 q 円が改行区切りで与えられるので割引を計算した結果がいくらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 値段を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 条件に沿って出力する
        final int total = A + B;
        final int limit = 1000;
        final int discount = 100;
        System.out.println(total >= limit ? total - discount : total);
    }
}