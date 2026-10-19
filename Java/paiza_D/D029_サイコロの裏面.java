
/*
6面サイコロの目を表す整数 n に対し，その裏側にある目を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        final int rest = 7 - number;
        System.out.println(rest);
    }
}