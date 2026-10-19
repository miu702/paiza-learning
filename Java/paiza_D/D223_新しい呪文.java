
/*
A 君は呪文 B と呪文 C を合わせた新しい呪文を唱えようとしてます。
新しい呪文は呪文 B の後ろに呪文 C を足したものです。新しい呪文を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String B = sc.next();
        final String C = sc.next();

        final String spell = String.format("%s%s", B, C);
        System.out.println(spell);
    }
}