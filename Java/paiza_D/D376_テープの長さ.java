/*
あなたはポスターを貼り付けるために粘着テープを用意しようとしています。

ポスターの大きさは縦 y cm、横 x cm の長方形で、各辺の両端の長さの粘着テープを 4 枚貼り付けます。
合計で何cmの粘着テープが必要か出力してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 縦と横の長さを定義する
        Scanner sc = new Scanner(System.in);
        final String[] numberStr = sc.nextLine().split(" ");
        final int col = Integer.parseInt(numberStr[0]);
        final int row = Integer.parseInt(numberStr[1]);
        
        // 合計の長さを計算し、出力する
        final int total = (col * 2) + (row * 2);
        System.out.println(total);
    }
}