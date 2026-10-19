
/*
A 君はとある宝くじを買うことにしました、その宝くじでは当選した場合、かけ金の 2 乗の金額が返金されます。
A 君のかけ金 N 円が与えられるので、A 君が当選した場合に返金される金額を求めるプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 掛け金を定義する
        Scanner sc = new Scanner(System.in);
        final int premium = sc.nextInt();

        // 返金額を計算する。Javaでは、累乗の計算は少数になるので、少数型で定義する
        final double return_money = Math.pow(premium, 2);

        // 少数→数値に型変換して出力する
        System.out.println((int) return_money);
    }
}