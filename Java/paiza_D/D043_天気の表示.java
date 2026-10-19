/*
あなたは 0 % 〜 100 % 降水確率の数値を得て、その数値から天気を文字列で表示をしようと考えました。
表示のルールは以下のよう定めました。

・降水確率が 0 % 以上 30 % 以下ならば "sunny"
・降水確率が 31 % 以上 70 % 以下ならば "cloudy"
・降水確率が 71 % 以上ならば "rainy"

降水確率 n (%) が与えられるので上のルールに従って文字列を出力して下さい。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数
        Scanner sc = new Scanner(System.in);
        final int number = sc.nextInt();
        
        // 基準値を設定
        final int sunnyMin = 0;
        final int sunnyMax = 30;
        final int cloudyMin = 31;
        final int cloudyMax = 70;
        final int rainyMin = 71;
        
        // 条件式で出力を変更
        if(number >= sunnyMin && number <= sunnyMax) {
            System.out.println("sunny");
        } else if(number >= cloudyMin && number <= cloudyMax) {
            System.out.println("cloudy");
        } else if(number >= rainyMin) {
            System.out.println("rainy");
        }
        
    }
}