
/*
あなたは、今晩の夕飯の買い出しに来ています。
買うべき食材のメモには、牛肉とのみ書いてあり、
どの品質のものかは書かれていませんでした。
そこで、店頭に並んでいる 3 種類の牛肉の中で中等の品質のものを買うことにしました。

店頭に並んでいる牛肉の値段が与えられるので、
中等のものの価格を出力するプログラムを作成してください。
なお、金額が高いほど品質が良いとします。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        // 配列を数値に変換する
        int[] priceList = new int[3];
        for (int i = 0; i < lines.length; i++) {
            priceList[i] = Integer.parseInt(lines[i]);
        }

        // ソートして、ループで降順にする
        Arrays.sort(priceList);
        for (int f = 0, l = priceList.length - 1; f < l; f++, l--) {
            int temp = priceList[f];
            priceList[f] = priceList[l];
            priceList[l] = temp;
        }

        // 中間のデータを出力
        final int middle = priceList[1];
        System.out.println(middle);
    }
}