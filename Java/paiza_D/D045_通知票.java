
/*
paiza 中学校ではこれまで 5 ~ 1 の数字で成績をつけていましたが、英語教育に力を入れるため今年度から A ~ E のアルファベットで成績をつけることにしました。
すでに成績を数字でつけてしまったあなたはあわててアルファベットに変換することにしました。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // javascriptのようなオブジェクトを辞書形式でも作成
        Map<Integer, String> scoreSheet = new HashMap<>();

        // オブジェクト名.put(要素)で内容を追加
        scoreSheet.put(5, "A");
        scoreSheet.put(4, "B");
        scoreSheet.put(3, "C");
        scoreSheet.put(2, "D");
        scoreSheet.put(1, "E");

        // オブジェクト形式のため、取得するには、.getが必要。
        System.out.println(scoreSheet.get(number));

        // 変換前
        // if(number == 5) {
        // System.out.println("A");
        // } else if(number == 4) {
        // System.out.println("B");
        // } else if(number == 3) {
        // System.out.println("C");
        // } else if(number == 2) {
        // System.out.println("D");
        // } else if(number == 1) {
        // System.out.println("E");
        // }
        // 変換前
    }
}