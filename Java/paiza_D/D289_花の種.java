
/*
あなたは花壇に花の種を撒くことにしました。

必要な種の個数 n と種 1 つあたりの値段 p が
与えられるので合計でいくらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int need = sc.nextInt();
        final int price = sc.nextInt();

        // 合計金額を計算し、出力する
        final int total = need * price;
        System.out.println(total);
    }
}