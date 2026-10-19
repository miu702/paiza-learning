
/*
あなたは単純な運賃計算のプログラムを作成しています。

その運賃計算は以下のルールで行われます。
・初乗り運賃 100 円
・1 区間ごとに 10 円ずつ加算

ある乗客の乗った区間数 N が与えられるので運賃がいくらかを出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int section = sc.nextInt();

        final int initial = 100;
        final int coefficient = 10;

        final int total = initial + coefficient * section;
        System.out.println(total);
    }
}