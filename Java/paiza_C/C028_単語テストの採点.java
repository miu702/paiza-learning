
/*
英単語のテストの採点ではどこまでをスペルミスとみなしてどこまでを別の単語とみなすかが悩みどころです。
そこで paiza 予備校では以下の様な採点基準を導入してこれに従って厳密に採点することにしています。

・正解の単語と完全一致→ ◯ 2 点
・正解の単語と長さ(文字数)が異なる→ × 0 点
・正解の単語と長さは同じだが 1 文字だけ異なる→ △ 1 点
・正解の単語と長さは同じだが 2 文字以上異なる→ × 0 点

ここで「文字が異なる」とは、同じ位置にある文字が異なるということを意味しています。

例)
正解: apple, 解答: aple → 0 点 (長さが異なる)
正解: orange, 解答: olange → 1 点 (長さは同じだが 1 文字だけ異なる)
正解: grape, 解答: glepe → 0 点 (長さは同じだが 2 文字異なる)
正解: lemon, 解答: lemon → 2 点 (完全一致)

合計得点 → 3 点

問題数と各問題の正解の単語および生徒の解答が与えられるので、
このような形で paiza 予備校の採点基準に従いこの生徒の合計得点を算出してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 単語数を定義する
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();

        // 単語数の数だけ、ループ処理する
        int total = 0;
        for (int i = 0; i < Integer.parseInt(numberStr); i++) {
            // 入力値から分割する
            final String[] words = sc.nextLine().split(" ");
            final String wordA = words[0];
            final String wordB = words[1];

            // ポイントの計算を関数で定義する
            final int addPoint = wordCheck(wordA, wordB);
            total += addPoint;
        }

        // 合計ポイントを出力する
        System.out.println(total);
    }

    // 関数でポイントの加算を行う。
    static int wordCheck(String A, String B) {

        if (A.equals(B)) {
            // 完全一致 = 2点
            return 2;

        } else if (A.length() != B.length()) {
            // 長さが違う = 0点
            return 0;

        } else if (A.length() == B.length()) {
            // 長さは一緒 = 詳しく調査
            int start = 2;
            int lost = 0;
            final String[] ASplit = A.split("");
            final String[] BSplit = B.split("");

            // 文字同士の一致なので、==や!=は使えない。
            for (int j = 0; j < ASplit.length; j++)
                if (!ASplit[j].equals(BSplit[j]))
                    lost++;
            return Math.max(start - lost, 0);
        }

        // else ifを置きたいので、エラー回避のためにreturn設置
        return 0;

    }
}