
/*
あなたは商品の価格にかかる税金の額を計算するプログラムを書いていましたが
ある時期から税率が上がることになりました。
商品の価格、元の税率(％)、新しい税率(％)がスペース区切りで与えられるので税率が
変化することで税込価格が何円変わるのか計算するプログラム作ってください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");

        // 計算のずれ防止のため、少数で定義する
        final double price = Double.parseDouble(numberStr[0]);
        final double tax = Double.parseDouble(numberStr[1]);
        final double newTax = Double.parseDouble(numberStr[2]);

        // 計算のずれ防止のため、少数で計算する
        final double totalPrice = price * (1 + tax / 100);
        final double NewPrice = price * (1 + newTax / 100);

        // 差額計算では小数点以下を無視していいので、数値に戻す
        final int difference = (int) NewPrice - (int) totalPrice;
        System.out.println(difference);
    }
}