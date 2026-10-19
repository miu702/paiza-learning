
/*
あなたは給与の計算プログラムを作成しています。
時給 N と働いた時間 M が改行区切りで与えられるので給与を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int hourlyWage = sc.nextInt();
        final int hour = sc.nextInt();

        // 計算し、出力する
        final int total = hourlyWage * hour;
        System.out.println(total);
    }
}