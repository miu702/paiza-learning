
/*
あなたはバスを運行しています。

乗客数 0 人の状態から 1 つ目のバス停で x 人の乗客が乗ってきました。
2 つ目のバス停では y 人の乗客が降りて、 z 人の乗客が乗ってきました。
x, y, z が改行区切りで与えられるので現在の乗客数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 乗客数を定義する
        Scanner sc = new Scanner(System.in);
        final int X = sc.nextInt();
        final int Y = sc.nextInt();
        final int Z = sc.nextInt();

        // 合計の人数を計算し、出力する
        final int total = X - Y + Z;
        System.out.println(total);
    }
}