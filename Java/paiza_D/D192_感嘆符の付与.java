/*
あなたは入力された文字列に感嘆符の「!」を加えるプログラムを作成しています。

文字列 s が与えられるので末尾に「!」を1文字加えた文字列を出力して下さい。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();
        
        // テンプレートリテラルを使用して、出力。
        final String output = String.format("%s!", word);
        System.out.println(output);
    }
}