
/*
あるゲームでは名前を最大で 10 文字まで付けられます。

A 君の現在の名前が与えられるので、あと何文字付けられるか答えてください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String userName = sc.next();

        // 後何文字か計算する
        final int maxLength = 10;
        final int rest = maxLength - userName.length();
        System.out.println(rest);
    }
}