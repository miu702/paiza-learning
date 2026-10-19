
/*
あなたは室内の快適な湿度を保つために湿度を確認するプログラムを作成しています。

快適な湿度の基準は 40 〜 60 %と言われています。

室内の湿度が入力されるので湿度が 40 % 以上、60 %以下であれば「OK」、
それ以外の場合は「NG」と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力を定数に変換する
        Scanner sc = new Scanner(System.in);
        final int current = sc.nextInt();

        // 条件に沿って出力する
        final int min = 40;
        final int max = 60;
        System.out.println(current >= min && current <= max ? "OK" : "NG");
    }
}