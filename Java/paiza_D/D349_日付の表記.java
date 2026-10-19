/*
あなたは日付を出力するプログラムを作成しています。

改行区切りで月 m と日 d が与えられます。
「/」区切りで出力してください。

*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 月と日を定義する
        Scanner sc = new Scanner(System.in);
        final int month = sc.nextInt();
        final int day = sc.nextInt();
        
        // 日付をテンプレートリテラルを使用して、作成する
        final String fullDate = String.format("%s/%s", month, day);
        System.out.println(fullDate);
    }
}