/*
あなたは長さの単位センチメートルをミリメートルに変換するプログラムを作成することにしました。

1 センチメートルは 10 ミリメートルに変換されます。
変換する長さ n センチメートルが与えられるので何ミリメートルかを出力して下さい。

*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int cm = sc.nextInt();
        
        final int unit = 10;
        final int mm = cm * unit;
        System.out.println(mm);
    }
}