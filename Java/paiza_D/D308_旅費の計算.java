
/*
paiza さんはある街へ旅行に行くことにしました。

paiza さんはまずバスに乗って駅まで行き、そこから新幹線に乗っていくことにしました。

バスの料金が A 円で、新幹線の料金が B 円のとき、paiza さんが街へ行くための費用を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 料金を定義する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int A = Integer.parseInt(numberStr[0]);
        final int B = Integer.parseInt(numberStr[1]);

        // 合計を計算し、出力する
        final int total = A + B;
        System.out.println(total);
    }
}