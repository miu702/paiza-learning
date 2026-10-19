
/*
A 君は毎日別のコースを 4 週走っています。

A 君のその日のコースの 1 周の距離が与えられるので、
A 君がその日走る距離を答えてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1周の距離を定義する
        Scanner sc = new Scanner(System.in);
        final int ones = sc.nextInt();

        // 4周の距離を計算し、出力する
        final int unit = 4;
        final int total = ones * unit;
        System.out.println(total);
    }
}