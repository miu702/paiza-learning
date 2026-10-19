/*
あなたはパスワードを入力させるプログラムを作成しています。
単純なパスワード入力を防ぐために手始めに 全ての文字が同じ
パスワードであった場合に警告を出すことにしました。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] password = sc.nextLine().split("");

        final String sample = password[0];
        boolean check = true;

        // A.equals(B)に!(否定)を付けることで一致しないという意味になる。
        for (String s : password) {
            if (!s.equals(sample)) {
                check = false;
                break;
            }
        }
        System.out.println(check ? "NG" : "OK");
    }
}