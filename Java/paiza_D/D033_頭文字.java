
/*
あなたは半角アルファベットの苗字と名前からそれぞれ 1文字目を取りイニシャルを作ることにしました。
半角スペース区切りで苗字と名前が入力されるので、1文字目を取り "." (半角ドット)で区切った文字列を出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] words = new String[2];
        for (int i = 0; i < 2; i++) {
            String line = sc.next();
            words[i] = line;
        }

        String[] A = words[0].split("");
        String[] B = words[1].split("");

        final String fullName = A[0] + "." + B[0];
        System.out.println(fullName);
    }
}