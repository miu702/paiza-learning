
/*
スペース区切りで2つの単語が入力されるので順番を入れ替えて
スペース区切りで出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        // テンプレートリテラルを使用して、出力する
        final String output = String.format("%s %s", lines[1], lines[0]);
        System.out.println(output);
    }
}