/*
あなたは筋トレをするために、プロテインを飲むことに決めました。
1日に体重 1 キロあたり 1500 mgを摂取することにしました。

体重が入力されるので 1 日に摂取するプロテインの量を出力してください。

*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int weight = sc.nextInt();
        
        final int unit = 1500;
        final int total = weight * unit;
        System.out.println(total);
    }
}