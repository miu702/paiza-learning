
/*
A 君は株取引をしています。A 君は B 社の株を X 円で購入しましたが、1 年後に Y 円で売却しました。
A 君がこの取引で得した場合は Yes を、損した場合は No　を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 金額を定義する
        Scanner sc = new Scanner(System.in);
        final int buy = sc.nextInt();
        final int cell = sc.nextInt();

        // 条件に沿って出力する
        System.out.println(buy > cell ? "No" : "Yes");
    }
}