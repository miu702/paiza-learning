/*
あなたはカードを使ったゲームをする準備をしています。
このゲームでは n 枚のカードを m 人に p 枚ずつカードを配りゲームを始めます。

カードの枚数 n 枚、ゲームに参加する人数 m 人、
1人に配るカードの枚数 p 枚が改行区切りで与えられるので、
カードを配ったあとに残るカードの枚数を出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // カードの情報を定義する
        Scanner sc = new Scanner(System.in);
        final int full = sc.nextInt();
        final int hand = sc.nextInt();
        final int player = sc.nextInt();
    
    
        // 残りの枚数を計算し、出力する
        final int rest = full - (hand * player);
        System.out.println(rest);
    }
}