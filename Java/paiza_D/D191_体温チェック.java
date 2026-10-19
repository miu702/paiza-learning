/*
あなたは体温を測り出社するかどうかを決めています。

体温が小数点第一位まで与えられるので 37.0 度以上の場合は出社しないので 
NG と出力し 37.0 度未満であれば出社するので OK と出力して下さい。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 少数で定義する
        Scanner sc = new Scanner(System.in);
        final double temperature = sc.nextDouble();

        // 条件に沿って出力する
        final double limit = 37.0;
        System.out.println(temperature >= limit ? "NG" : "OK");
    }
}