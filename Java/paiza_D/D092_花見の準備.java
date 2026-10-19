/*
あなたはお花見の準備のためにレジャーシートを買うことにしました。
レジャーシートの質に興味のないあなたは最も面積あたりの価格の安いレジャーシートを探すため、プログラムを書くことにしました。

2つのレジャーシートの横の長さ x, 縦の長さ y, 価格 p が スペース区切りで与えられます。

最も面積あたりの価格の安いレジャーシートの x, y ,p をスペース区切りで出力するプログラムを作成してください。
ただし、面積あたりの価格が同じ場合は "DRAW" と出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] A_Data = sc.nextLine().split(" ");
        final String[] B_Data = sc.nextLine().split(" ");
        // 入力 → 変数に変換するend

        // 計算を実施する。答えを少数にしたいときは、計算する数も少数である必要がある。
        final double A_Price = Double.parseDouble(A_Data[2])
                / (Double.parseDouble(A_Data[0]) * Double.parseDouble(A_Data[1]));
        final double B_Price = Double.parseDouble(B_Data[2])
                / (Double.parseDouble(B_Data[0]) * Double.parseDouble(B_Data[1]));
        // 計算を実施する。答えを少数にしたいときは、計算する数も少数である必要がある。end

        // 条件に従って出力する。配列を半角スペースで出力したいときは、文字列型にしてから、処理する。
        if (A_Price == B_Price) {
            System.out.println("DRAW");
        } else if (A_Price > B_Price) {
            System.out.println(String.join(" ", B_Data));
        } else if (A_Price < B_Price) {
            System.out.println(String.join(" ", A_Data));
        }

    }
}