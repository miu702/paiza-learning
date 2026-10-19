
/*
あなたは田んぼの管理をしています。
田んぼの広さの単位は 1 反で 1 反あたり 600 〜 800 kg の範囲で収穫量を予想しています。

管理している田んぼの広さ n 反と予想している　1 反あたりの収穫量 m kg が
与えられるので総収穫量が何 kg になるか計算し出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 広さと、予想量を定義する
        Scanner sc = new Scanner(System.in);
        final int area = sc.nextInt();
        final int prediction = sc.nextInt();

        // 合計を計算し、出力する
        final int total = area * prediction;
        System.out.println(total);
    }
}