
/*
半角小文字アルファベットで構成された文字列 S が入力されます。
文字列 S の中に含まれる "at" という文字列を全て "@" (アットマークに)置換して出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] words = sc.next().split("");

        ArrayList<String> answer = new ArrayList<>();
        boolean check = false;
        for (int i = 0; i < words.length; i++) {
            // aがあるとき
            if (check) {

                if (words[i].equals("t")) {
                    answer.add("@");
                    check = false;
                } else {
                    answer.add("a");

                    if (words[i].equals("a")) {
                        check = true;
                    } else {
                        answer.add(words[i]);
                        check = false;
                    }
                }

            } else {
                if (words[i].equals("a")) {
                    check = true;
                } else {
                    answer.add(words[i]);
                }
            }
        }

        StringBuilder sb = new StringBuilder();
        for (String c : answer) {
            sb.append(c);
        }
        System.out.println(sb.toString());
    }
}