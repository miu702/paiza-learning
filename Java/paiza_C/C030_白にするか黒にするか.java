
/*
あなたは拾った古いパソコンで画像を表示するため、
グレースケールの画像を白黒の二値画像に変換する事にしました。

グレースケールの画像では 255 (白) から 0 (黒) の 256 階調で画像を表現します。
0 に近いほど黒色に, 255 に近いほど白色に近い色になります。
二値画像では単純に 1 (白) から 0 (黒) の 2 階調で表現します。
このため、グレーな画素値を白か黒にする必要があります。 (画素とは画像の最小単位の点を表します)

今回は単に表示するだけなので、単純に以下の条件を用いて二値画像に変換します。

・画素値が 128 以上 : 1 (白)
・画素値が 127 以下 : 0 (黒)

入力で画像のサイズとそれぞれの画素値が渡されるので、
与えられた条件で二値化した結果を出力して下さい。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 画像の大きさを定義する
    Scanner sc = new Scanner(System.in);
    final String[] area = sc.nextLine().split(" ");
    final int height = Integer.parseInt(area[0]);
    final int width = Integer.parseInt(area[1]);

    // 元画像のデータを作成する
    ArrayList<ArrayList<Integer>> image = new ArrayList<>();
    for (int i = 0; i < height; i++) {
      ArrayList<Integer> row = new ArrayList<>();
      final String[] rowNumber = sc.nextLine().split(" ");
      for (int j = 0; j < width; j++) {
        final int mass = Integer.parseInt(rowNumber[j]);
        row.add(mass);
      }
      image.add(row);
    }

    // 画像を変更する
    int under = 0;
    int limit = 128;
    int upper = 255;
    ArrayList<ArrayList<String>> newImage = new ArrayList<>();
    for (int y = 0; y < height; y++) {
      ArrayList<String> newRow = new ArrayList<>();
      for (int x = 0; x < width; x++) {
        if (image.get(y).get(x) >= under && image.get(y).get(x) < limit) {
          newRow.add("0");
        } else if (image.get(y).get(x) >= limit && image.get(y).get(x) <= upper) {
          newRow.add("1");
        }
      }
      newImage.add(newRow);
    }

    // 結果を出力する。内部データを文字列にすることで、String.join()で分割することができる。
    for (int z = 0; z < newImage.size(); z++) {
      System.out.println(String.join(" ", newImage.get(z)));
    }

  }

}