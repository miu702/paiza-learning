/*
Paiza 高校で英語、国語、数学の 3 科目のテストがありました。

Paiza 高校ではテストを受けた X 人に対して、科目ごとに、下から Y 位までの生徒を赤点としています。
ただし、下から Y 位の生徒が複数いた場合、その全員が赤点となります
(全員が同じ点数だった場合は全員が下から 1 位なので赤点となります)。
また、下から i 位 (1 ≦ i ≦ X-1) の生徒が複数いた場合、次の順位はその人数分飛ばされます 


テストを受けた生徒の人数 X、赤点となってしまう下からの順位 Y、各生徒の科目ごとの点数が与えられるので、
それぞれの生徒がいくつ赤点を取ったか出力してください。


入力される値
入力は以下のフォーマットで与えられます。

X Y
E_1 J_1 M_1
E_2 J_2 M_2
...
E_X J_X M_X
・1 行目にはテストを受けた生徒の人数を表す整数 X と赤点となってしまう下からの順位を表す整数 Y がこの順で
半角スペース区切りで与えられます。
・続く X 行のうち、i 行目(1 ≦ i ≦ X)には i 番目の生徒の英語、国語、数学の点数を表す整数 
E_i, J_i, M_i がこの順で半角スペース区切りで与えられます。
・入力は合計で X + 1 行となり、末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
各生徒の赤点の数を以下の形式で出力してください。
a_1
a_2
...
a_X
・期待する出力は X 行からなります。
・i 行目 (1 ≦ i ≦ X) には i 番目の生徒の赤点科目の数を出力してください。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・2 ≦ X ≦ 100
・1 ≦ Y ≦ X
・0 ≦ E_i, J_i, M_i ≦ 100 (1 ≦ i ≦ X)



入力例1
4 2
80 60 40
50 50 40
80 50 40
40 80 80


出力例1
1
3
2
1


入力例2
3 1
100 50 50
100 50 50
100 50 50


出力例2
3
3
3
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final String[] inputs = sc.nextLine().split(" ");
        final int examinee = Integer.parseInt(inputs[0]);
        final int limit = Integer.parseInt(inputs[1]);

        ArrayList<int[]> points = new ArrayList<>();
        for (int i = 0; i < examinee; i++) {
            final int[] point = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            points.add(point);
        }

        // 得点を配列にする。
        ArrayList<Integer> english = new ArrayList<>();
        ArrayList<Integer> japanese = new ArrayList<>();
        ArrayList<Integer> math = new ArrayList<>();
        for (int[] point : points) {
            english.add(point[0]);
            japanese.add(point[1]);
            math.add(point[2]);
        }

        // 小さい順に並べる
        Collections.sort(english);
        Collections.sort(japanese);
        Collections.sort(math);

        // 赤点の基準値
        final int cut_english = english.get(limit - 1);
        final int cut_japanese = japanese.get(limit - 1);
        final int cut_math = math.get(limit - 1);

        // 人ごとに赤点の数を決める
        ArrayList<Integer> counts = new ArrayList<>();
        for (int[] point : points) {
            int count = 0;

            // 英語
            if (point[0] <= cut_english)
                count++;
            // 国語
            if (point[1] <= cut_japanese)
                count++;
            // 数学
            if (point[2] <= cut_math)
                count++;

            counts.add(count);
        }

        // 結果を出力する
        for (int c : counts)
            System.out.println(c);

    }
}