
/*
メロンが大好きなあなたは、回転寿司のお店にメロンを食べに行きました。
ネタはそれぞれ皿にのって 1 つずつ流れていきます。


あなたはメロンを食べきるのに、自分の前に 10 皿流れていく程度の時間がかかります。
メロンを食べている最中は新たにメロンを取ることができません。

あなたがお店に滞在している間に流れてくる皿の数 T と流れてくるネタのリストが与えられるので、
滞在時間中に食べられるメロンの数を出力するプログラムを作成してください。

メロンはリスト上では "melon" という文字列で表されます。
また、滞在時間が終わった時に食べているメロンは最後まで食べるものとします。


入力される値
入力は以下のフォーマットで与えられます。

T
n_1
...
n_T
・1行目に流れてくる皿の数を示す整数 T が入力されます。
・続く T 行に流れてくるネタを示す文字列 n_i (1 ≦ i ≦ T) が入力されます。
・入力は合計で T + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。


期待する出力
食べられるメロン "melon" の数を出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。


*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    // 皿の数を定義する
    final int number = sc.nextInt();

    // 繰り返し処理に必要なデータを作成する。
    final String target = "melon";
    int melon_count = 0; // 食べたメロンの数。これを出力する。
    int elapsed = 0; // 経過時間
    boolean check = true; // 今メロンを食べることができるか。

    // 皿の数だけ繰り返し処理をする。
    for (int i = 0; i < number; i++) {
      // メロンを食べて10皿を超過したときに食べることができる。
      if (elapsed >= 10)
        check = true;

      // メロンを食べている時、時間を経過させる。
      if (!check)
        elapsed++;

      final String dish = sc.next();
      // 食べることができるかつ、メロンの時、食べる
      if (check && dish.equals(target)) {
        melon_count++;
        check = false;
        elapsed = 0;
      }
    }

    // 食べたメロンの数を出力する。
    System.out.println(melon_count);

  }
}