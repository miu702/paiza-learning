
/*
クリスマスといえば 12 月 25 日ですが、キリスト教で用いられる教会暦では、
厳密には 12 月 25 日のすべてがクリスマスに属するわけではありません。

教会暦では、日没から次の日没までを一日として扱うので、
クリスマスは厳密には 12 月 24 日の日没から 12 月 25 日の日没までとなります。

12 月 25 日の日没の時刻および 25 日現在のある時刻が与えられるので、
25 日の現在時刻はクリスマスかどうか判定するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 時間を配列で取得する
        Scanner sc = new Scanner(System.in);
        final String[] sunsetStr = sc.nextLine().split(" ");
        final String[] currentStr = sc.nextLine().split(" ");

        // 全て分に統一することで、条件をシンプルにする。
        final int sunset_time = Integer.parseInt(sunsetStr[0]) * 60 + Integer.parseInt(sunsetStr[1]);
        final int current_time = Integer.parseInt(currentStr[0]) * 60 + Integer.parseInt(currentStr[1]);
        System.out.println(current_time <= sunset_time ? "Yes" : "No");
    }
}