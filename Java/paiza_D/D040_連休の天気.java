/*
あなたは7日間の連休をもらいましたが、降水確率が 30% 以下ならば外に出掛ける事に決めました。
7日間の降水確率(%)が改行区切りで入力されるので、出掛ける日数の合計を出力してください。
*/

import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		ArrayList<Integer> numberList = new ArrayList<>();
		final int week = 7;
		for (int i = 0; i < week; i++) {
			final int number = sc.nextInt();
			numberList.add(number);
		}

		final int referenceValue = 30;
		int count = 0;
		for (int day = 0; day < week; day++) {
			if (numberList.get(day) <= referenceValue)
				count++;
		}

		System.out.println(count);
	}
}