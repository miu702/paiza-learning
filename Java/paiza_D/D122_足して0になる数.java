
/*
ある整数が与えられるので足してゼロになる数を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // 足して0になるとは、+-の反対の数を出力するので、-1をかける
        final int add = number * -1;
        System.out.println(add);
    }
}