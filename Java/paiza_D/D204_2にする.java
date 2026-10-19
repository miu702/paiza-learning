/*
あなたは猫の日が近いということで猫にちなんだプログラムを作成しています。

ある正の整数 n が与えられるので加算すると 222 になる数字を出力してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        
        // 222 - 入力値で求めることができる
        final int target = 222;
        final int rest = target - number;
        System.out.println(rest);
    }
}