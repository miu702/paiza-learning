/*
英語が堪能な Paiza 君ですが、唯一月の名前だけ覚えることができませんでした。
そこで、いつでも調べることができるように数字を入れるとその月を表す英語が表示されるアプリを開発してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int month = sc.nextInt();
        // 入力 → 変数に変換するend
        
        // 辞書を作成する
        final Map<Integer, String> monthData = new HashMap<>();
        monthData.put(1, "January");
        monthData.put(2, "February");
        monthData.put(3, "March");
        monthData.put(4, "April");
        monthData.put(5, "May");
        monthData.put(6, "June");
        monthData.put(7, "July");
        monthData.put(8, "August");
        monthData.put(9, "September");
        monthData.put(10, "October");
        monthData.put(11, "November");
        monthData.put(12, "December");
        // 辞書を作成するend
        
        // 結果を出力する
        System.out.println(monthData.get(month));
    }
}