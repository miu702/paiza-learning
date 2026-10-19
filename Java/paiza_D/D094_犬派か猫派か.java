/*
あなたは知り合いの 3 人の中で犬が好きか猫が好きかでアンケートをとりました。

アンケートは "dog" もしくは "cat" のどちらかが書かれています。
改行区切りで各人の回答が 3 行の入力されるので 2 人以上が回答した方を出力してください。
*/

import java.util.*;
public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する
        Scanner sc = new Scanner(System.in);
        
        ArrayList<String> pets = new ArrayList<>();
        for(int i = 0; i < 3; i++) {
            final String pet = sc.next();
            pets.add(pet);
        }
        // 入力 → 変数に変換するend
        
        // どっちが多いか調査する
        int dogCount = 0;
        int catCount = 0;
        for(String p : pets) {
            if(p.equals("cat")) {
                catCount++;
            } else if(p.equals("dog")) {
                dogCount++;
            }
        }
        // どっちが多いか調査するend
        
        // 今回は同じ票数がないことが保証されているので、三項演算子でOK。
        System.out.println(dogCount > catCount ? "dog" : "cat");
    }
}