/*
あなたはエイプリルフールにちなんでプログラムを作成しています。
"True" と入力された場合 "False" と出力し、"False" と入力された場合 "True" と出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力を変数に変換する
        Scanner sc = new Scanner(System.in);
        final String check = sc.next();
        
        // 条件に沿って出力する
        if(check.equals("True")) {
            System.out.println("False");
        } else if(check.equals("False")) {
            System.out.println("True");
        }
        
    }
}