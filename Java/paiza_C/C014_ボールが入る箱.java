/*
半径r のお気に入りのボールを手に入れたあなたは、それを収納することができる箱を探しています。

今、n 個の箱があり、i (1 ≦ i ≦ n) 番目の箱は高さh_i、幅w_i、奥行きd_i です。各
箱においてボールの直径が、箱の高さ、幅、奥行きの3つの長さのうち最も短いもの以下であれば、
無事にボールを収納することができます。

ボールの半径と箱の情報が与えられるので、ボールを収納することができる箱の番号を昇順に
すべて答えてください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 箱の数とボールの半径を定義する。
        Scanner sc = new Scanner(System.in);
        final String[] ballData = sc.nextLine().split(" ");
        final int box = Integer.parseInt(ballData[0]);
        final int radius = Integer.parseInt(ballData[1]);
        
        
        // ボールが入る箱と、ボールの直径を定義する
        ArrayList<Integer> passing = new ArrayList<>();
        final int diameter = radius * 2;
        
        
        // 箱の数だけ繰り返し処理を行う。
        for(int i = 0; i < box; i++) {
            final String[] boxData = sc.nextLine().split(" ");
            
            // 3辺のうち、一番短い辺を見つける
            int minEdge = Integer.MAX_VALUE;
            for(String B : boxData) {
                final int edge = Integer.parseInt(B); 
                if(minEdge > edge) minEdge = edge;
            }
            
            // 一番短い辺がボールの直径より大きい時、箱の番号を記録する
            if(minEdge >= diameter) passing.add(i + 1);
            
        }
        
        // 箱を昇順で全て出力する
        for(Integer p : passing) System.out.println(p);
        
    }
}