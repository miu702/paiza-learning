
/*
あなたは海に遊びに行こうとしています。

海水温が 25 度以上であれば泳ごうと考えています。

海水温 t が与えられるので 25 以上であれば "OK" と出力し、 25 未満の場合は "NG" と出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 水温を定義する
        Scanner sc = new Scanner(System.in);
        final int temperature = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 25;
        System.out.println(temperature >= limit ? "OK" : "NG");
    }
}