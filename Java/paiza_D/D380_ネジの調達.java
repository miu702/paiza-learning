/*
あなたはある機械を組み立てるためにネジを調達しています。

機械 1 台あたり n 本のネジが必要です。 また 1 台あたりの予備ネジを m 本用意することにしました。
x 台の機械を組み立てるために調達するネジの本数を出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 必要なねじ、予備、組み立てる機械の数を定義する
        Scanner sc = new Scanner(System.in);
        final int need = sc.nextInt();
        final int spare = sc.nextInt();
        final int units = sc.nextInt();

        
        // 合計のねじを定義する
        final int total = (need + spare) * units;
        System.out.println(total);
        
    }
}