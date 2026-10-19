/*
ひな祭りの準備をしましょう。
あなたが持っている 10 体の人形を "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" で表します。

ひな壇の各段 (計 3 段) に並べる人形の数が与えられるので、
各段にならべる人形の記号を改行区切りで出力してください。
人形は必ずもとの A, B, C, ... の順番で並べます。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    // 2次元配列(ArrayList)を作成。
    ArrayList<ArrayList<Character>> wordList = new ArrayList<>();
    final int start = 65;
    int add = 0;
    for (int i = 0; i < lines.length; i++) {
      ArrayList<Character> row = new ArrayList<>();

      for (int j = 0; j < Integer.parseInt(lines[i]); j++) {
        final int current = start + add;
        final char word = (char) current;
        row.add(word);
        add++;
      }
      wordList.add(row);
    }

    // 2次元配列(ArrayList)を出力する
    for (ArrayList<Character> row : wordList) {
      StringBuilder sb = new StringBuilder();
      for (Character c : row) {
        sb.append(c);
      }
      System.out.println(sb);
    }

  }
}