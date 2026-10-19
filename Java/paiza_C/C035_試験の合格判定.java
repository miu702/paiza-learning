import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    final String numberStr = sc.nextLine();

    final int totalLimit = 350;
    final int courseLimit = 160;
    int passingCount = 0;
    for (int i = 0; i < Integer.parseInt(numberStr); i++) {
      final String[] examineeData = sc.nextLine().split(" ");
      final String course = examineeData[0];
      final String[] points = Arrays.copyOfRange(examineeData, 1, examineeData.length);

      if (!course.equals("s") && !course.equals("l")) {
        System.out.println("コースが不正です。");
        continue;
      }

      // 条件1：合計点が基準値未満は不合格。
      if (total(points) < totalLimit)
        continue;

      // 条件2：コースの合計点が基準値未満は不合格。合格者はカウントする。
      if (course.equals("s")) {
        final String[] sciencePoints = Arrays.copyOfRange(points, 1, 3);
        if (science(sciencePoints) >= courseLimit)
          passingCount++;

      } else if (course.equals("l")) {
        final String[] humanitiesPoints = Arrays.copyOfRange(points, 3, points.length);
        if (humanities(humanitiesPoints) >= courseLimit)
          passingCount++;
      }
    }

    // 結果を出力する
    System.out.println(passingCount);

  }

  // 合計を計算する関数
  static int total(String[] points) {
    int totalPoint = 0;
    for (String PStr : points) {
      final int P = Integer.parseInt(PStr);
      totalPoint += P;
    }

    return totalPoint;
  }

  // それぞれのコースの合計を計算する：理系
  static int science(String[] sciencePoints) {
    int totalSciencePoint = 0;
    totalSciencePoint = Integer.parseInt(sciencePoints[0]) + Integer.parseInt(sciencePoints[1]);
    return totalSciencePoint;

  }

  // それぞれのコースの合計を計算する：文系
  static int humanities(String[] humanitiesPoints) {
    int totalHumanitiesPoint = 0;
    totalHumanitiesPoint = Integer.parseInt(humanitiesPoints[0]) + Integer.parseInt(humanitiesPoints[1]);
    return totalHumanitiesPoint;

  }

}
