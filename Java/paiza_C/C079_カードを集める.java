/*
あなたは友達に勧められて、とあるカードゲームを始めることにしました。
そのカードゲームには、カード番号 1 から M までの M 種類のカードがあります。
あなたは完璧主義者なので、どうしても M 種類全てのカードが欲しくなり、カードを N 枚買いました。

さあ、買ってきた N 枚のカードを順番に開けていきましょう!

開けたカードのカード番号が順番に与えられるので、M 種類そろったのは何枚開けたときかを出力するプログラムを書いて下さい。


入力される値
入力は以下のフォーマットで与えられます。
N M
c_1
...
c_N
・1 行目に買ったカードの枚数 N とカードの種類数を示す整数 M が入力されます。
・続く N 行に開けたカードのカード番号 c_i (1 ≦ i ≦ N) が入力されます。
・最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。


期待する出力
何枚開けたときに全種類そろったかを出力してください。
ただし、全て開けても全種類そろわないときは、"unlucky" と出力してください。
期待する出力は 1 行からなります。
最後は改行し、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 1000
・1 ≦ M ≦ 100
・1 ≦ c_i ≦ M (1 ≦ i ≦ N)


入力例1
6 3
1
2
2
3
1
3


出力例1
4


入力例2
7 4
1
2
3
1
2
3
1


出力例2
unlucky


入力例3
1 100
1


出力例3
unlucky

*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int buy = inputs[0];
    final int cards_int = inputs[1];

    ArrayList<Integer> cards = new ArrayList<>();
    for (int i = 0; i < buy; i++) {
      final int card = sc.nextInt();
      cards.add(card);
    }

    // カードリストを作成する。ここは全てtrue(持っている)になったら買ったカードが余っていても、強制終了する。
    final Boolean[] cardList = new Boolean[cards_int];
    Arrays.fill(cardList, false);

    // カードを引く必要があるかの変数を付け、カードを引く。
    int count = 0;
    Boolean open = true;
    for (Integer card : cards) {
      count++;
      // カードを引いて持っているかチェックする。
      if (cardList[card - 1] == false)
        cardList[card - 1] = true;

      // 全てカードがそろっているかチェックする。
      Boolean check = true;
      for (Boolean c : cardList) {
        if (!c) {
          check = false;
          break;
        }
      }

      if (check) {
        System.out.println(count);
        open = false;
        break;
      }

    }

    // もし、最後まで、カードを全て引けないと、unluckyを出力する。
    if (open)
      System.out.println("unlucky");
  }
}