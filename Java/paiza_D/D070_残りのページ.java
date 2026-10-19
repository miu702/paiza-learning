/*
あなたは本を読んでいたところ、残り何ページか知りたくなりました。
本の総ページ数 m と読み終えたページ n が入力されるので、残りのページ数を表示してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] lines = sc.nextLine().split(" ");

        final int full = Integer.parseInt(lines[0]);
        final int read = Integer.parseInt(lines[1]);

        final int rest = full - read;
        System.out.println(rest);
    }
}