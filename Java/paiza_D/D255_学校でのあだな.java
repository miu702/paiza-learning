
/*
A 君の名前である、文字列 S が与えられます。A 君の学校では名前の先頭と末尾に
A 君の好きな物の文字列 X を加えた文字列をあだなにして呼びあいます。

A 君の学校でのあだなを求めてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 名前と好きなものを定義する
        Scanner sc = new Scanner(System.in);
        final String name = sc.next();
        final String like = sc.next();

        // テンプレートリテラルを使用して、出力データを作成する
        final String nickName = String.format("%s%s%s", like, name, like);
        System.out.println(nickName);
    }
}