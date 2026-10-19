/*
あなたはパソコンにある大量のデータをバックアップするために、外部記憶装置を購入しようとしています。


バックアップをしたいデータの容量 X GB(ギガバイト)
外部記憶装置 1 つあたりの容量 Y GB
外部記憶装置 1 つあたりの価格 P 円
がそれぞれ与えられるので全てのデータをバックアップするために
何円必要か計算するプログラムを作成してください。

*/

import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		final String[] numberStr = sc.nextLine().split(" ");

		// 全体データ量、1つあたりの容量、1つの価格を定数で定義
		final int totalAmount = Integer.parseInt(numberStr[0]);
		final int oneQuantity = Integer.parseInt(numberStr[1]);
		final int price = Integer.parseInt(numberStr[2]);

		// いくつの装置が必要が求める
		final int quotient = totalAmount / oneQuantity;
		final int rest = totalAmount % oneQuantity;

		// 全体の価格を求める
		if (rest == 0) {
			final int totalPrice = quotient * price;
			System.out.println(totalPrice);
		} else if (rest > 0) {
			final int totalPrice = (quotient + 1) * price;
			System.out.println(totalPrice);
		}

	}
}