/*
あなたは木製の四角い桶を持っています。この桶は、周囲を囲っている木の板の高さが不揃いで、
一番背の低い木の板のところまでしか水がたまりません。

桶の底面積および周囲の木の板の高さが与えられるので、
貯めることのできる水の体積を求めるプログラムを作成してください。

*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String base_area_Str = sc.nextLine();
        final String[] height_List = sc.nextLine().split(" ");
        
        
        // 底面積と高さの一番短い場所を求める
        final int base_area = Integer.parseInt(base_area_Str);
        int min = Integer.MAX_VALUE;
        for(String L : height_List) {
            final int height = Integer.parseInt(L);
            min = Math.min(min, height);
        }
        
        
        // 体積を求める
        final int total = base_area * min;
        System.out.println(total);
        
    }
}