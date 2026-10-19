
/*
あなたは、X 円の資金を元に株式投資を始めようと思っています。
株価の上昇が見込めそうな銘柄を見つけたので、
全財産を投じ買えるだけ買って株価が上がったら売ろうと考えました。

上昇前の株価 A 円と上昇後の株価 B 円が与えられるので、
いくら利益を上げることができたか計算してください。

ただし、株は 1 単位ごとにしか購入できないことに注意してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int funds = sc.nextInt();
        final int stockPrice_be = sc.nextInt();
        final int stockPrice_af = sc.nextInt();

        // 勝った株数とあまりのお金を計算する
        final int stock = funds / stockPrice_be;
        final int rest = funds % stockPrice_be;

        // 利益を計算する。(株数 × 売却時の金額 + あまりのおかね) - 始めの資金
        final int profit = (stock * stockPrice_af + rest) - funds;
        System.out.println(profit);
    }
}