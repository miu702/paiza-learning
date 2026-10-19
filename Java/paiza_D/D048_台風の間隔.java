
/*
あなたは気象庁のデータ分析の担当者で、
8 月の台風の上陸の間隔についてのデータを作るよう求められました。

サンプルとなる5 個の台風について上陸した日が与えられるので、
それぞれ (2 個目以降) について直前の上陸日との間隔日数を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> numbers = new ArrayList<>();
        final int max = 5;
        for (int i = 0; i < max; i++) {
            final int number = sc.nextInt();
            numbers.add(number);
        }

        for (int j = 1; j < max; j++) {
            final int between = numbers.get(j) - numbers.get(j - 1);
            System.out.println(between);
        }

    }
}