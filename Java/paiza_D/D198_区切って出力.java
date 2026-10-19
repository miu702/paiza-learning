
/*
あなたは入力された数値を出力するプログラムを作成しています。

2つの数字が入力されるので「/」で2つの数字を区切って1行出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number_1 = sc.nextInt();
        final int number_2 = sc.nextInt();

        // テンプレートリテラルを使用して、出力
        final String output = String.format("%d/%d", number_1, number_2);
        System.out.println(output);
    }
}