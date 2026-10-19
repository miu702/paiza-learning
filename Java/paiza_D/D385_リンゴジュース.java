/*
あなたはリンゴを使いジュースを作ろうとしています。

リンゴ 1 個あたり 150 ミリリットルのジュースを作ることができます。
リンゴジュース n ミリリットルを作るために何個のリンゴが必要か出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 作りたいジュースの量を定義する
        Scanner sc = new Scanner(System.in);
        final int juice = sc.nextInt();
        
        // 必要なリンゴの量と足りない量を計算する
        final int unit = 150;
        final int apples = juice / unit;
        final int rest = juice % unit;
        
        // 足りない量があるとき、リンゴを1つ足す
        System.out.println(rest > 0 ? apples + 1 : apples);
    }
}