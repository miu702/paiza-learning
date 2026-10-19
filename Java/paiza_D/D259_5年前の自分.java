
/*
A 君の現在の年齢が与えられます、A君の5年前の年齢を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 現在の年齢を定義する
        Scanner sc = new Scanner(System.in);
        final int age = sc.nextInt();

        // 5年前の年齢を計算し、出力する
        final int number = 5;
        final int before = age - number;
        System.out.println(before);
    }
}