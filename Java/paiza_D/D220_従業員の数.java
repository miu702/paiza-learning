
/*
A 社にはもともと a 人の従業員がいました。
今年新たに b 人の従業員を採用しました。

現在 A 社には何人の従業員がいますか？

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // もともとの人数と追加人数を定義
        Scanner sc = new Scanner(System.in);
        final int member = sc.nextInt();
        final int add = sc.nextInt();

        // 合計人数を計算する
        final int total = member + add;
        System.out.println(total);
    }
}