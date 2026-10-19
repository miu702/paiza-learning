
/*
あなたは掃除の準備をしています。床を掃除するために洗剤を水に薄めようとしています。

洗剤の量 a ミリリットル、洗剤に対して b 倍の量の水を用意する必要があります。何ミリリットルの水が必要か出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 洗剤の量と倍率を定義する
        Scanner sc = new Scanner(System.in);
        final int soap = sc.nextInt();
        final int coefficient = sc.nextInt();

        // 水を量を計算し、出力する
        final int water = soap * coefficient;
        System.out.println(water);
    }
}