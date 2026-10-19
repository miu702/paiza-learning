
/*
あなたはテストの採点をしています。
テストの解答用紙はA4用紙 1 枚です。

あなたはテスト 1 枚あたり、X 分で採点することができます。

T 時間 ( 60 分 )でテストを何枚採点できるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int test = Integer.parseInt(numbers[0]);
        final int hour = Integer.parseInt(numbers[1]);

        // 時間を分に変換し、単位を合わせて計算する
        final int minutes = hour * 60;
        final int unit = minutes / test;
        System.out.println(unit);
    }
}