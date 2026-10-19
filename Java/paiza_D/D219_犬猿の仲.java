
/*
ある部屋の中に inu がいます。新しい動物を同じ部屋に入れようと思うのですが、
saru は inu と犬猿の仲なので同じ部屋に入れられません。

新しく部屋に入れる動物の名前が与えられるので、
部屋に入れられるなら Yes を、入れられないなら No を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 新しい動物を定義する
        Scanner sc = new Scanner(System.in);
        final String character = sc.next();
        final String ng = "saru";

        // 新しい動物が入ることができないなら、Noを出力する
        System.out.println(character.equals(ng) ? "No" : "Yes");
    }
}