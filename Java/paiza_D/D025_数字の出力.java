
/*
ある正の整数 n が入力されます。n を 0埋め3桁 で出力してください。
0埋め3桁 とは2桁以下の数字の場合、左側に0を加えて3桁にすることを言います。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        final String num2 = String.format("%03d", number);
        System.out.println(num2);
    }
}