/*
あなたは薬の製造をしています。
薬の効き目を 24 時間持続させるためにどれくらいの薬が必要なのか計算するためにプログラムを作成することにしました。

1 錠あたりの薬の効き目 t 時間が与えられます。
24 時間以上効果を持続させるためには最低何錠の薬を飲む必要があるかを出力して下さい。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int efficacy = sc.nextInt();
        
        final int day = 24;
        final int need = day / efficacy;
        final int rest = day % efficacy;
        
        System.out.println(rest == 0 ? need : need + 1);
    }
}