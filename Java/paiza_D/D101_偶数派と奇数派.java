
/*
偶数と奇数、どちらが好きですか？

あなたは会社を代表して 2 つの数字を選ばなくてはなりませんが、
偶数好きと奇数好きの溝が深まらないよう、それぞれを 1 つずつ選ばなくてはなりません。

候補としてあげられた 2 つの数字が入力されるので、
偶数と奇数が両方入っているか確認してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        // 入力 → 変数に変換するend

        // 2つのチェック用変数を作り、両方trueになるか？でチェックを実施する。
        boolean checkOdd = false;
        boolean checkEven = false;
        for (String N : numberStr) {
            if (Integer.parseInt(N) % 2 == 0) {
                checkEven = true;
            } else if (Integer.parseInt(N) % 2 == 1) {
                checkOdd = true;
            }
        }
        // 2つのチェック用変数を作り、両方trueになるか？でチェックを実施する。end

        // 条件に沿って出力する
        System.out.println(checkOdd && checkEven ? "YES" : "NO");
        // 条件に沿って出力するend

    }
}