
/*
あなたは1対1で戦う競技の大会を開くことにしました。

N 人の選手で総当り対戦を行う場合、何回の対戦が行われるか出力して下さい。
N 人の総当り戦では N 人がそれぞれ自分自身以外と対戦します。
また、自分自身から見た結果と、相手側から見た結果があるので N × (N - 1) / 2で求められます。

例えば 4 人の場合以下の様な表になり(斜線を軸とした線対称の位置の試合はそれぞれ同一試合です)
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();

        final int total = number * (number - 1) / 2;
        System.out.println(total);
    }
}