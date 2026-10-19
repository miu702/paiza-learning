/*
あなたは宅配の再配達を頼もうとしています。

n 時以前に再配達の依頼を行えば当日中に荷物が届きます。
m 時に再配達を依頼した場合に当日中に荷物が届く場合 "OK" と出力しそれ以外は "NG" と出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 依頼時間と制限時間を定義する
        Scanner sc = new Scanner(System.in);
        final int limit = sc.nextInt();
        final int order = sc.nextInt();
        
        // 条件に沿って出力する
        System.out.println(order <= limit ? "OK" : "NG");
    }
}