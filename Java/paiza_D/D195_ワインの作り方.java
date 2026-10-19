
/*
あなたはワインを作るためにぶどうがどれくらい必要なのか気になり計算することにしました。

ぶどうはボトルワイン 1 本あたり 1.5 kg のぶどうを使用するとした時、
ボトルワイン n 本を作るときに必要なぶどうの量を計算し出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int grapes = sc.nextInt();

        final double unit = 1.5;
        final double total = unit * grapes;
        System.out.println(total);
    }
}