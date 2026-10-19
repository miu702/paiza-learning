
/*
あなたは新しい本棚を買おうと検討しています。そこで、既に持っている本の幅などから収まるか概算することにしました。
持っている本の幅を合計したもの n (cm)、検討している本棚の段数 d 、本が収まる幅 e (cm)がそれぞれ半角スペース区切りで与えられます。
概算なので本それぞれの違い1段に収まるかは考えないことにします。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String[] lines = sc.nextLine().split(" ");

    // 本の合計、棚の幅、棚の段数を指定
    final int totalBooks = Integer.parseInt(lines[0]);
    final int height = Integer.parseInt(lines[1]);
    final int width = Integer.parseInt(lines[2]);

    // 棚の合計サイズを計算
    final int totalSize = height * width;

    // 本が入るか、チェック
    final boolean check = totalSize >= totalBooks;
    System.out.println(check ? "OK" : "NG");
  }
}