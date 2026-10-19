
/*
あなたは 4 桁のパスワードを考える上で法則性のある数字を避けようと考えています。

4 桁の数字で構成されたパスワードの文字列 s が入力されるので同じ数字が 
2 つ以上存在すれば「NG」、そうでない場合は「OK」と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // カウントする要素を配列に投入する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split("");

        // キーのデータ型, バリューのデータ型でカウントする
        Map<String, Integer> counts = new HashMap<>();
        for (String number : numberStr) {
            counts.put(number, counts.getOrDefault(number, 0) + 1);
        }

        // オブジェクト名のキーとバリューを参考に、処理をする
        final int limit = 2;
        boolean check = false;

        /*
         * Map.Entry<キーのデータ型, バリューのデータ型> entry :
         * オブジェクト名.entrySet()でキー、バリューを利用して処理できる
         */
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            if (entry.getValue() >= limit) {
                check = true;
                break;
            }
        }

        System.out.println(check ? "NG" : "OK");
    }
}