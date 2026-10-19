
/*
何やら子供たちが集まって背比べをしています。
話を聞いてみると、一人の子供をのぞいて他の子供の身長は正確にわかっており、
その一人の子供の身長を他の子どもと比べることで測ろうとしているようです。
手助けをしてあげましょう。

他の同じような状況の子供たちのためにもこれを自動化するプログラムをつくりましょう。

・1 行目には身長がわかっている子供の総数を表す整数 N が与えられます。
・続く N 行のうち i 行目 (1 ≦ i ≦ N) には身長がわからない子供と i
番目の子供の身長比較結果を表す文字 c_i と i 番目の子供の身長 (cm) を表す
小数 hi がこの順に半角スペース区切りで与えられます。

・身長がわからない子供の身長が h_i 以下のとき c_i は "le"、h_i 以上のとき "ge" となります。
ただし h_i と同じ時は "le" となります。

*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 子供の数を定義する
    Scanner sc = new Scanner(System.in);
    final String number = sc.nextLine();

    // 下限と条件を定義して、条件に従って操作する。
    double min = 100.0;
    double max = 200.0;
    for (int i = 0; i < Integer.parseInt(number); i++) {
      final String[] heightData = sc.nextLine().split(" ");
      final String compare = heightData[0];
      final double height = Double.parseDouble(heightData[1]);

      if (compare.equals("le") && max > height) {
        max = height;
      } else if (compare.equals("ge") && min < height) {
        min = height;
      }
    }

    // 結果を出力する
    System.out.println(min + " " + max);
  }
}