
/*
スペース区切りで西暦 y 、月 m 、日 d が入力されます。
"/" 区切りで文字列として出力して下さい。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] numberStr = sc.nextLine().split(" ");

        final int year = Integer.parseInt(numberStr[0]);
        final int month = Integer.parseInt(numberStr[1]);
        final int day = Integer.parseInt(numberStr[2]);

        final String fullDate = year + "/" + month + "/" + day;
        System.out.println(fullDate);
    }
}