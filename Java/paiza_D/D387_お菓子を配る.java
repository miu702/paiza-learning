
/*
あなたはお菓子を配ろうとしていますが配る人数に対して余りがあった場合に揉めないように事前に取り除こうと考えています。

n 個のお菓子を m 人で同じ個数に分ける時に余る数を計算してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // お菓子の数と人数を定義する
        Scanner sc = new Scanner(System.in);
        final int sweets = sc.nextInt();
        final int member = sc.nextInt();

        // あまりを計算し、出力する
        final int rest = sweets % member;
        System.out.println(rest);
    }
}