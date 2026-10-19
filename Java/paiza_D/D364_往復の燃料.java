
/*
あなたは車の往復の燃料の計算をしています。

1 キロメートルあたりの燃料消費量 n ミリリットルと往復する
道の片道の距離 x キロメートルが改行区切りで与えられるので
合計で何ミリリットルのガソリンを消費するか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 燃料消費量と片道を定義する
        Scanner sc = new Scanner(System.in);
        final int unit = sc.nextInt();
        final int distance = sc.nextInt();

        // 合計の燃料を計算し、出力する
        final int total = unit * distance * 2;
        System.out.println(total);
    }
}