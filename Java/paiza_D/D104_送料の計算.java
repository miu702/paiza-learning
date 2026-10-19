
/*
あなたは配送物の送料の計算をするプログラムを作成しています。

送料は以下のルールで決められています。

・10 キログラム未満であれば一律 1000 円
・10 キログラム以上であれば 1キログラムあたり 150 円

配送物の重さが与えられるので送料が何円かを出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int weight = sc.nextInt();

        final int minAmount = 1000;
        final int coefficient = 150;

        final int limit = 10;
        if (weight >= limit) {
            final int total = coefficient * weight;
            System.out.println(total);
        } else if (weight < limit && weight > 0) {
            System.out.println(minAmount);
        }

    }
}