
/*
ある 2 以上の整数 n が与えられます。
1　から n までの 1 ずつ増加する数列の和を出力してください。
*/
import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int number = sc.nextInt();

		int total = 0;
		for (int i = 1; i <= number; i++) {
			total += i;
		}
		System.out.println(total);
	}
}