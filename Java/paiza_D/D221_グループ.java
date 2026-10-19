
/*
ある学校には数が絶対に偶数である N 人の生徒がいます、全生徒が 2 人ずつのグループに分かれたとき、
いくつグループができますか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final int people = sc.nextInt();
        final int unit = 2;

        final int group = people / unit;
        System.out.println(group);
    }
}