/*
あなたは餅つきのためにもち米の用意をしています。

もち米 1 合あたり 3 個の丸めたお餅を作ることができます。 
n 合のもち米を用意したとき何個の丸めたお餅ができるかを出力してください。

*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // お米の合数を定義する
        Scanner sc = new Scanner(System.in);
        final int unit = sc.nextInt();
        
        
        // できるお餅の量を計算し、出力する
        final int number = 3;
        final int total = unit * number;
        System.out.println(total);
    }
}