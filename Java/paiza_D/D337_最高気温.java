
/*
あなたは 3 日間の気温のデータから最高気温を出力するプログラムを作成しています。

改行区切りで 3 つの気温 t_1, t_2, t_3 が与えられるので最高気温を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 気温の入力を配列にまとめる
        Scanner sc = new Scanner(System.in);
        final int days = 3;
        ArrayList<Integer> temperatures = new ArrayList<>();
        for (int i = 0; i < days; i++) {
            final int temperature = sc.nextInt();
            temperatures.add(temperature);
        }

        // 気温の最高を求める
        int max = Integer.MIN_VALUE;
        for (Integer T : temperatures) {
            if (max < T)
                max = T;
        }

        System.out.println(max);

    }
}