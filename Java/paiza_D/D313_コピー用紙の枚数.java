
/*
あなたは資料の印刷をしています。
コピー用紙が何枚必要か計算することにしました。

資料は n ページあり m 部を印刷する必要があります。

合計で何枚のコピー用紙が必要か出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 資料のページ数と、何部必要なのか定義する
        Scanner sc = new Scanner(System.in);
        final int pages = sc.nextInt();
        final int number = sc.nextInt();

        // 合計の紙の枚数を計算し、出力する
        final int total = pages * number;
        System.out.println(total);
    }
}