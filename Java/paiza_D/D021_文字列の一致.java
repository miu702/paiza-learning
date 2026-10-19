/*
長さが n の文字列 S と長さが m の文字列 T が改行区切りで入力されます。
S と T が完全一致していれば「Yes」、それ以外は「No」と出力するプログラムを作成してください。
*/
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String A = sc.nextLine();
        String B = sc.nextLine();
        
        if(A.equals(B)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
        
    }
}