
/*
あなたは文字を縦に表示するプログラムを作成しています。
文字列 S が 1 行与えられるので 1 文字ずつ改行区切りで出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        for (String w : words) {
            System.out.println(w);
        }
    }
}