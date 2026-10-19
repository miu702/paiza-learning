/*
正整数 n が入力されるので、 n から 1 まで 1 ずつカウントダウンするプログラムを作成してください。
*/

import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int number = sc.nextInt();

		for (int i = number; i > 0; i--) {
			System.out.println(i);
		}

	}
}