
/*
あなたは串団子を作っています。作る本数を決めて串を用意するところから始めました。

n 本の串を用意し、 串 1 本ごとに m 個ずつ団子を刺した場合に何個の団子が必要か出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 串の数と、1本に刺す団子の数を定義する
        Scanner sc = new Scanner(System.in);
        final int skewer = sc.nextInt();
        final int unit = sc.nextInt();

        // 合計の団子の数を計算し、出力する
        final int total = skewer * unit;
        System.out.println(total);
    }
}