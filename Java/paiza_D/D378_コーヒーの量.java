
/*
あなたはコーヒーを淹れるためにお湯を沸かしています。

1 杯あたり 150 ミリリットルのお湯が必要です。
n ミリリットルのお湯を沸かした時に何杯のコーヒーを淹れることができるかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // お湯の量を定義する
        Scanner sc = new Scanner(System.in);
        final int hotWater = sc.nextInt();

        // 分けることができるカップの量を計算し、出力する
        final int unit = 150;
        final int cups = hotWater / unit;
        System.out.println(cups);
    }
}