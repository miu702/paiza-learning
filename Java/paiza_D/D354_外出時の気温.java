
/*
あなたは外出時する時に気温が一定を超えたら熱中症に注意しようと考えています。

気温 t が与えられるので 30 度以上の場合は "DANGER" と出力し 
30 度未満の場合は気温 t をそのまま出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 気温を定義する
        Scanner sc = new Scanner(System.in);
        final int temperature = sc.nextInt();

        // 条件に沿って出力する
        final int limit = 30;
        System.out.println(temperature >= limit ? "DANGER" : temperature);
    }
}