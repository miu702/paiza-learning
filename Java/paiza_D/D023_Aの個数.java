
/*
半角アルファベットで構成された文字列 s が与えられます。
s に含まれる半角アルファベット 「A」 の数を出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] words = sc.nextLine().split("");

        int count = 0;
        for (int i = 0; i < words.length; i++) {
            if (words[i].equals("A"))
                count++;
        }
        System.out.println(count);
    }
}