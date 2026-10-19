
/*
チョコレートの大袋がひとつあります。
大袋の中にはいくつかのチョコレートが個包装で入っており、
1 個あたりの重さは A グラムです。

大袋の重さが B グラムのとき、大袋にいくつのチョコレートが入っているか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // チョコの重さと大袋の重さを定義する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int A = Integer.parseInt(numberStr[0]);
        final int B = Integer.parseInt(numberStr[1]);

        // 袋の中にあるチョコの量を計算し、出力する
        final int chocolate = B / A;
        System.out.println(chocolate);
    }
}