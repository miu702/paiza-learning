
/*
A 君はあるゲームのキャラクターに名前を付けようとしています。

A 君がつけようとしている名前が与えられるので、名前の長さを答えてください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String name = sc.next();

        // 変数.length()で配列にしないで、長さを知ることができる
        System.out.println(name.length());
    }
}