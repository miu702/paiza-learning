
/*
台風には、台風の目と呼ばれる場所が存在します。
これは台風の中心を表し、この中にいると台風の影響を受けません。

2次元平面上において、台風を、中心は同じであるが半径は異なる2つの円でモデル化します。
2つの円の中心の座標を (xc, yc)、半径をそれぞれ r_1, r_2 (r_1 < r_2) とします。


ある人の座標を (x, y) とすると、以下をみたすとき、ある人は台風の暴風域にいると定義します。
pow(r_1, 2) <= pow(x - xc, 2) + pow(y - yc, 2) <= pow(r_2, 2)

台風の情報と複数の人の座標が与えられるので、それぞれの人に対し、暴風域にいるかどうかを判定してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 台風の情報を定義する
        Scanner sc = new Scanner(System.in);
        final String[] typhoonData = sc.nextLine().split(" ");
        final int xc = Integer.parseInt(typhoonData[0]);
        final int yc = Integer.parseInt(typhoonData[1]);
        final int r_1 = Integer.parseInt(typhoonData[2]);
        final int r_2 = Integer.parseInt(typhoonData[3]);

        // 半径の大きさを計算する。
        final int radius_1 = r_1 * r_1;
        final int radius_2 = r_2 * r_2;

        // 指定したエリア数を定義する
        final String timesStr = sc.nextLine();

        // エリア数の数だけ繰り返し処理。
        for (int i = 0; i < Integer.parseInt(timesStr); i++) {

            // 現在地の座標を定義する
            final String[] coordinate = sc.nextLine().split(" ");
            final int x = Integer.parseInt(coordinate[0]);
            final int y = Integer.parseInt(coordinate[1]);

            // 必要なデータをもって関数に投入する
            final String result = stormAreaCheck(xc, yc, x, y, radius_1, radius_2);
            System.out.println(result);

        }
    }

    // 関数の中で計算を行い、条件に沿って出力する
    static String stormAreaCheck(int xc, int yc, int x, int y, int radius_1, int radius_2) {
        final int current = (int) Math.pow((x - xc), 2) + (int) Math.pow((y - yc), 2);
        if (radius_1 <= current && current <= radius_2) {
            return "yes";
        } else {
            return "no";
        }
    }

}