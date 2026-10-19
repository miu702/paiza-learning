/*
あなたはコンビニの店員です。
あなたが務めるコンビニではお弁当は常に10℃で管理されています。
また、コンビニの電子レンジではお弁当を1秒につき1℃温めることができます。


あなたはお客さんにお弁当を温めて欲しいとお願いされました。
お客さんが要望するお弁当の温度が与えられるので、
電子レンジで何秒温めればいいか出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 希望する温度を定義する
        Scanner sc = new Scanner(System.in);
        final int hope = sc.nextInt();

        // 温める時間を計算し、出力する
        final int start = 10;
        final int time = hope - start;
        System.out.println(time);
    }
}