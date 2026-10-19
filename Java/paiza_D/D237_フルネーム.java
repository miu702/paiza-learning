
/*
A 君の名字は paiza です。A 君の名前を表す文字列 S が与えられるので、
フルネームを出力してください。

フルネームは、名字と名前を並べた文字列とします。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String name = sc.next();

        // フルネームを作成し、出力する
        final String familyName = "paiza";
        final String fullName = String.format("%s%s", familyName, name);
        System.out.println(fullName);
    }
}