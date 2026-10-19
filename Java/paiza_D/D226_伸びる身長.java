
/*
A 君は去年身長が 170cm ありました。A 君は 1 年間で N cm 伸びましたが、現在の A 君の身長は何 cm ですか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 伸びた身長を定義
        Scanner sc = new Scanner(System.in);
        final int add = sc.nextInt();

        // 現在の身長を計算し、出力する
        final int height = 170;
        final int current = height + add;
        System.out.println(current);
    }
}