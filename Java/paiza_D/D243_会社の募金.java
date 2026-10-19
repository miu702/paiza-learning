
/*
A 社では毎年 X 円の利益があります。
この会社では 10 人の従業員に利益を均等に分配した後、余った利益は募金しています。

A 社の今年の利益が与えられるので、A 社が募金する金額を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 全体の利益、従業員を定義する
        Scanner sc = new Scanner(System.in);
        final int totalPrice = sc.nextInt();
        final int member = 10;

        // あまりの金額(募金額)を計算する
        final int rest = totalPrice % member;
        System.out.println(rest);
    }
}