
/*
あなたはお店のレジの列に並んでいます。

前に並んでいる人数 n と後ろに並んでいる人数 m が改行区切りであたえられるので、
あなた自身を含め合計で何人並んでいるか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 前と後ろの人数を定義する
        Scanner sc = new Scanner(System.in);
        final int front = sc.nextInt();
        final int back = sc.nextInt();

        // 合計の人数を計算し、出力する
        final int total = front + back + 1;
        System.out.println(total);
    }
}