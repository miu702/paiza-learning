
/*
あなたはダイエットのために摂取カロリーを管理するプログラムを作成しています。

1 日の摂取カロリー n が目標の摂取カロリー m 未満であれば "OK" と出力し m 以上であれば "OVER" と出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // カロリーと目標を定義する
        Scanner sc = new Scanner(System.in);
        final int calorie = sc.nextInt();
        final int limit = sc.nextInt();

        // 条件に沿って出力する
        System.out.println(calorie <= limit ? "OK" : "OVER");
    }
}