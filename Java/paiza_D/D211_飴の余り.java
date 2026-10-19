
/*
あなたは飴玉を n 個購入して m 人の子どもたちにそれを配ることにしましたが
余りが出てしまいます。
子どもたちが喧嘩をしないために余る飴を先に取り除いておくことにしました。

n 個の飴を m 人に同じ個数配った時の余りを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");

        // 数値化する
        final int candy = Integer.parseInt(numbers[0]);
        final int people = Integer.parseInt(numbers[1]);

        // 計算する
        final int rest = candy % people;
        System.out.println(rest);
    }
}