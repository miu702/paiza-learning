/*
あなたは 1, 2, 3, 4, 5 の数字の書かれた 5種類のカードを集めています。
4 枚目まで集まり、残り 1 枚で全て揃うというところでカードが混ざってしまいました。

4 枚のカードの情報が改行区切りで入力されるので、 
1 から 5 のカードのうち足りないカードの数字を出力してください。

*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // サイズの可変が可能な配列を作成し、標準入力 → 変数に変換する
    ArrayList<Integer> numberList = new ArrayList<>();
    for (int i = 0; i < 4; i++) {
      final int number = sc.nextInt();
      numberList.add(number);
    }

    // チェック用の配列を作成する。大きさは1~5なので、5。初期値はfalseなので、そのまま使用する
    boolean[] check = new boolean[5];
    for (Integer N : numberList) {
      // 数値をインデックス番号に対応させてチェックする
      check[N - 1] = true;
    }

    // 配列をチェックし、falseのままなら、変数変更→ループを停止。
    int index = -1;
    for (int j = 0; j < check.length; j++) {
      if (check[j] == false) {
        index = j;
        break;
      }
    }

    System.out.println(index + 1);
  }
}