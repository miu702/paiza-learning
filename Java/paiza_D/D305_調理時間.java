
/*
あなたはカップラーメンを作ろうとしています。

お湯を沸かす時間 n 分とお湯を注いでからカップラーメンができるまでの時間 m 分が改行区切りで与えられます。
お湯を沸かしはじめてからカップラーメンが完成するまでの時間を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // お湯になる時間と調理時間を定義する
        Scanner sc = new Scanner(System.in);
        final int hot = sc.nextInt();
        final int cook = sc.nextInt();

        // 合計時間を計算し、出力する
        final int total = hot + cook;
        System.out.println(total);
    }
}