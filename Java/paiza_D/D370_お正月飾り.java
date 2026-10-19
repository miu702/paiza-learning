
/*
あなたはお正月飾りを作るために竹を用意しています。

長さ n の竹を 3 等分して使います。 3 等分した竹の 1 つの長さを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 全体の長さを定義する
        Scanner sc = new Scanner(System.in);
        final int bamboo = sc.nextInt();

        // 3等分の長さを計算し、出力する
        final int division = 3;
        final int unit = bamboo / division;
        System.out.println(unit);
    }
}