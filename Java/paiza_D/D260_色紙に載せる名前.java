
/*
あるクラスでは卒業に向けて色紙を作成していましたが、
余白が出来たので学級委員 2 人の名前のどちらかを掲載することにしました。

しかし、余白はあまり大きくないので、学級委員 2 人の内名前が短いほうを掲載します。
学級委員 2 人の名前が与えられるので、色紙に掲載される名前を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 配列に変換する
        Scanner sc = new Scanner(System.in);
        final String[] A = sc.next().split("");
        final String[] B = sc.next().split("");

        // 半角スペースなしで出力する
        System.out.println(A.length < B.length ? String.join("", A) : String.join("", B));

    }
}