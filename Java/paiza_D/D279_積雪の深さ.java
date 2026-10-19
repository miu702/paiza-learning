
/*
あなたの街では雪が滅多に降りませんが、珍しく二日連続で雪が降りました。
1 日目には A cm、2 日目には B cm、積もりました。

合計の積雪の高さが何 cm になるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int snow_A = Integer.parseInt(numbers[0]);
        final int snow_B = Integer.parseInt(numbers[1]);

        // 積雪量の合計を出力する
        final int snow_total = snow_A + snow_B;
        System.out.println(snow_total);
    }
}