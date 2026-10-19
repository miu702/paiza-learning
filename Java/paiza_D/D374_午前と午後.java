/*
あなたは午前と午後を表示するプログラムを作成しています。

現在の時間 h が与えられるので 0 以上 12 未満であれば "AM"、 
12 以上 24未満であれば "PM" と出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 時間を定義する
        Scanner sc = new Scanner(System.in);
        final int hour = sc.nextInt();
        
        // 条件分岐に必要な変数を定義する
        final int under = 0;
        final int limit = 12;
        final int upper = 24;
        
        
        // 条件に沿って出力する
        if(hour >= under && hour < limit) {
            System.out.println("AM");   
        } else if(hour >= limit && hour < upper) {
            System.out.println("PM");
        }
        
    }
}