
/*
A 君の口座残高は N 円ですが、引き出すときに手数料として 120 円かかります。
A 君が口座残高をすべて引き出すとき何円引き出せますか？

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 口座にある金額を定義する
        Scanner sc = new Scanner(System.in);
        final int bank = sc.nextInt();

        // 手数料を引いた金額を計算する
        final int commission = 120;
        final int rest = bank - commission;
        System.out.println(rest);
    }
}