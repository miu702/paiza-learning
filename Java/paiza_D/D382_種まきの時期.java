
/*
あなたは花の種を蒔こうと思っています。

花は n ヶ月後に開花します。 m 月に蒔いた種が何月に開花するかを出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 種をまいた月と、咲くために必要な月を定義する
        Scanner sc = new Scanner(System.in);
        final int seed = sc.nextInt();
        final int month = sc.nextInt();

        // 咲く月を計算し、出力する
        final int flower = seed + month;
        System.out.println(flower);
    }
}