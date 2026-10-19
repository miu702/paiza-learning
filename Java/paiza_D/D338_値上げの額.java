
/*
あなたはいつも食べている定食の値段が上がっていることに気がつきました。
いくら値段が上がったか気になったあなたはレシートから値上げ前の値段を確認し計算することにしました。

値上げ前の値段 p と現在の値段 q が改行区切りで与えられるのでいくら値上げされたかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 値段を2つ定義する
        Scanner sc = new Scanner(System.in);
        final int p = sc.nextInt();
        final int q = sc.nextInt();

        // 差額を計算し、出力する
        final int increase = q - p;
        System.out.println(increase);
    }
}