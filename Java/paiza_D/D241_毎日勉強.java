
/*
A 君は 1 日 N ページ問題集を進めます。
A 君がこのペースで 100 日間、問題集を進めると 100 日後には何ページ終わりますか？
*/
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1日のページを定義
        Scanner sc = new Scanner(System.in);
        final int pages = sc.nextInt();

        // 100日のページを計算し、出力する
        final int days = 100;
        final int totalPages = pages * days;
        System.out.println(totalPages);
    }
}