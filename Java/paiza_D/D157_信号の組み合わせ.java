
/*
古くから使用されている簡易的な通信方法に、モールス信号を用いた通信が挙げられます。
これは、「トン」と「ツー」の 2 種類の符号を用いて通信を行う通信方式です。

ちょうど N 個の「トン」と「ツー」の組み合わせることを考えたとき、
何通りの組み合わせが存在するか数えるプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 何回するか定義
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();

        // 組み合わせ数を計算。計算結果は少数になるので、変換する
        final int base = 2;
        final int total = (int) Math.pow(base, number);
        System.out.println(total);
    }
}