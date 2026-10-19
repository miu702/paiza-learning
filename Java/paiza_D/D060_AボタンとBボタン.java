
/*
あなたは A のボタン、 B のボタンの 2 つのボタンを使うゲームを作っています。

このゲームではキャラクターを動かして遊びます。
キャラクターははじめ座標 0 の位置にいて、A のボタンを押すとキャラクターが 1 マス右に進み
(座標が 1 増える)、 B のボタンを押すとキャラクターが 1 マス左に進み (座標が 1 減る) ます。

A, B のボタンそれぞれ何回押したが入力されるので、
ボタンが全て押された後のキャラクターの位置の座標を出力するプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] lines = sc.nextLine().split(" ");

        final int A = Integer.parseInt(lines[0]);
        final int B = Integer.parseInt(lines[1]);

        final int current = A - B;
        System.out.println(current);
    }
}