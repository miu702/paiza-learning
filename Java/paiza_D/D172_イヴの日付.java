/*
あなたはカレンダーのプログラムを作成しています。
クリスマスイヴなど記念日の前日をイヴとして計算して表示しようと考えてます。

日付が入力されるのでその日付の 1 日前を出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int day = sc.nextInt();
        
        // 昨日の日付を計算する
        final int lastDay = day - 1;
        System.out.println(lastDay);
    }
}