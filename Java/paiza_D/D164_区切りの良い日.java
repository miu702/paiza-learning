
/*
1 月 1 日から 2 の 8 乗の 256 日目にあたる 9 月 13 日(うるう年では 9 月 12 日)は
ロシアではプログラマーの日とされています。
あなたはプログラマーの日まで 2 の n 乗日目の区切りを調べたくなりました。

1 月 1 日から何日目か x が与えられるので 2 の n 乗日目であれば「OK」
そうでない場合は「NG」と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // 対象の数値を許可リストに登録
        Set<Integer> allowed = new HashSet<>(
                Arrays.asList(2, 4, 8, 16, 32, 64, 128, 256));

        // 許可リスト.contains(検査対象)で許可リストにあるか判断できる
        System.out.println(allowed.contains(number) ? "OK" : "NG");
    }
}