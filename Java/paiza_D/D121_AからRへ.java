
/*
あなたは元号と年度のデータを変換する仕事を任されました。

平成は "H" 、昭和は "S"、大正は "T" 、そして新元号は "A" で仮に表現し年度の数字 0 埋め 2桁を組み合わせた文字データが入力されます。
新元号 "A" の場合は "R" に置き換え出力し、それ以外の元号はそのまま文字列を出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // 変数.replace(変換前, 変換後)を利用して、変換する
        final String change = word.replace("A", "R");
        System.out.println(change);
    }
}