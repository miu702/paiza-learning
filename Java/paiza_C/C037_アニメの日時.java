/*
深夜アニメの放送開始時刻は、しばしば "時" を表す部分の数字が24以上になることを許容し
次のように表記することがあります。

01/27 24:30
この日付を "時" の部分が0以上23以下になるような表記で、

01/28 00:30
と表すことができます。


前者の表記方法は時として便利ではありますが、実際に放送される "日" が知りたい場合は後者のほうが便利です。


そこで、日時が与えられるので、"時" の部分が 0 以上 23 以下になるように修正した日時を出力する
プログラムを作成してください。

ただし、"時" を修正した結果、日がその月に存在しない日になった場合でも月を調整することなく
そのまま出力してください。もしかすると、このプログラムが使われる世界ではそのような日付が
存在するかもしれないからです
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力→変数に変換する。本日の学習を活かして、配列のまま数値化する。
        Scanner sc = new Scanner(System.in);
        final String[] inputs = sc.nextLine().split(" ");
        final int[] date = Arrays.stream(inputs[0].split("/")).mapToInt(Integer::parseInt).toArray();
        final int[] fullTime = Arrays.stream(inputs[1].split(":")).mapToInt(Integer::parseInt).toArray();
        
        
        // 変数の意味を分かりやすくする。
        final int month = date[0];
        final int day = date[1];
        final int hour = fullTime[0];
        final int minutes = fullTime[1];
        
        
        // 変化させる時間を計算する
        final int oneDay = 24;
        final int addDays = hour / oneDay;
        final int rest = hour % oneDay;
        final int newDay = day + addDays;
        
        
        // 結果を出力する。0(埋める数)2(桁数)d(投入するデータ型：dは数値)となる。
        System.out.printf("%02d/%02d %02d:%02d", month, newDay, rest, minutes);
    }
}
