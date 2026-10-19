
/*
あなたは朝、昼、夜の3回の気温を計測しています。

改行区切りで朝、昼、夜の気温が改行区切りで与えられるので最高気温を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 気温リストを作成する
        Scanner sc = new Scanner(System.in);
        final int days = 3;
        ArrayList<Integer> temperatures = new ArrayList<>();
        for (int i = 0; i < days; i++) {
            final int temperature = sc.nextInt();
            temperatures.add(temperature);
        }

        // 配列の中から最大値を出力する
        int hottest = Integer.MIN_VALUE;
        for (Integer T : temperatures) {
            if (T > hottest)
                hottest = T;
        }
        System.out.println(hottest);
    }
}