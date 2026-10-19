
/*
あるコンサートの入場券は大文字アルファベット 1 文字に
数字を 3 つ続けた番号が振られています。
先頭の大文字アルファベット一文字を除いた数字 3 文字がゾロ目 (全て同じ) の
お客さんには豪華プレゼントがあるそうです。
入場券に振られていた 4 文字が与えられるのでプレゼントがもらえるかを出力してください。

例えば入力される入場券の文字列が、"S123" の場合はもらえないので"No"、
"P777" の場合はプレゼントがもらえるので "Yes" を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String ticket = sc.next();

        // 番号の切り出しとチェック用のサンプルを作成する
        final String ticketNumber = ticket.substring(1);
        final Character sample = ticketNumber.charAt(0);

        // 1文字ずつチェックし、falseの時、終了する
        boolean check = true;
        for (int i = 0; i < 3; i++) {
            final Character N = ticketNumber.charAt(i);

            // equalsするには、同じデータ型が必要になる
            if (sample != N) {
                check = false;
                break;
            }
        }

        // 条件に沿って出力する
        System.out.println(check ? "Yes" : "No");
    }
}