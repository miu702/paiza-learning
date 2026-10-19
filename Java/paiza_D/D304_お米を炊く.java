/*
あなたはお米を炊こうとしています。
お米を炊くために必要な水の量は重さの 1.4 倍と言われているのでそのように用意することにしました。

n グラムの米を炊くのに必要な水の量を計算し出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // お米の量を定義する
        Scanner sc = new Scanner(System.in);
        final int rice = sc.nextInt();
        
        // 水の量を計算し、出力する
        final double coefficient = 1.4;
        final double water = rice * coefficient;
        System.out.println((int)water);
    }
}