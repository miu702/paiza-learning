
/*
あなたは花粉の季節に向けてティッシュ箱の収納スペースを確保しようと考えました。
高さ N cm のティッシュ箱を高さ M cmのスペースに縦 1 列に積んで収納しようとしています。

ティッシュ箱の高さ N cmと収納するスペースの高さ M cmが改行区切りで
与えられるので何箱のティッシュが保管できるのかを出力してください。

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        final int box = sc.nextInt();
        final int space = sc.nextInt();

        // 計算し、出力する
        final int unit = space / box;
        System.out.println(unit);
    }
}