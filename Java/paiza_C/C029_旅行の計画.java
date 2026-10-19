/*
あなたは連休に N 日間の旅行にいく計画を立てています。降水確率の予報を見て、
N 日間の降水確率の平均が最も低くなる日程を選びます。

例)
連休: 7 日間 (19 日から 25 日)
旅行日数: 3 日間
各日付の降水確率: 上図
→旅行日程: 22日 - 24日

このような形で連休の日数、旅行の日数および各日付の降水確率が与えられたとき、 
降水確率の平均が最も低くなる日程を求めてください。

なおこのような日程が複数あった場合はそのうち最も早いものを出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 全体の日にちと旅行の日数を定義する
        Scanner sc = new Scanner(System.in);
        final String[] dateData = sc.nextLine().split(" ");
        final int fullDay = Integer.parseInt(dateData[0]);
        final int period = Integer.parseInt(dateData[1]);
        
        
        // 全体の日付と雨の量を定義する
        ArrayList<Integer> days = new ArrayList<>();// 日にち
        ArrayList<Integer> rains = new ArrayList<>();// 雨のデータ
        for(int i = 0; i < fullDay; i++) {
            final String[] date = sc.nextLine().split(" ");
            final int day = Integer.parseInt(date[0]);
            final int rain = Integer.parseInt(date[1]);
            days.add(day);
            rains.add(rain);
        }
        
        
        // 旅行の日数分の1つ目のデータを作成する。
        ArrayList<Integer> totals = new ArrayList<>();
        int sum_rain = 0;
        for(int j = 0; j < period; j++) {
            sum_rain += rains.get(j);
        }
        totals.add(sum_rain);
        
        
        // 2つ目以降のデータも作成する。前のデータも活用することで処理量を削減する。
        for(int k = 0; k < fullDay - period; k++) {
            final int left = k;
            final int right = k + period;
            
            // 1つずつ動かす。左を引いて、右は足す。
            sum_rain -= rains.get(left);
            sum_rain += rains.get(right);
            
            totals.add(sum_rain);
        }
        
        
        // 配列の中から最小値を見つめる。同時に日付も変更する。
        int min = Integer.MAX_VALUE;
        int start = 0;
        int end = 0;
        for(int x = 0; x < totals.size(); x++) {
            
            // ここで最小値を更新する。>=にすると、同じ場合も更新されるので、条件に一致する最終の期間の出力になる。
            if(min > totals.get(x)) {
                min = totals.get(x);
                
                // 日にちを更新する。-1しているのは、3日間の時に+3すると4日目になってしまうから。
                start = days.get(x);
                end = days.get(x + period - 1);
            }
            
        }
        
        
        // 結果を出力する
        System.out.println(start + " " + end);
        
    }
}