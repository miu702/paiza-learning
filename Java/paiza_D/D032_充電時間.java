
/*
1 分間で 1 % の充電が可能なスマートフォンの充電器があります。
現在のスマートフォンのバッテリーの残量 n % からこの充電器で 100 % まで充電するのに何分かかるかを求めてください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int battery = sc.nextInt();
        final int full = 100;

        final int rest = full - battery;
        System.out.println(rest);
    }
}