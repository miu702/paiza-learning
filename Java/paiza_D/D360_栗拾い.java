
/*
あなたは栗拾いをした栗で料理を作ろうとしています。

n 人前の栗料理を作ろうとしています。 1 人前あたり m 個の栗が必要です。
全部で何個の栗を拾う必要があるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 人数と1人分の量を定義する
        Scanner sc = new Scanner(System.in);
        final int member = sc.nextInt();
        final int unit = sc.nextInt();

        // 合計の量を計算し、出力する
        final int total = member * unit;
        System.out.println(total);
    }
}