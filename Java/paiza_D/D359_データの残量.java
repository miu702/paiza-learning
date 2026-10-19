
/*
あなたはスマートフォンのデータ通信量の残量を計算しています。

使用できる容量 n と使用した容量 m が改行区切りで与えられるので
あといくつの容量が使えるかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 全体の量と、使用した量を定義する
        Scanner sc = new Scanner(System.in);
        final int use = sc.nextInt();
        final int used = sc.nextInt();

        // 残りの量を計算し、出力する
        final int rest = use - used;
        System.out.println(rest);
    }
}