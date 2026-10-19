
/*
あなたは株式会社パイザでアルバイトをしています。
給料は以下のルールで決まっています。
・9 時から 17 時まで : 時給 X 円 (通常の時給)
・17 時から 22 時まで : 時給 Y 円 (夜の時給)
・それ以外の時間 : 時給 Z 円 (深夜の時給)


あなたの N 日間の出勤時刻と退勤時刻が 1 時間単位で与えられます。
N 日間の合計で得られる金額を計算してください。

入力例 1 の場合、4 日間で時給 X 円、Y 円、Z 円となる時間帯を満遍なく働いており、
金額の合計は Z×9 + X×8 + Y×5 + Z×1 = 1500×9 + 1000×8 + 1300×5 + 1500×1 = 29500 円となります。



入力される値
入力は以下のフォーマットで与えられます。
X Y Z
N
S_1 T_1
S_2 T_2
...
S_N T_N
・1 行目には、通常の時給 X、夜の時給 Y、深夜の時給 Z がこの順に整数で半角スペース区切りで与えられます。
・2 行目には、出勤日数 N が整数で与えられます。
・続く N 行の i 番目 (1 ≦ i ≦ N) には、i 日目の出勤時刻 S_i と退勤時刻 T_i がこの順に整数で半角スペース区切りで与えられます。
・入力は合計で N + 2 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。



期待する出力
・N 日間の給料の合計金額を整数で出力してください。
・末尾に改行を入れ、余計な文字、空行を含んではいけません。


条件
すべてのテストケースにおいて、以下の条件をみたします。
・0 ≦ X, Y, Z ≦ 3,000
・1 ≦ N ≦ 100
・0 ≦ S < T ≦ 23



入力例1
1000 1300 1500
4
0 9
9 17
17 22
22 23


出力例1
29500


入力例2
1300 1500 1700
7
8 19
9 20
10 21
11 22
0 23
20 22
0 21


出力例2
130000


*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力 → 変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] moneys = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int X = moneys[0];
    final int Y = moneys[1];
    final int Z = moneys[2];
    final String days = sc.nextLine();
    ArrayList<String[]> times = new ArrayList<>();
    for (int d = 0; d < Integer.parseInt(days); d++) {
      final String[] day = sc.nextLine().split(" ");
      times.add(day);
    }

    // 時給票を作成する。
    final int[] hourly_wage = new int[24];
    Arrays.fill(hourly_wage, Z);
    for (int i = 9; i < 17; i++)
      hourly_wage[i] = X;
    for (int j = 17; j < 22; j++)
      hourly_wage[j] = Y;

    // 日にちの分だけ繰り返し処理をする。
    int total = 0;
    for (String[] day : times) {
      // 出勤しているか？を差分配列で表現する。
      final int start = Integer.parseInt(day[0]);
      final int end = Integer.parseInt(day[1]);
      final int[] attendance = new int[24];
      Arrays.fill(attendance, 0);
      attendance[start] = 1;
      attendance[end] = -1;

      // 差分配列をcheckに代入し、1 = 出勤しているので、時給発生。0 = なし。 0以下出勤が不正とする。
      int check = 0;
      for (int hour = 0; hour < attendance.length; hour++) {
        check += attendance[hour];
        if (check < 0) {
          System.out.println("出勤情報が不正です。");
          return;
        }

        // ここで時給を足す。
        if (check == 1)
          total += hourly_wage[hour];
      }

    }

    // 合計を出力する
    System.out.println(total);
  }
}