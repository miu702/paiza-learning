
/*
あなたは N 人である街を観光していて、博物館を見学することを計画しています。
その博物館は、ある一定以上の人数の団体であれば団体料金が適用され、
入館料が個人料金の場合よりも安くなります。

団体料金が適用される人数の下限と、個人料金および団体料金がそれぞれ一人
あたりいくらであるかが与えられるので、入館料が総額いくらであったかを
求めるプログラムを作成してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int people = sc.nextInt();
        final int under = sc.nextInt();
        final int groupPrice = sc.nextInt();
        final int personPrice = sc.nextInt();

        // 条件に沿って出力する
        if (people >= under) {
            final int totalPrice = groupPrice * people;
            System.out.println(totalPrice);
        } else {
            final int totalPrice = personPrice * people;
            System.out.println(totalPrice);
        }

    }
}