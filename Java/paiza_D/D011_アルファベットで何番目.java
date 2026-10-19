
/*
A〜Z (半角英字大文字) の中から1文字入力されます。A を 1番目としてアルファベット順で何番目かを出力して下さい。
*/
import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String ch = sc.next();

    int ascii = ch.charAt(0);
    int Beginning = 64;
    System.out.println(ascii - Beginning);
  }
}