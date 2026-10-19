
/*
あなたは、あるWebサービスを運営しています。
登録者数が目標の数に達したらキャンペーンを行おうと考えています。

登録者数 X と目標数 Y が改行区切りで与えられるので、
目標値以上の登録者数ならば 「Thank you」と出力し、
目標値未満であれば目標値までに必要な登録者数を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int x = sc.nextInt();
        final int y = sc.nextInt();

        // 条件に沿って出力する
        System.out.println(x >= y ? "Thank you" : y - x);
    }
}