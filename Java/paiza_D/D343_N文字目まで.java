/*
文字列 S が与えられるので 1 文字目から N 文字目まで出力してください。

入力は 1 行目文字列 S の長さ L 、 2 行目に文字列 S 、 3 行目に出力する範囲 N 文字目が与えられます。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 文字列の長さ、文字列、範囲を定義する
        Scanner sc = new Scanner(System.in);
        final int size = sc.nextInt();
        final String word = sc.next();
        final int number = sc.nextInt();
        
        // 変数.substring(左, 右 + 1)とすることで、左から右の範囲を切り取ることができる。
        final String output = word.substring(0, number);
        System.out.println(output);
    }
}