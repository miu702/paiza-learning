/*
あなたは、1 から 9 の数字が書かれたカードを用いて、簡易的なポーカーで遊ぶことにしました。
この簡易ポーカーでは手札が 4 枚で、この 4 枚の組み合わせにより以下の 5 種類の役が存在します。

・「Four Card」 ...... 同じ数字 4 枚からなる役
・「Three Card」 ...... 同じ数字 3 枚とそれ以外の数字 1 枚からなる役
・「Two Pair」 ...... 同じ数字 2 枚のペア 2 つからなる役
・「One Pair」 ...... 同じ数字 2 枚とそれ以外の相異なる数字 2 枚からなる役
・「No Pair」 ...... 上の 4 つ以外（4 枚が全て相異なる数字）

簡易ポーカーの手札 4 枚の数字を小さい順に並べたものが N 個与えられるので、
それぞれ上の 5 通りのうちどの役にあたるかを判定するプログラムを作成してください。


入力される値
入力は以下のフォーマットで与えられます。

N
s_1
s_2
...
s_N
・1 行目に、ポーカーの手札の個数を表す整数 N が与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 番目の手札の情報を表す 4 個の数字からなる文字列が与えられます。
i行目の文字列 s_i の j 番目 (1 ≦ j ≦ 4) の文字 s_{i, j} は、i
番目の手札の j 番目のカードに書かれた数字が s_{i, j} であるということを表します。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。


期待する出力
・それぞれの手札の役を以下の形式で出力してください。
N
s_1
s_2
...
s_N
・期待する出力は N 行からなります。
・i 行目 (1 ≦ i ≦ N) にはそれぞれ i 番目の手札の役を表す文字列として
　・「Four Card」
　・「Three Card」
　・「Two Pair」
　・「One Pair」
　・「No Pair」
のいずれかを出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 400
・1 ≦ s_{i, 1} ≦ s_{i, 2} ≦ s_{i, 3} ≦ s_{i, 4} ≦ 9 (1 ≦ i ≦ N)


入力例1
8
7777
2229
5566
2669
1689
1333
1189
3588


出力例1
Four Card
Three Card
Two Pair
One Pair
No Pair
Three Card
One Pair
One Pair


入力例2
2
1234
1234


出力例2
No Pair
No Pair

*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 入力 → 変数に変換する
        final String times = sc.nextLine();
        ArrayList<String[]> cards = new ArrayList<>();
        for (int i = 0; i < Integer.parseInt(times); i++) {
            final String[] card = sc.nextLine().split("");
            cards.add(card);
        }

        for (String[] card : cards) {
            // 1、役一覧
            Map<String, Integer> roleSheet = new LinkedHashMap<>();
            roleSheet.put("Four_card", 0);
            roleSheet.put("Three_card", 0);
            roleSheet.put("Two_pair", 0);
            roleSheet.put("One_pair", 0);

            // 2、カードの種類をカウント
            Map<String, Integer> counts = new HashMap<>();
            for (String hand : card) {
                counts.put(hand, counts.getOrDefault(hand, 0) + 1);
            }

            // 3、カードの種類から役を調査する。
            int pair = 0;
            boolean check = false;
            for (Map.Entry<String, Integer> entry : counts.entrySet()) {
                if (entry.getValue() == 4) {
                    roleSheet.put("Four_card", roleSheet.get("Four_card") + 1);
                    check = true;
                } else if (entry.getValue() == 3) {
                    roleSheet.put("Three_card", roleSheet.get("Three_card") + 1);
                    check = true;
                } else if (entry.getValue() == 2) {
                    pair++;
                }
            }

            if (pair == 2) {
                roleSheet.put("Two_pair", roleSheet.get("Two_pair") + 1);
                check = true;
            } else if (pair == 1) {
                roleSheet.put("One_pair", roleSheet.get("One_pair") + 1);
                check = true;
            }

            // 4、最終的な役を出力する。
            if (roleSheet.get("Four_card") == 1) {
                System.out.println("Four Card");

            } else if (roleSheet.get("Three_card") == 1) {
                System.out.println("Three Card");

            } else if (roleSheet.get("Two_pair") == 1) {
                System.out.println("Two Pair");

            } else if (roleSheet.get("One_pair") == 1) {
                System.out.println("One Pair");
            }

            if (!check) {
                System.out.println("No Pair");
            }

        }

    }
}