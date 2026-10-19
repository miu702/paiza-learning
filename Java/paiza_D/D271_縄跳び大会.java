
/*
PAIZA 君は、去年参加した縄跳び大会に、今年も参加することにしました。

去年の記録は A 回であり、今年の記録は B 回でした。

以下のルールに従って、今年の記録が去年の記録を上回ったか否か判定するプログラムを作成してください。

・今年の記録が去年の記録を上回っていた場合、'Yes' を出力してください。
・今年の記録が去年の記録と等しいか下回っていた場合、'No' を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numbers = sc.nextLine().split(" ");
        final int A = Integer.parseInt(numbers[0]);
        final int B = Integer.parseInt(numbers[1]);

        // 条件に沿って出力する
        System.out.println(B > A ? "Yes" : "No");
    }
}