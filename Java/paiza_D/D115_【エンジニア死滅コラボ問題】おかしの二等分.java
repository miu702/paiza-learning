
/*
あなたはいくつかのお菓子を持っていて、このお菓子を 2 人の子どもに半分ずつ分け与えようとしています。
個数が偶数の場合は半分ずつ分けられます。ただし奇数であるとちょうど半分にはできないので、一つを自分で食べ残りを子どもにあげることにします。

お菓子の個数が与えられるので、子どもはいくつずつお菓子をもらえるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int sweets = sc.nextInt();

        // 1人あたりのお菓子の数を計算する
        final int child = 2;
        final int ones = sweets / child;
        System.out.println(ones);
    }
}