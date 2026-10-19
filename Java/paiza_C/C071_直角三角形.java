
/*
あなたは、全ての辺の長さが整数である直角三角形を数えることになりました。

しかし、この条件を満たす三角形全てを数えるときりがないので、以下の条件を満たす三角形だけを数えることにしました。

・調べる直角三角形は直角が右下にある。
・全ての辺は整数である。
・ある与えられた二つの整数 M, N が与えられ、M より長さが小さい底辺、N より長さが小さい高さをもつ。


入力される値
入力は以下のフォーマットで与えられます。

M N
・2 つの整数 M, N がこの中に半角スペース区切りで与えられます。
・入力は 1 行となり、末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
斜辺も整数である直角三角形の個数を整数で出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。




条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ M ≦ 30
・1 ≦ N ≦ 30


入力例1
10 10

出力例1
4

入力例2
20 20

出力例2
12

*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int M = inputs[0];
    final int N = inputs[1];

    // 条件に沿った辺を全て調査し、直角三角形の数をカウントする。
    int count = 0;
    for (int x = 1; x < M; x++) {
      for (int y = 1; y < N; y++) {
        // 三平方の定理より斜辺を求める。
        final int A = x * x;
        final int B = y * y;
        final double C = Math.sqrt((double) A + (double) B);

        // 斜辺が整数なら、直角三角形である。
        boolean check = C == Math.floor(C);
        if (check)
          count++;
      }
    }

    // 結果を出力する
    System.out.println(count);

  }
}