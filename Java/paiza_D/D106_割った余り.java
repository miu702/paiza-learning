
/*
整数 N と M が与えられるので N を M で割った余りを出力して下さい。
割り切れて余りが 0 の場合も 0 と出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int N = sc.nextInt();
        final int M = sc.nextInt();

        final int rest = N % M;
        System.out.println(rest);
    }
}