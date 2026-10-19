
/*
魅力的な料理のレシピを手に入れたあなたは、早速調理を始めたいと思っています。
レシピには、1人前を調理するのに必要な食材とその量が載っています。

このレシピと、あなたが所持している食材とその量が与えられるので、
最大で何人前作れるかを求めてください。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String recipes = sc.nextLine();

    // 必要な食材リストを作成する。食材と量を記録したいので、オブジェクトを利用する
    Map<String, Integer> recipesList = new HashMap<>();
    for (int i = 0; i < Integer.parseInt(recipes); i++) {
      final String[] A = sc.nextLine().split(" ");

      // オブジェクトに追加するには、オブジェクト名.put(キー, バリュー)とする。
      recipesList.put(A[0], Integer.parseInt(A[1]));
    }

    final String have = sc.nextLine();

    // 持っている食材リストを作成する。食材と量を記録したいので、オブジェクトを利用する
    Map<String, Integer> haveList = new HashMap<>();
    for (int j = 0; j < Integer.parseInt(have); j++) {
      final String[] B = sc.nextLine().split(" ");

      // オブジェクトに追加するには、オブジェクト名.put(キー, バリュー)とする。
      haveList.put(B[0], Integer.parseInt(B[1]));
    }

    // 必要な食材リストを参考に何人分作れるか調査する
    ArrayList<Integer> can_cook = new ArrayList<>();
    //
    /*
     * Q:どうやって取得する？
     * A:必要な食材リストを1回ずつループし、持っているか調査する。
     * 
     * 
     * オブジェクトのキーとバリューを1回ずつ出力するには、
     * for(Map.Entry<キーのデータ型, バリューのデータ型> entry : オブジェクト名.entrySet())
     * で、繰り返し文の中では、entry.getKey()でキーを取得。
     * entry.getValue()でバリューを取得できる。
     */

    for (Map.Entry<String, Integer> entry : recipesList.entrySet()) {
      final String material = entry.getKey();
      final Integer needAmount = entry.getValue();

      // 持っているものからcontainsで調査する。
      if (haveList.containsKey(material)) {
        final Integer availableCount = haveList.get(material) / needAmount;
        can_cook.add(availableCount);
      } else {
        can_cook.add(0);
      }

      // System.out.println(haveList.get(material));
    }

    int min = Integer.MAX_VALUE;
    if (can_cook.size() > 0) {
      for (Integer C : can_cook) {
        if (min >= C)
          min = C;
      }
      System.out.println(min);
    } else {
      System.out.println(0);
    }

  }
}