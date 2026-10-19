
/*
「すでザイパはえまなのくぼ」
あなたは逆さ読みにハマっています。入力される文字列を逆順にして出力してください。
例えば入力例 1 の場合、"paiza" なので "aziap" という出力になります。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String word = sc.next();

        // Javaで逆順にするには、StringBuilder + reverseで元データを破壊せずに実装できる。
        StringBuilder sb = new StringBuilder();
        sb.append(word);

        sb.reverse();
        System.out.println(sb.toString());
    }
}