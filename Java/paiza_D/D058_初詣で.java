
/*
今日は杯座神社に初詣でにやってきました。この神社の参拝の仕方は特殊で、
参拝時の「礼」と「拍手」の回数が時と場合によって変わります。
規則がよくわからないあなたは前の人のやり方をみて真似することにしました。

前の人の参拝の「L 礼 M 拍手 N 礼」 について L, M, N が与えられるので、
「礼」を "A"、「拍手」を "B"　として参拝の動作を表す文字列を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        // ルールを作成する
        final String[] rule = { "A", "B", "A" };
        ArrayList<String> operation = new ArrayList<>();
        for (int i = 0; i < rule.length; i++) {
            for (int j = 0; j < Integer.parseInt(lines[i]); j++) {
                operation.add(rule[i]);
            }
        }

        // StringBuilderを使って、半角スペースなしを出力する
        StringBuilder sb = new StringBuilder();
        for (String s : operation) {
            sb.append(s);
        }
        System.out.println(sb.toString());
    }
}