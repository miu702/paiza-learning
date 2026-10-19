
/*
あなたは五輪のメダリスト表の作成係です。
金・銀・銅メダリストの国名・選手名が順番に与えられるので、
それぞれの国名・選手名の前に獲得メダル ("Gold", "Silver", "Bronze") を記していきましょう。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();
        final int number = 3;
        for (int i = 0; i < number; i++) {
            String name = sc.next();
            names.add(name);
        }

        // メダルの色を作成
        final String[] medels = { "Gold", "Silver", "Bronze" };

        // 配列の形で出力する方法が違うので注意！
        for (int j = 0; j < medels.length; j++) {
            System.out.println(medels[j] + " " + names.get(j));
        }
    }
}