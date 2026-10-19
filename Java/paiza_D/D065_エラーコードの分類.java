/*
あなたはある数字を受けてエラーの種類を分類するプログラムを作成しています。
各エラーは3桁の数字で表されておりそれぞれ、
百の位の数値で大まかな分類が決まっています。


以下のルールで分類の名称が決められています。
・百の位が 2 であれば ok
・百の位が 4 であれば error
・それ以外全ての数字は unknown
数字が入力されるので、この3つのルールにしたがって分類の名称を出力してください。

*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        String[] lines = sc.nextLine().split("");
        
        // 判断する要素を定数に変換する
        final String allow = "2";
        final String rejection = "4";
        final String check = lines[0];
        
        // チェックを実施する。
        if(check.equals(allow)) {
            System.out.println("ok");    
        } else if(check.equals(rejection)) {
            System.out.println("error");
        } else {
            System.out.println("unknown");
        }
        
    }
}