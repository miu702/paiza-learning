
/*
あなたは N ページの本を持っています。 1 日で a ページ読む場合、何日目に読み終わることが可能かを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int total = sc.nextInt();
        final int ones = sc.nextInt();

        // 日にちとあまりページを計算し、あまりがあるときは日にち + 1とする
        final int days = total / ones;
        final int rest = total % ones;
        System.out.println(rest > 0 ? days + 1 : days);
    }
}