/*
あなたの育成するモンスターは日々成長しています。モンスターは成長すると進化をします。
モンスターがどのモンスターに進化するかは攻撃力、防御力、素早さの 3 つのパラメータによって決まります。
このとき、モンスターの持つパラメータによっては進化条件を満たすモンスターが複数存在する場合や、存在しない場合があります。

あなたのモンスターのパラメータと、それぞれ進化先のモンスターのモンスター名、
進化条件が与えられるので、進化条件を満たすモンスター名を全て出力してください。
進化条件をみたすモンスターがいない場合は "no evolution" と出力してください。 


入力される値
入力は以下のフォーマットで与えられます。
ATK DEF AGI
N
s_1 MINATK_1 MAXATK_1 MINDEF_1 MAXDEF_1 MINAGI_1 MAXAGI_1
s_2 MINATK_2 MAXATK_2 MINDEF_2 MAXDEF_2 MINAGI_2 MAXAGI_2
...
s_N MINATK_N MAXATK_N MINDEF_N MAXDEF_N MINAGI_N MAXAGI_N


・1 行目にはそれぞれ、モンスターの現在の攻撃力、防御力、素早さを表す 3 つの整数 ATK, DEF, AGI が
この順で半角スペース区切りで与えられます。
・2 行目には進化先のモンスター数を表す整数 N が与えられます。
・続く N 行のうち、i 行目 (1 ≦ i ≦ N) には、i 番目の進化先のモンスターの名前を表す文字列 s_i と進
化条件を表す 6 つの整数 MINATK_i, MAXATK_i, MINDEF_i, MAXDEF_i, MINAGI_i, MAXAGI_i がこの順で半角スペース区切りで与えられます。


　・s_i はモンスターの名前を表す、小文字の英字からなる文字列です。
　・MINATK_i, MAXATK_i は攻撃力の条件を表し、このモンスターに進化するには攻撃力が MINATK_i 以上 MAXATK_i 以下である必要があります。
　・MINDEF_i, MAXDEF_i は防御力の条件を表し、このモンスターに進化するには防御力が MINDEF_i 以上 MAXDEF_i 以下である必要があります。
　・MINAGI_i, MAXAGI_i は素早さの条件を表し、このモンスターに進化するには素早さが MINAGI_i 以上 MAXAGI_i 以下である必要があります。
・入力は合計で N + 2 行からなり、末尾には改行が 1 つ入ります。


期待する出力
進化する条件を満たす進化先のモンスター名を出力してください。条件をみたすモンスターが複数ある場合、
入力された順番に改行区切りで出力してください。
また、進化条件をみたすモンスターがいない場合は "no evolution" と出力してください。
末尾に改行を 1 つ入れ、余計な文字、空行を含んではいけません。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] current = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int atk = current[0];
    final int def = current[1];
    final int agi = current[2];

    final String monsters = sc.nextLine();
    ArrayList<String[]> status = new ArrayList<>();
    for (int i = 0; i < Integer.parseInt(monsters); i++) {
      final String[] S = sc.nextLine().split(" ");
      status.add(S);
    }

    // 進化できるか調査。
    ArrayList<String> evolutionList = new ArrayList<>();
    for (String[] S : status) {
      // 名前とステータスに変換する。
      final String name = S[0];
      final int min_atk = Integer.parseInt(S[1]);
      final int max_atk = Integer.parseInt(S[2]);
      final int min_def = Integer.parseInt(S[3]);
      final int max_def = Integer.parseInt(S[4]);
      final int min_agi = Integer.parseInt(S[5]);
      final int max_agi = Integer.parseInt(S[6]);

      // 進化できるかチェックする。3つのステータスがtrueなら進化可能。
      final boolean[] check = new boolean[3];
      Arrays.fill(check, false);

      // それぞれのステータスが最小値から最大値の間なら、OK！
      if (min_atk <= atk && atk <= max_atk)
        check[0] = true;
      if (min_def <= def && def <= max_def)
        check[1] = true;
      if (min_agi <= agi && agi <= max_agi)
        check[2] = true;

      // 全てのステータスが基準値内か調査する。
      boolean allTrue = true;
      for (boolean c : check) {
        if (!c) {
          allTrue = false;
          break;
        }
      }

      // 進化可能なら、名前を追加。
      if (allTrue)
        evolutionList.add(name);

    }

    // 進化可能なモンスターを出力。進化なしなら、"no evolution"を出力する。
    if (evolutionList.size() > 0) {
      for (String E : evolutionList) {
        System.out.println(E);
      }
    } else {
      System.out.println("no evolution");
    }

  }
}