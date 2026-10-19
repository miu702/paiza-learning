/*
今日みたいな天気のよい休日は、近所の公園に行って読書をしましょう！
早速、お気に入りの本を持って公園にやってきたあなたでしたが、不運なことに公園の一角で工事が行われているようです。
工事現場の近くは騒音が大きいので読書に向いていません。 そこであなたは、まず読書に適した場所を探すことにしました。

工事現場は公園にただ一つだけあり、その位置は (a, b) です。
工事現場から距離 R メートル未満は騒音が大きいので読書には適していません。
また、公園には読書にうってつけの木陰が N 箇所あり、i 番目の木陰の位置は (x_i, y_i) です。

以上の情報が与えられたとき、各木陰が読書に適している(つまり、工事現場から R メートル以上離れている)か
どうかを判定するプログラムを書いてください。


「位置 (x, y) が工事現場から R メートル以上離れている」という条件は以下の式で表されます。
Math.pow(x - a, 2) + Math.pow(y - b, 2) >= Math.pow(R, 2)
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 工事の位置と、音の大きさを定義する
        Scanner sc = new Scanner(System.in);
        final String[] construction = sc.nextLine().split(" ");
        final int a = Integer.parseInt(construction[0]);
        final int b = Integer.parseInt(construction[1]);
        final int R = Integer.parseInt(construction[2]);
        
        
        // チェックする地点の数を定義する
        final String numberStr = sc.nextLine();
        final int number = Integer.parseInt(numberStr);
        
        
        // 地点の数だけ繰り返し処理を実施する
        for(int i = 0; i < number; i++) {
            // チェックする地点の座標を定義する
            final String[] point = sc.nextLine().split(" ");
            final int x = Integer.parseInt(point[0]);
            final int y = Integer.parseInt(point[1]);
            
            // 計算式を元に計算する
            final int noise = (int)Math.pow(R, 2);
            final int distance = (int)Math.pow(x - a, 2) + (int)Math.pow(y - b, 2);
            
            
            // 条件に沿って出力する
            System.out.println(noise > distance ? "noisy" : "silent");   
        }
        
    }
}