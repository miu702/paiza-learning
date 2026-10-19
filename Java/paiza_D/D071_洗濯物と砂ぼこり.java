/*
あなたは洗濯物を干すかどうか、その日の気温と湿度で決めることにしました。
暖かくて乾燥してる日を選んで干したいところですが、家の向には公園があり、そういった日は砂ぼこりが舞ってしまいます。


そこであなたは干すためのルールを決めました。
気温が 25 ℃以上の日、もしくは湿度が 40 % 以下の日は干します。それ以外の日は干しません。
ただし、上記の干す条件を満たす日のうち、気温が 25 ℃以上かつ、湿度 40 % 以下の日は砂ぼこりが舞うので干しません。

その日の気温と湿度が与えられるので、干すかどうか判断してください。
*/

import java.util.*;

public class Main {
	public static void main(String[] args) {
		// 入力 → 変数に変換する
		Scanner sc = new Scanner(System.in);
		final String[] lines = sc.nextLine().split(" ");
		final int temp = Integer.parseInt(lines[0]);
		final int humi = Integer.parseInt(lines[1]);

		// 境界値を作成し、条件式に投入する。
		final int temp_limit = 25;
		final int humi_limit = 40;
		if (temp >= temp_limit || humi <= humi_limit) {
			if (temp >= temp_limit && humi <= humi_limit) {
				System.out.println("No");
			} else {
				System.out.println("Yes");
			}
		} else {
			System.out.println("No");
		}

	}
}