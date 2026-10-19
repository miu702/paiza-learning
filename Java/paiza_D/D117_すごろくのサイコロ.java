/*
あなたはすごろくをしています。このすごろくでは、
目が1から6まである通常のサイコロをいくつか使用し、出た目の数の合計だけ駒を前に進めます。
使用するサイコロの数と出た目が与えられるので、何マス前に進めるのか計算してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final String number = sc.nextLine();
        final String[] numbersStr = sc.nextLine().split(" ");
        
        
        // 合計を求める
        int total = 0;
        for(String N : numbersStr) {
            final int numbers = Integer.parseInt(N);
            total += numbers;
        }
        System.out.println(total);
    }
}