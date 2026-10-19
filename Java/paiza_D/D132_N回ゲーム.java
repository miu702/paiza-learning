
/*
あなたの通う Paiza 小学校では、10 回同じ単語を言った後にひっかけクイズに
答える十回ゲームの変則版である N 回ゲームがはやっています。
N 回ゲームでは、 N 回同じ単語を言った後にクイズに答えます。

そこで、言うべき単語と繰り返すべき回数が与えられるのでクイズに
答える前に発言すべき文字列を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        final String word = sc.nextLine();

        // System.out.print(変数);で半角スペース、改行なしで出力
        for (int i = 0; i < Integer.parseInt(numberStr); i++) {
            System.out.print(word);
        }

    }
}