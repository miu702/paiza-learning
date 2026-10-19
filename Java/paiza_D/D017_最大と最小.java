
/*
5個の数字 n_1, n_2, n_3, n_4, n_5 が改行区切りで与えられます。
それらの数字の最大の数字、最小の数字を改行区切りで出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            int number = sc.nextInt();
            numbers.add(number);
        }

        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int j = 0; j < numbers.size(); j++) {
            max = Math.max(max, numbers.get(j));
            min = Math.min(min, numbers.get(j));
        }

        System.out.println(max);
        System.out.println(min);
    }
}