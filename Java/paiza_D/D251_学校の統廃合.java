
/*
ある街には A 小学校と B 小学校が存在します。
しかし、様々な要因によりこの 2 つの学校は統合することになりました。
A 小学校と B 小学校の生徒数が与えられるので、統合後の生徒数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // それぞれの生徒数を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 合計数を計算し、出力する
        final int total = A + B;
        System.out.println(total);
    }
}