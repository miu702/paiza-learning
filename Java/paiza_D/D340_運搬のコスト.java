
/*
あなたは運搬のコストを計算するプログラムを作成しています。

1 kgあたりの運搬コストが p 円かかります。
n kgの荷物を運搬する場合に何円の運搬コストになるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1kg当たりの金額と荷物の重さを定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int weight = sc.nextInt();

        // 合計金額を計算し、出力する
        final int totalPrice = price * weight;
        System.out.println(totalPrice);
    }
}