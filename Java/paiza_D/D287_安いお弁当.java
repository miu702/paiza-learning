
/*
あなたはお昼ご飯にお弁当を買うことにしました。
しかし、あなたは金欠なためできるだけ安くお弁当を買いたいです。

定価 A 円のお弁当と 30%OFFのシールが貼られている定価 B 円のお弁当があります。

より安い方のお弁当を購入するときの金額を出力してください。
なお、30%OFF したときに小数点以下は切り捨てられることとします。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");

        // 割り算を行うので、計算を合わせるために少数で定義する
        final double A = Double.parseDouble(numbers[0]);
        final double B = Double.parseDouble(numbers[1]);

        // 割引を行う
        final double discount = 0.3;
        final double B_discount = B * (1 - discount);

        // 安い方を出力する
        System.out.println(A < B_discount ? (int) A : (int) B_discount);
    }
}