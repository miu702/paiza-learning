/*
あなたは部品の発注をしています。

部品の価格 x 円と発注個数 n 個が改行区切りで与えられるので総額で
いくらの発注になるか出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 1つの価格と注文数を定義する
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();
        final int times = sc.nextInt();
        
        
        // 合計金額を計算し、出力する
        final int total = price * times;
        System.out.println(total);
    }
}