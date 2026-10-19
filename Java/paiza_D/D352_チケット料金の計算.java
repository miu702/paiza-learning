
/*
あなたはあるイベントのチケットの料金を計算するプログラムを作成しています。

そのイベントでは大人料金と子ども料金が設定されています。

大人料金 x 円、子ども料金 y 円、大人の人数 n 人、子どもの人数 m 人が
改行区切りで与えられるので合計でいくらになる出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 料金を定義する
        Scanner sc = new Scanner(System.in);
        final int adult_rate = sc.nextInt();
        final int child_rate = sc.nextInt();

        // 人数を定義する
        final int adult_member = sc.nextInt();
        final int child_member = sc.nextInt();

        // 合計金額を計算し、出力する
        final int total = (adult_rate * adult_member) + (child_rate * child_member);
        System.out.println(total);
    }
}