import java.util.*;

public class Main {
    public static void main(String[] args) {
        // :で分割する。split()すると、配列になるので、データ型[]と定義する
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(":");

        // 時間を定数に変換する
        final int hour = Integer.parseInt(lines[0]);
        final int minutes = Integer.parseInt(lines[1]);

        // 寝る時間を計算する
        final int sleep = 8;
        final int bedtime = hour - sleep;

        // 昨日の場合、時間を補正する
        final int top = 0;
        final int days = 24;
        if (bedtime < top) {// 0時より後
            final int changeHour = bedtime + days;
            System.out.printf("%d:%d", changeHour, minutes);
        } else if (bedtime >= top) {// 0時より前：本来不要だが、わかりやすさ重視。
            System.out.printf("%d:%d", bedtime, minutes);
        }
    }
}