
/*
あなたは個包装のチョコを n 個用意して m 人に配ろうとしています。

全員に同じ個数で最大限配った時に何個のチョコが余るか出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // チョコの数と人数を定義する
        Scanner sc = new Scanner(System.in);
        final int chocolate = sc.nextInt();
        final int member = sc.nextInt();

        // あまりの数を計算し、出力する
        final int rest = chocolate % member;
        System.out.println(rest);
    }
}