
/*
あなたは正月に向けてお餅の用意をしています。

1 人当たり n 個のお餅を m 人分用意します。
合計で何個のお餅が必要か出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int ones = sc.nextInt();
        final int pepole = sc.nextInt();

        final int total = ones * pepole;
        System.out.println(total);
    }
}