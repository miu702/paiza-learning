/*
節分では年齢と同じ数だけの豆を食べる風習がありあなたはその用意をしています。

n 人の子どもたちの年齢が改行区切りで与えられるので
合計で何個の豆を用意すればいいか出力してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 人数を定義し、配列を作成する
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        ArrayList<Integer> ages = new ArrayList<>();
        
        // 年齢リストを作成する
        for(int i = 0; i < number; i++) {
            final int age = sc.nextInt();
            ages.add(age);
        }
        
        // 年齢の合計値を求める
        int total = 0;
        for(Integer A : ages) {
            total += A;
        }
        System.out.println(total);
    }
}