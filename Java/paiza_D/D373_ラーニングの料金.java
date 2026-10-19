
/*
あなたはpaizaラーニングで有料プランに入ろうとしています。

1ヶ月の料金が 1490 円で n ヶ月分入ろうと考えています。合計でいくらになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 月を定義する
        Scanner sc = new Scanner(System.in);
        final int month = sc.nextInt();

        // 合計金額を計算し、出力する
        final int price = 1490;
        final int total = price * month;
        System.out.println(total);
    }
}