
/*
あなたはクリスマスパーティのためにケーキを用意することになりました。

ケーキはホール単位で買い 1 ホールを 6 等分することにします。

パーティに参加する人数 n が与えられるので全員にケーキが行き渡るには何ホールの
ケーキを購入する必要があるか出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 人数を定義する
        Scanner sc = new Scanner(System.in);
        final int member = sc.nextInt();

        // ケーキの数と余りの人数を計算する。
        final int piece = 6;
        final int unit = member / piece;
        final int rest = member % piece;

        // 余りの人数によってケーキの数を変更する
        if (rest > 0) {
            System.out.println(unit + 1);
        } else if (rest == 0) {
            System.out.println(unit);
        }

    }
}