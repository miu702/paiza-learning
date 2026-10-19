
/*
あなたはネジの発注をしようとしています。

必要なネジの本数 n と現在の在庫本数 m が改行区切りで与えられるので
在庫に対して何本足りないかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 必要なデータを定義する
        Scanner sc = new Scanner(System.in);
        final int need = sc.nextInt();
        final int current = sc.nextInt();

        // 計算し、出力する
        final int shortage = need - current;
        System.out.println(shortage);
    }
}