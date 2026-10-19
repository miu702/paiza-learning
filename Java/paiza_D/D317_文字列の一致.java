
/*
2 つの文字列が改行区切りで与えられます。

2 つの文字列が同じ場合は "Yes" それ以外は "No" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 2つの文字列を配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] words_1 = sc.nextLine().split("");
        final String[] words_2 = sc.nextLine().split("");

        // 1文字ずつチェックし、結果を出力する
        boolean check = true;
        if (words_1.length != words_2.length) {
            check = false;
        } else {
            for (int i = 0; i < words_1.length; i++) {
                if (!(words_1[i].equals(words_2[i]))) {
                    check = false;
                    break;
                }
            }
        }
        System.out.println(check ? "Yes" : "No");

    }
}