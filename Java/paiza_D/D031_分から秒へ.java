
/*
ある正の整数 n が入力されます。
n 分から秒へ変換するプログラムを作成して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        final int minutes = 60;
        final int total = minutes * number;
        System.out.println(total);
    }
}