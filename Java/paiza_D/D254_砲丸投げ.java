
/*
A 君と B 君は砲丸投げの選手ですが、A 君は B 君より遠くに投げることができます。
A 君の投げた長さと、B 君の投げた長さが与えられるのでその差を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // A君とB君の記録を定義する
        Scanner sc = new Scanner(System.in);
        final int A = sc.nextInt();
        final int B = sc.nextInt();

        // 差を計算し、出力する
        final int between = A - B;
        System.out.println(between);
    }
}