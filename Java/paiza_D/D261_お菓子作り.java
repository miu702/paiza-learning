
/*
あなたはお菓子作りをしています。

レシピには大さじで n 杯での分量が書かれています。
大さじ 1 杯を 13 グラムとする時に必要な砂糖のグラム数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // スプーンの杯数を定義する
        Scanner sc = new Scanner(System.in);
        final int spoon = sc.nextInt();

        // グラムにしたときの量を計算し、出力する
        final int unit = 13;
        final int gram = spoon * unit;
        System.out.println(gram);
    }
}