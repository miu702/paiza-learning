
/*
あなたは動画の再生数を比較するプログラムを作成しています。

改行区切りで 3 つの動画の再生数が与えられるので一番再生数が多い再生数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 数値の配列を作成する
        Scanner sc = new Scanner(System.in);
        final int number = 3;
        ArrayList<Integer> plays = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final int play = sc.nextInt();
            plays.add(play);
        }

        // 配列の中で最大値を出力する
        int highest = Integer.MIN_VALUE;
        for (Integer P : plays) {
            if (P > highest)
                highest = P;
        }
        System.out.println(highest);

    }
}