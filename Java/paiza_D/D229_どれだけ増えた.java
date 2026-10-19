
/*
A 君の 1 年前の体重は 10 kg でしたが、現在は N kg です。 A 君の体重は何 kg 増えましたか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 現在の体重を定義する
        Scanner sc = new Scanner(System.in);
        final int current = sc.nextInt();

        // 去年と比べて変化量を計算する
        final int lastYear = 10;
        final int add = current - lastYear;
        System.out.println(add);
    }
}