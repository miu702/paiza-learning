/*
あなたは家庭菜園で野菜を育てています。
3 つの野菜を育てており同時に種を撒きました。

それぞれの野菜の収穫時期までの日数 d_1, d_2, d_3 が改行区切りで与えられます。
最初に収穫できるのは何日後か出力してください。

*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 日付を配列に変換する
        Scanner sc = new Scanner(System.in);
        final int number = 3;
        ArrayList<Integer> days = new ArrayList<>();
        for(int i = 0; i < number; i++) {
            final int day = sc.nextInt();
            days.add(day);
        }
        
        
        // 配列の中から、最小値を出力する
        int first = Integer.MAX_VALUE;
        for(Integer D : days) {
            if(D < first) first = D;
        }
        System.out.println(first);
        
        
    }
}