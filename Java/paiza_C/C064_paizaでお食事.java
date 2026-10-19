/*
就活サイト paiza では、就活生の食生活を応援するために、レストラン paiza の経営を始めました。 
このレストランでは、バイキング形式となっており、就活生の健康管理のために、
各料理には 100 g あたりのカロリーが書かれています。


料理の品数と各料理の 100 g あたりのカロリー、また、就活生の人数と、
それぞれの食べた量 ( g ) のリストが与えられるので、あなたは各就活生が摂取したカロリーの合計を
計算してください。

また、食べた各料理のカロリーが小数になる場合、小数点以下を切り捨ててから和を計算してください。


入力される値
入力は以下のフォーマットで与えられます。

M N  
c_1  
c_2  
...  
c_M
a_{1,1} a_{1,2}  ... a_{1,M}  
a_{2,1} a_{2,2}  ... a_{2,M}  
...  
a_{N,1} a_{N,2}  ... a_{N,M}
・1 行目にそれぞれ料理の品数、就活生の人数を表す整数 M , N がこの順で半角スペース区切りで与えられます。

・続く M 行のうちの i 行目 (1 ≦ i ≦ M) には、100 g あたりのカロリーを表す整数 c_i がこ
の順で半角スペース区切りで与えられます。
・さらに続く N 行のうちの i 行目 (1 ≦ i ≦ N) には M 個の整数が半角スペース区切りで与えられます。
i 行目の j 番目 (1 ≦ j ≦ M) の整数 a_{i, j} は i 番目の就活生が食べた、j 番目の料理の量を表します。
・入力は合計で M + N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。



期待する出力
各就活生の摂取したカロリーの合計 s_i を以下の形式で出力してください。
s_1  
s_2  
...
s_N

・期待する出力は N 行からなります。
・i 行目 (1 ≦ i ≦ N) にはそれぞれ i 番目の就活生が摂取したカロリーの合計を表す整数 s_i を出力して下さい。
・出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。


*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力から切り取る
    Scanner sc = new Scanner(System.in);
    final int[] line = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int dish_int = line[0];
    final int people = line[1];

    // 料理のカロリーを定義する
    ArrayList<Integer> calories = new ArrayList<>();
    for (int i = 0; i < dish_int; i++) {
      final String calorie = sc.nextLine();
      calories.add(Integer.parseInt(calorie));
    }

    // 食べた量を定義する
    ArrayList<ArrayList<Integer>> eat_data = new ArrayList<>();
    for (int j = 0; j < people; j++) {
      ArrayList<Integer> details = new ArrayList<>();
      final String[] D = sc.nextLine().split(" ");

      for (int k = 0; k < D.length; k++) {
        details.add(Integer.parseInt(D[k]));
      }
      eat_data.add(details);
    }

    // 人数分計算する。
    for (int x = 0; x < eat_data.size(); x++) {
      int total_calories = 0;
      for (int y = 0; y < eat_data.get(x).size(); y++) {

        // ArrayListの2次元配列を定義するには.get().get()とする。
        final int gram = eat_data.get(x).get(y);
        final int calorie = calories.get(y);
        total_calories += Math.floor((calorie * gram) / 100);

      }
      System.out.println(total_calories);
    }

  }

}