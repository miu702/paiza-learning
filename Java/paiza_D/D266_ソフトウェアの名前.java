
/*
あなたはソフトウェアを開発し名前をつけることにしましたが、
最初に思いついたソフトウェア名だけでは物足りずなにか 1 文字加えることにしました。

最初に思いついたソフトウェア名の文字列Sと加えるアルファベット1文字cが
改行区切りで与えられるので文字列Sの末尾にアルファベット 1 文字cを加えて出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 名前と追加する文字を定義する
        Scanner sc = new Scanner(System.in);
        final String name = sc.next();
        final String add = sc.next();

        // 新しい名前を作成し、出力する
        final String newName = String.format("%s%s", name, add);
        System.out.println(newName);
    }
}