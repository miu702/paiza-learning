
/*
お米の重さの単位として合というものがあります。 1 合はおおよそ 150 gとされています。

1 合あたり 150 gとし N 合のお米がある時、何gになるかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int times = sc.nextInt();

        final int unit = 150;
        final int total = unit * times;
        System.out.println(total);
    }
}