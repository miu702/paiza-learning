/*
クリスマスが今年もやってきます！子どもにプレゼントを選んであげましょう。
あなたはプレゼントの候補を 3 つにしぼり、子どもの通知表の成績に応じてプレゼントを決めることにしました。

成績が 3 (最高) であれば候補の中で最も高価なものを、
2 であれば 2 番目に高価なものを、
1 であれば最も安価なものをあげます。

子どもの成績とプレゼント候補からあげるプレゼントを決定するプログラムを作成してください。
*/

import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final int score = sc.nextInt();

    ArrayList<String> wishList = new ArrayList<>();
    final int things = 3;
    for (int i = 0; i < things; i++) {
      final String thing = sc.next();
      wishList.add(thing);
    }

    System.out.println(wishList.get(score - 1));
  }
}