
/*
あなたはゴミの分別をしています。

n 本の缶をゴミ袋に詰めています。ゴミ袋 1 袋あたり m 本の缶を入れることができます。

何袋のゴミ袋が必要か出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 缶の数と袋に入る数を定義する
        Scanner sc = new Scanner(System.in);
        final int cans = sc.nextInt();
        final int unit = sc.nextInt();

        // 袋の数と袋に入らない数を計算する
        final int bags = cans / unit;
        final int rest = cans % unit;

        // 入らない缶があるとき、袋を1つ追加する
        System.out.println(rest > 0 ? bags + 1 : bags);
    }
}