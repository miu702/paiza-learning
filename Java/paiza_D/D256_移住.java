
/*
ある県には A 市と B 市が存在します。A 市と B 市の人口 X , Y がそれぞれ与えられます。
A 市から B 市に 100 人移住しました。 A 市と B 市の現在の人口を教えてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // A市とB市の人口を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 人口の増減を計算する
        final int unit = 100;
        final int A_after = A - unit;
        final int B_after = B + unit;

        // 現在の人口を出力する
        System.out.println(A_after);
        System.out.println(B_after);
    }
}