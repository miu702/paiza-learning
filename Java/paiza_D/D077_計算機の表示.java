/*
あなたは正の整数の掛け算のみをする計算機のプログラムを作成しています。
その計算機は最大で4桁までしか表示できず 9,999 より大きな数字は表示が出来ず "NG" と表示されます。

2つの正の整数 a, b が入力されるので、a と bを掛け算した時 9,999 以下であれば掛け算した結果を出力し、
10,000 以上の場合は "NG" と出力するプログラムを作成してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] numberStr = sc.nextLine().split(" ");

        final int A = Integer.parseInt(numberStr[0]);
        final int B = Integer.parseInt(numberStr[1]);

        final int total = A * B;
        final int upper_limit = 9999;
        if (total >= upper_limit) {
            System.out.println("NG");
        } else if (total < upper_limit && total >= 1) {
            System.out.println(total);
        }

    }
}