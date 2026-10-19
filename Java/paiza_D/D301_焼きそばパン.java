/*
PAIZA さんは焼きそばパンが好きです。
PAIZA さんはある日、焼きそば以外の料理もパンに挟んだら美味しいのではないかと思い、
料理を挟んでみることにしました。

料理名 X が与えられるので末尾に "pan" をつけた文字列を出力してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 料理名を定義する
        Scanner sc = new Scanner(System.in);
        final String name = sc.next();
        
        
        // 文字を結合する
        final String add = "pan";
        final String bread = String.format("%s%s", name, add);
        System.out.println(bread);
    }
}