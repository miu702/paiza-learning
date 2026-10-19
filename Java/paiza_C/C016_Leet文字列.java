import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 変換予定の文字列を配列にする
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        // 変換表を作成する
        Map<String, String> conversionTable = new HashMap<>();
        conversionTable.put("A", "4");
        conversionTable.put("E", "3");
        conversionTable.put("G", "6");
        conversionTable.put("I", "1");
        conversionTable.put("O", "0");
        conversionTable.put("S", "5");
        conversionTable.put("Z", "2");
        // 変換表を作成するend

        // 文字数の数だけ繰り返し処理を行う。
        ArrayList<String> output = new ArrayList<>();
        for (String w : words) {
            // nullの時変換せず、そのまま出力する

            // わかりやすさ重視
            output.add(conversionTable.get(w) == null ? w : conversionTable.get(w));

            // 短縮版
            // output.add(conversionTable.getOrDefault(w, w));
        }
        // 文字数の数だけ繰り返し処理を行うend

        // 変換後のデータを出力する
        System.out.println(String.join("", output));

    }
}