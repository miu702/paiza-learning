
/*
PAIZA 君は、年齢 15 歳、体重 60 kg です。

今日は、スカイダイビング体験にやってきました。
スカイダイビング体験に参加するには、以下の条件を満たす必要があるそうです。

・年齢が A 歳以上であること
・体重が W kg 以下であること

PAIZA 君が、スカイダイビング体験に参加できるか否かを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int limit_age = Integer.parseInt(numbers[0]);
        final int limit_weight = Integer.parseInt(numbers[1]);

        // 条件に沿って出力する
        final int age = 15;
        final int weight = 60;
        System.out.println((age >= limit_age && weight <= limit_weight) ? "Yes" : "No");
    }
}