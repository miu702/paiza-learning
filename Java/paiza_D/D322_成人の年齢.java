
/*
あなたは入力された年齢から成人年齢 18 歳以上の場合は "Yes" 、
未満の場合は "No" とするプログラムを作成しています。

年齢 n 歳が与えられるので 18 歳以上の場合は "Yes" 、未満の場合は "No" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 年齢を定義する
        Scanner sc = new Scanner(System.in);
        final int age = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 18;
        System.out.println(age >= limit ? "Yes" : "No");
    }
}