
/*
あなたはある 1日の 6 時間ごとの気温データから最低気温を出力するプログラムを作成しています。

改行区切りである 1日の 6 時間ごとの気温データが与えられるので最も低い気温を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 気温のリストを作成する
        Scanner sc = new Scanner(System.in);

        final int number = 4;
        ArrayList<Integer> temperatures = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final int temperature = sc.nextInt();
            temperatures.add(temperature);
        }

        // 初期値をint型の最大値にして、数値のより小さい方を残す
        int min = Integer.MAX_VALUE;
        for (Integer N : temperatures) {
            if (min > N)
                min = N;
        }

        // 一番低い値を出力する
        System.out.println(min);
    }
}