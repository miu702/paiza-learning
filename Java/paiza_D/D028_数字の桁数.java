
/*
ある10進数の正の整数 n が与えられます。
n が何桁かを数字で出力してください。
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String numberStr = sc.nextLine();

        String[] numberList = numberStr.split("");
        System.out.println(numberList.length);
    }
}