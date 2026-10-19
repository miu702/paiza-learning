
/*
あなたは入力された文字列を縦に表示しようとしています。
文字列の長さ n と文字列 S が与えられるので改行区切りで出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        final String[] words = sc.nextLine().split("");

        // 繰り返し文で、1つずつ出力
        for (String w : words) {
            System.out.println(w);
        }
    }
}