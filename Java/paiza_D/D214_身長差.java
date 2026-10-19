
/*
2 人の兄弟がいます。
兄である A 君の身長 a (cm) と、弟である B 君の身長 b (cm) が与えられます。
兄である A 君の身長は必ず B 君の身長以上です。2 人の身長の差を求めてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int number_1 = sc.nextInt();
        final int number_2 = sc.nextInt();

        // 引き算を実施する
        final int between = number_1 - number_2;
        System.out.println(between);
    }
}