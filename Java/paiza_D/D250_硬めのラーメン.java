
/*
A 君はカップラーメンをよく食べますが、彼はバリカタが好きなのでお湯を入れてから 1 分後に食べ始めます。
A 君がカップラーメンにお湯を入れてから X 秒経過しました。A 君は残り何秒待てばカップラーメンを食べれますか？

*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 経過時間を定義
        Scanner sc = new Scanner(System.in);
        final int min = sc.nextInt();

        // 目標を計算する
        final int target = 60;
        final int rest = target - min;
        System.out.println(rest);
    }
}