
/*
ティッシュ1箱が空になるまでの期間を M 日、残りの花粉症の季節を N 日が改行区切りで入力されるので、
花粉症の季節が終わるまでに必要なティッシュ箱の数を求めて下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> numberList = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            final int number = sc.nextInt();
            numberList.add(number);
        }

        final int M = numberList.get(0);
        final int N = numberList.get(1);

        final int box = N / M;
        final int rest = N % M;

        final int total = rest == 0 ? box : box + 1;
        System.out.println(total);
    }
}