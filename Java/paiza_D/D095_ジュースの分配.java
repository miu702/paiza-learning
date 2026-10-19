/*
あなたはジュースを N ミリリットル手に入れました。
そのジュースを M ミリリットル入るコップにわけることにしました。

N, M の順に改行区切りで値が与えられるので、いくつのコップにわけることが出来るかを求めてください。

ただし、余ったジュースは自分でこっそり飲んでしまうのでわけた数には含まないことにします。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int juice = sc.nextInt();
        final int pepole = sc.nextInt();

        final int cups = juice / pepole;
        System.out.println(cups);
    }
}