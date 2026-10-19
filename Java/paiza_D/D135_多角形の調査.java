
/*
ある図形の内角の和が与えられるので、その図形が何角形であるか出力してください。
なお、N 角形の内角の和は 180 × (N - 2) で表されることが知られています。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final int angle = sc.nextInt();

        // 調査を実施する
        final int corner = angle / 180 + 2;
        System.out.println(corner);
    }
}