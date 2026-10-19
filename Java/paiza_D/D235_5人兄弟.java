
/*
ある 5 人兄弟は体重が全員同じです。
5 人兄弟の 1 人の体重が与えられるので 5 人の総重量を求めてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 体重を定義する
        Scanner sc = new Scanner(System.in);
        final int weight = sc.nextInt();

        // 合計値を求める
        final int member = 5;
        final int total = weight * member;
        System.out.println(total);
    }
}