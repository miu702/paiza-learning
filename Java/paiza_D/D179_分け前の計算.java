/*
あなたは貰ったお菓子を分けようとしています。 
ただし余りが出るかもしれないので事前に余った個数を計算して隠しておこうと考えました。

分ける人数 n とお菓子の個数 m が改行区切りで与えられるので余ったお菓子の数を出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int pepole = sc.nextInt();
        final int sweets = sc.nextInt();

        // あまりの計算を実施して、結果を出力
        final int rest = sweets % pepole;
        System.out.println(rest);
    }
}