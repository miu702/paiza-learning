
/*
正六面体の辺の長さ a が入力されるので表面積を出力して下さい。
辺の長さ a の正六面体の表面積は以下の式で求められます。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();

        final int total = size * size * 6;
        System.out.println(total);
    }
}