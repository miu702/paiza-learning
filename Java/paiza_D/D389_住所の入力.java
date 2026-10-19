
/*
あなたは住所の入力データを処理しています。

改行区切りで都道府県、市区町村名、番地が与えられるので結合し 1 行で出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力を配列に変換する
        Scanner sc = new Scanner(System.in);
        final int number = 3;
        ArrayList<String> datas = new ArrayList<>();
        for (int i = 0; i < number; i++) {
            final String data = sc.next();
            datas.add(data);
        }

        // String.join("", 配列)で配列を半角スペースなしで出力する
        System.out.println(String.join("", datas));
    }
}