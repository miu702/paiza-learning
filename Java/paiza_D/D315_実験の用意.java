/*
あなたは実験のためにある液体の薬品を同じ分量で試験管に取り分けようとしています。
薬品の処分を考えて余る量を計算しておくことにしました。

総量が n ミリリットルの薬品を a ミリリットルずつ取り分けた時、
すべてを取り分け終わったあとに余る薬品の量を出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 総量と分ける量を定義する
        Scanner sc = new Scanner(System.in);
        final int full = sc.nextInt();
        final int unit = sc.nextInt();

        // あまる量を計算し、出力する
        final int rest = full % unit;
        System.out.println(rest);
    }
}