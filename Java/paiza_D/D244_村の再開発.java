
/*
A 村にはもともと 100 人の人が住んでいました。
A 村には新しくテーマパークできたため、人口が増加しました。

結果、A 村では人口が毎月 X 人ずつ増加します。Y 月後の A 村の人口はいくらですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 増加量と月を定義
        Scanner sc = new Scanner(System.in);
        final int add = sc.nextInt();
        final int month = sc.nextInt();

        // 合計の人数を計算する
        final int start = 100;
        final int total = start + (add * month);
        System.out.println(total);
    }
}