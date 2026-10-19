
/*
あなたは目的地に徒歩何分でつくかを計算しようとしています。

徒歩は分速 80 メートルの速さとし目的地までの距離を X メートルとしたとき徒歩何分かを計算し出力してください。
このとき 1 分未満は切り捨てて出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 目的地までの距離を定義する
        Scanner sc = new Scanner(System.in);
        final int distance = sc.nextInt();

        // 徒歩何分なのか計算し、出力する
        final int minute = 80;
        final int unit = distance / minute;
        System.out.println(unit);
    }
}