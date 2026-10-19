
/*
あなたは買い物をする際に 3 円する有料の袋を買うかどうかでいつも悩んでいます。
そこで 1000 円以上の買い物をする時は有料の袋を買うことに決めました。

買い物をした際の金額が入力されるので、
1000円以上の買い物で有料の袋を買う場合は 3 円を足した価格を、
有料の袋を買わない場合は価格をそのまま出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int price = sc.nextInt();

        // 条件に沿って出力する
        final int bag = 3;
        final int limit = 1000;
        System.out.println(price >= limit ? price + bag : price);
    }
}