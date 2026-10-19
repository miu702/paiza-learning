
/*
ある金庫のパスワードは paiza です。
入力された文字列 S がパスワードと一致するか調べてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String input_word = sc.next();
        final String password = "paiza";

        // 入力値がパスワードと一致するか調査
        System.out.println(input_word.equals(password) ? "Yes" : "No");
    }
}