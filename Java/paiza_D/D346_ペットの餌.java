
/*
あなたは n グラム入りのペットの餌を購入しています。

1回ごとにペットに m グラムずつ与えた場合に何グラムの餌が余るか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 合計の量と分け方を定義する
        Scanner sc = new Scanner(System.in);
        final int total = sc.nextInt();
        final int unit = sc.nextInt();

        // 余りの量を計算し、出力する
        final int rest = total % unit;
        System.out.println(rest);
    }
}