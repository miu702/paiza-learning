/*
あなたは商品名の表記に価格も加えることにしました。

商品名 s と価格 p が改行区切りで与えられるので商品名 s に続いて
"(" 、 価格 p、 ")" を繋げ 1 行で出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 商品名と価格を定義する
        Scanner sc = new Scanner(System.in);
        final String item = sc.next();
        final int price = sc.nextInt();
        
        
        // テンプレートリテラルを使用して、出力する
        final String nameTag = String.format("%s(%d)", item, price);
        System.out.println(nameTag);
    }
}