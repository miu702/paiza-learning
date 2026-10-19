
/*
あなたはゲームが好きで、ゲームセンターに行くといつもボタンを押すゲームで遊びます。
家でも大好きなゲームの練習ができるように、あなたは簡易的にゲームを再現するプログラムを作ることにしました。
プログラムを作るために思い出した、ボタンを押すゲームの遊び方は以下のようになりました。


・ボタンは一列に並んでおり、全部で N 個ある
・ボタンは左から順に 1 から N までの番号がついている
・ボタンは 1 番目から N 番目まで順に押す
・ただし、N 番目のボタンの次は 1 番目のボタンに戻る (例: 1 → 2 → ... → N → 1 → ...)
また、ゲームは以下のルールに基づいてスコア算出され、ゲームオーバーも設定されています。


・正しいボタンを X 回押したらスコアは X * 1,000 点
・誤ったボタンを Y 回以上押したらゲームオーバー

ゲームの練習のためのプログラムを作り、与えられる操作ログからスコアを算出してください。
ただし、ゲームオーバーになる場合はスコアの代わりに -1 を出力してください。


入力される値
入力は以下のフォーマットで与えられます。

N Y
M
a_1 a_2 ... a_M
・1 行目にボタンの数を表す整数 N、ゲームオーバーになる誤ったボタンを押す回数を表す整数 Y が
この順に半角スペース区切りで与えられます。
・2 行目にボタンを押した回数を表す整数 M が与えられます。
・3 行目に i 番目 (1 ≦ i ≦ M) の操作ログを表す整数 a_i が半角スペース区切りで与えられます。
・入力は合計で 3 行となり、入力値最終行の末尾に改行が 1 つ入ります。
それぞれの値は文字列で標準入力から渡されます。標準入力からの値取得方法はこちらをご確認ください



期待する出力
スコアまたは -1 を整数で出力してください。
末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ N ≦ 50
・1 ≦ Y ≦ 10,000
・1 ≦ M ≦ 10,000
・1 ≦ a_i ≦ N (1 ≦ i ≦ M)


入力例1
4 2
6
1 1 3 4 1 2


出力例1
5000


入力例2
2 1
4
1 1 1 1


出力例2
-1
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力→変数に変換する
    Scanner sc = new Scanner(System.in);
    final int[] inputs = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();
    final int button_int = inputs[0];
    final int allow_miss = inputs[1];
    final String push_int = sc.nextLine();
    final int[] push_buttons = Arrays.stream(sc.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

    // 正解の順番を作成する。
    ArrayList<Integer> corrects = new ArrayList<>();
    for (int i = 1; i <= button_int; i++)
      corrects.add(i);

    // ボタンを押す。
    int index = 0; // 現在の正解インデックス番号
    int miss = 0; // ミス数
    int count = 0; // 正解数
    Boolean gameover = false; // ゲームオーバー？

    for (int j = 0; j < push_buttons.length; j++) {
      // 1、ボタンの最後まで行ったら、最初に戻る。
      if (index == button_int)
        index = 0;

      // 2、押したボタン、正解のボタンを定義する。
      final int button = push_buttons[j];
      final int correct = corrects.get(index);

      // 3、ボタンの判定
      if (button == correct) {
        count++; // 正解数増加
      } else {
        miss++; // ミス数増加

        // 許容を超えたら、強制終了。
        if (miss >= allow_miss) {
          gameover = true;
          break;
        }

      }

      // 4、次のボタンに移動。
      index++;
    }

    // ゲームオーバーでない時はスコアを計算し、出力する。
    if (!gameover) {
      final int score = count * 1000;
      System.out.println(score);
    } else {
      System.out.println(-1);
    }
  }
}