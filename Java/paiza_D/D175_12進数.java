/*
あなたは 12 進数の計算をする特殊な計算機を作っています。
この 12 進数では 10 進数での 10 を「A」、 11 を「B」で表現します。
また 0 〜 9 は通常の10進数と同様です。

12 進数が 1 桁入力されるので 10 進数に変換して出力してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 基数変換するとは、入力値は文字列で定義する必要がある。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.next();
        
        // N進数 → 10進数なら、Integer.parseInt(文字列, 変換前の基数)で変換できる。
        final int number = Integer.parseInt(numberStr, 12);
        System.out.println(number);
    }
}