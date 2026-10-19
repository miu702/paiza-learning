
/*
あなたは、株の売買でのお金儲けを考えています。
N 日の間、1 日に一度株価をチェックし、以下のルールに従い売買をします。

・株価が c_1 円以下の場合、1 株買う
・株価が c_2 円以上の場合、持ち株「を」すべて売る
・株価が c_1 円、c_2 円の間の場合は、何もしない
・N 日目には、上記を行わず持ち株をすべて売る

N 日目に持ち株をすべて売ったあとでの損益を出力してください。
ただし、入力例 2 のように損益がマイナスになる場合があることに注意してください。


入力される値
入力は以下のフォーマットで与えられます。

N c_1 c_2
p_1
p_2
...
p_N
・1 行目には、株を売買する日数を表す整数 N、株の売買条件を表す整数 c_1, c_2 がこの順で半角スペース区切りで与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 日目の株価を表す整数 p_i が与えられます。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください



期待する出力
N 日目に持ち株をすべて売ったあとの損益を出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 100
・1 ≦ c1 < c2 ≦ 1000
・1 ≦ p_i ≦ 1000 (1 ≦ i ≦ N)


入力例1
5 110 120
110
100
120
130
105

出力例1
30

入力例2
3 100 200
80
80
30

出力例2
-100

*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int days = inputs[0];
    final int under = inputs[1];
    final int upper = inputs[2];

    ArrayList<Integer> stock_prices = new ArrayList<>();
    for (int i = 0; i < days; i++) {
      final int price = sc.nextInt();
      stock_prices.add(price);
    }

    // 売った金額、買った金額、現在の持ち株数。
    int sell = 0;
    int buy = 0;
    int stock = 0;
    for (int i = 0; i < stock_prices.size(); i++) {
      // 本日の株価を定義。
      final int current_price = (int) stock_prices.get(i);

      // 日にちによって処理を変更する。
      // 最終日は持っている全ての株を売る。
      if (i == stock_prices.size() - 1) {
        sell += current_price * stock;
        stock = 0;

      } else {
        // 通常の日は株価によって、1株買う、持っている株を全て売る、何もしないを選択する。
        if (current_price <= under) {
          buy += current_price;
          stock++;

        } else if (current_price >= upper) {
          sell += current_price * stock;
          stock = 0;

        }
      }
    }

    // 最終的な利益を計算し、出力する。
    final int profit = sell - buy;
    System.out.println(profit);
  }
}