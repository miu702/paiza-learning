import java.util.*;

public class Main {
  public static void main(String[] args) {
    // 入力→変数にする
    Scanner sc = new Scanner(System.in);
    final int number = Integer.parseInt(sc.nextLine());

    final int totalLimit = 350;
    final int courseLimit = 160;
    int passingCount = 0;
    for (int i = 0; i < number; i++) {
      final String[] examineeData = sc.nextLine().split(" ");

      // 学習した一気に数値化を実施。
      // Arrays.copyOfRange + Arrays.streamは一気にかけるが、学習のためそのままにする。
      final String course = examineeData[0];
      final String[] pointStr = Arrays.copyOfRange(examineeData, 1, examineeData.length);
      final int[] points = Arrays.stream(pointStr).mapToInt(Integer::parseInt).toArray();

      // コース指定なしを回避
      if (!course.equals("s") && !course.equals("l")) {
        System.out.println("コースが不正です。");
        continue;
      }

      // 教科不足、過剰を回避
      if (points.length != 5) {
        System.out.println("受験教科数が不正です。");
        continue;
      }

      // 条件1：合計点が基準値未満は不合格。
      if (total(points) < totalLimit)
        continue;

      // // 条件2：コースの合計点が基準値未満は不合格。合格者はカウントする。
      if (course(course, points) >= courseLimit)
        passingCount++;
    }

    // 結果を出力する
    System.out.println(passingCount);

  }

  // 合計ポイントを計算する関数
  static int total(int[] points) {
    int totalP = 0;
    for (int P : points) {
      totalP += P;
    }

    return totalP;
  }

  // コースの合計ポイントを計算する
  static int course(String course, int[] points) {
    if (course.equals("s")) {
      return points[1] + points[2];

    } else if (course.equals("l")) {
      return points[3] + points[4];
    }

    // エラー防止用。
    return 0;
  }
}
