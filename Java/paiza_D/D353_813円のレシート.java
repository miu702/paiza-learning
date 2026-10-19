
/*
あなたは x 円のジュースと y 円のお菓子を購入しようとしています。

paizaの日なのでせっかくならばお会計を 813 円にしてレシートを貰おうと考えました。

改行区切りで購入するジュースの値段 x 円とお菓子の値段 y 円が与えられるので
あと何円購入すれば 813 円のお会計になるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 商品の価格を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 目標までの金額を計算し、出力する
        final int total = A + B;
        final int limit = 813;
        final int rest = limit - total;
        System.out.println(rest);
    }
}