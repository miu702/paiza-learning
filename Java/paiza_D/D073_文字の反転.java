/*
アルファベット大文字で構成された文字列 S が入力されるので、
文字列を反転させて出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String words = sc.next();

        // Javaで反転するには、StringBuilder + reverseで実装できる。
        StringBuilder sb = new StringBuilder();
        sb.append(words);
        sb.reverse();
        System.out.println(sb.toString());
    }
}