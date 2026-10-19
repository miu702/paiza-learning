
/*
paizaカードゲームは、複数枚の子カードそれぞれが、1枚の親カードとの強弱関係で勝負するゲームです。

どのカードにも2つの番号が書かれています。
1つ目の番号は1から10の整数、2つ目の番号は1から4の整数で表されます。
また、2つの番号の各組み合わせは1枚だけカードの束に含まれています。
(同じカードが2枚以上存在しません)

2枚のカードの強弱関係は、次のルールによって決まります。
・1つ目の番号が大きいカードのほうが強い
・1つ目の番号が同じ場合、2つ目の番号が小さいカードのほうが強い

親カードと子カードの情報が与えられるので、それらの強弱関係を調べるプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 親のカードと、ターンを定義する
        Scanner sc = new Scanner(System.in);
        final String[] parents = sc.nextLine().split(" ");
        final String trunStr = sc.nextLine();
        final int parent_A = Integer.parseInt(parents[0]);
        final int parent_B = Integer.parseInt(parents[1]);

        // ターンの数だけ、繰り返し処理を行う。
        for (int i = 0; i < Integer.parseInt(trunStr); i++) {
            // 子のカードを定義する
            final String[] children = sc.nextLine().split(" ");
            final int child_A = Integer.parseInt(children[0]);
            final int child_B = Integer.parseInt(children[1]);

            // 条件に沿って出力する
            if (parent_A == child_A) {
                System.out.println(parent_B < child_B ? "High" : "Low");

            } else if (parent_A > child_A) {
                System.out.println("High");

            } else if (parent_A < child_A) {
                System.out.println("Low");

            }

        }
    }
}