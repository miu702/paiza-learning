
/*
あなたは料理をしています。

料理では 1 人前で n グラムの塩を使います。
m 人前の料理を作る時に何グラムの塩を用意すればいいか計算し出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1人分の量と人数を定義する
        Scanner sc = new Scanner(System.in);
        final int salt = sc.nextInt();
        final int member = sc.nextInt();

        // 合計の量を計算し、出力する
        final int total_salt = salt * member;
        System.out.println(total_salt);
    }
}