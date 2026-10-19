
/*
あなたはトイレットペーパーの在庫を管理しています。

残りが n ロール以下になった時に m ロール買い足します。

買い足す基準のロール数 n 、買い足すロール数 m 、現在のロール数 x が改行区切りで
与えられるので上記のルールで買い足した後のロール数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 基準、買い足す数、現在の数を定義する
        Scanner sc = new Scanner(System.in);
        final int standard = sc.nextInt();
        final int add = sc.nextInt();
        final int current = sc.nextInt();

        // 現在の数は基準以下なら、買う
        System.out.println(current <= standard ? current + add : current);
    }
}