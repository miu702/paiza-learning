
/*
あなたは禁止ワードが含まれるかどうかを判定するプログラムを作成しています。

禁止ワード W と判定する文字列 S が改行区切りで順に与えられるので
S に W が含まれている時は "NG" それ以外の場合は文字列 S をそのまま出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String prohibited = sc.next();
        final String word = sc.next();

        // 調査対象.contains(検索する要素)：指定した要素が含まれていたらtrue、いないとfalseを返す。
        if (word.contains(prohibited)) {
            System.out.println("NG");
        } else {
            System.out.println(word);
        }

    }
}