
/*
A 君は 1 日目に A メートル、2 日目に B メートル走りました。
A 君が 2 日間で走った距離を求めてください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // それぞれの数値を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 合計を出力する
        final int total = A + B;
        System.out.println(total);
    }
}