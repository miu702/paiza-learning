/*
 2 次行列に対し、a × d - b × c を計算した値をこの 2 次行列の行列式とよびます。
ある 2 次行列が与えられたときに、その行列式を求めるプログラムを作成してください。
*/

/*
初めての2次元配列を作成。他言語と比べて少し難しいが、慣れていきたい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 2次元配列を作成する。
        int[][] lines = new int[2][2];

        for (int i = 0; i < 2; i++) {
            // まず、1行ずつ分ける。
            String[] line = sc.nextLine().split(" ");

            for (int j = 0; j < 2; j++) {
                // 次に各要素ずつ分割し、入れる。
                lines[i][j] = Integer.parseInt(line[j]);
            }
        }

        // 計算するためにわかりやすく定義する。
        final int A = lines[0][0];
        final int B = lines[0][1];
        final int C = lines[1][0];
        final int D = lines[1][1];

        // 計算結果を出力する
        final int determinant = A * D - B * C;
        System.out.println(determinant);
    }
}