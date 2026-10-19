
/*
あなたは快適に過ごせるように湿度の計測をしています。

快適に過ごせる湿度を60 % 以下と決めました。

湿度の値 h % が与えられるので快適に過ごせる範囲であれば "OK" 、それ以外の場合は "NG" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 現在の値を定義する
        Scanner sc = new Scanner(System.in);
        final int current = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 60;
        System.out.println(current <= limit ? "OK" : "NG");
    }
}