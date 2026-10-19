
/*
冬日とは最低気温が 0 度未満の日を言います。

ある日の最低気温 T が与えられるので、冬日ならば "W" と出力しそれ以外は最低気温 T を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 気温を定義する
        Scanner sc = new Scanner(System.in);
        final int temperature = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 0;
        System.out.println(temperature < limit ? "W" : temperature);
    }
}