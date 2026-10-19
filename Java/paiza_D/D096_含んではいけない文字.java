
/*
あなたは大文字小文字を含む英字アルファベットで構成される文字列 S を人に伝える際に手書きで
渡したところ「I」(大文字のアイ)と「l」(小文字のエル)と「i」(小文字のアイ)の取り違えが発生してしまいました。
こういったミスを防ぐために、これらの文字がいずれか1つ以上含まれる場合は警告を出すプログラムを
作成することにしました。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String[] words = sc.nextLine().split("");

        boolean check = false;
        for (String w : words) {
            if (w.equals("i") || w.equals("I") || w.equals("l"))
                check = true;
        }

        System.out.println(check ? "caution" : String.join("", words));
    }
}