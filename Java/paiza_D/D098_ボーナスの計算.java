/*
あなたは給与計算のシステムを作っています。
夏のボーナスを算出する仕組みを以下のルールで作成することにしました。

1 ヶ月あたりの給与にボーナス計算のための係数 1 〜 6 を掛け算したものをボーナスの額とします。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] numberstr = sc.nextLine().split(" ");
        
        final int salary = Integer.parseInt(numberstr[0]);
        final int coefficient = Integer.parseInt(numberstr[1]);
        
        final int total = salary * coefficient;
        System.out.println(total);
    }
}