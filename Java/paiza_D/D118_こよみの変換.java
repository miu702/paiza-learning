
/*
Paizaさんはある事件について調査していて、事件発生日を調べたところ和暦で表示された文書が見つかりました。
西暦に直して今から何年前の出来事なのか計算しようとしましたが、その和暦が何年から始まったのかど忘れしてしまいました。

和暦が昭和または平成で与えられるので、Paizaさんの代わりに和暦を西暦に戻すプログラムを作成し、西暦で言うと何年の出来事なのか出力してください。

ただし、昭和は1926年から、平成は1989年から始まります。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String era = sc.next();
        final int year = sc.nextInt();

        // 年の設定をする
        final int syouwa_s = 1926;
        final int heisei_s = 1989;
        final int adjustment = 1;

        // 条件によって年を指定する
        if (era.equals("S")) {
            final int ad = syouwa_s + year - adjustment;
            System.out.println(ad);
        } else if (era.equals("H")) {
            final int ad = heisei_s + year - adjustment;
            System.out.println(ad);
        }

    }
}