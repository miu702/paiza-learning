
/*
あなたはバナナを購入しようとしています。

バナナは 1 房に n 本ずつ付いています。
m 房のバナナを購入した時、合計で何本のバナナになるか出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // バナナの情報を定義する
        Scanner sc = new Scanner(System.in);
        final int unit = sc.nextInt();
        final int bunch = sc.nextInt();

        // 合計のバナナの本数を計算し、出力する
        final int total = unit * bunch;
        System.out.println(total);
    }
}