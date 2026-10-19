
/*
あなたは2つの文字列の長さを目で比較していましたが長い文字では目視で確認するのが辛くなってきました。
2つの文字列が入力されるので文字列の長さが一致していれば "Yes" 、違う場合は "No" と出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {

        // 2つの要素を配列にして、長さを分析する
        Scanner sc = new Scanner(System.in);
        final String[] words1 = sc.nextLine().split("");
        final String[] words2 = sc.nextLine().split("");

        System.out.println(words1.length == words2.length ? "Yes" : "No");
    }
}