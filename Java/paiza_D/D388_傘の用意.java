
/*
あなたは降水確率から傘を持っていくかどうかを考えています。
午前の降水確率と午後の降水確率を足して 50 %以上であれば傘を持っていくことにしました。

午前の降水確率、午後の降水確率が改行区切りで与えられるので、
午前と午後の降水確率を足して 50 %以上の場合は "yes" 、それ以外は "no" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 降水率を定義する
        Scanner sc = new Scanner(System.in);
        final int AM = sc.nextInt();
        final int PM = sc.nextInt();

        // 合計し、条件に沿って出力する
        final int total = AM + PM;
        final int limit = 50;
        System.out.println(total >= limit ? "yes" : "no");
    }
}