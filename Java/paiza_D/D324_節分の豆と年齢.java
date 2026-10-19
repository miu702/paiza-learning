
/*
節分の豆を 100 粒購入しました。
年齢 n 歳と同じ粒数を食べた時に何粒の豆が残るか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 年齢を定義する
        Scanner sc = new Scanner(System.in);
        final int age = sc.nextInt();

        // 残りの豆を計算し、出力する
        final int beans = 100;
        final int rest = beans - age;
        System.out.println(rest);
    }
}