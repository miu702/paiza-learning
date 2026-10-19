
/*
あなたは家計簿をつけています。

7 日分の食費が 1 日分ずつ改行区切りで与えられるので
合計で食費がいくらかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 食費リストを作成する
        Scanner sc = new Scanner(System.in);
        final int number = 7;
        ArrayList<Integer> prices = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final int price = sc.nextInt();
            prices.add(price);
        }

        // 合計を計算し、出力する
        int total = 0;
        for (Integer N : prices)
            total += N;
        System.out.println(total);
    }
}