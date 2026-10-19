
/*
値段が a 円である服と b 円であるズボンを買いました。

合計で何円支払ったかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // それぞれの値段を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 合計金額を計算し、出力する
        final int total = A + B;
        System.out.println(total);
    }
}