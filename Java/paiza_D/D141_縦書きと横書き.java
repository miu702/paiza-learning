/*
あなたはある町の選挙管理委員で、町内に候補者のポスターを貼ろうと思っています。
さまざまな場所に貼ることを考えているので、縦長のポスターと横長のポスターの 2 種類を用意することにしました。

縦に並んだ候補者の名簿が与えらえるので、候補者を同じ順に横に (すなわち 1 行に) 半角スペース区切りで並べて出力してください。
*/

import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 入力 → 変数に変換する。
        Scanner sc = new Scanner(System.in);
        final String numberStr = sc.nextLine();
        ArrayList<String> wordList = new ArrayList<>();
        for (int i = 0; i < Integer.parseInt(numberStr); i++) {
            final String word = sc.next();
            wordList.add(word);
        }

        // StringBuilderを利用して、出力する。半角スペースありで出力するので、通常のループで出力
        StringBuilder sb = new StringBuilder();
        for (int j = 0; j < wordList.size(); j++) {
            sb.append(wordList.get(j));
            if (j != wordList.size() - 1)
                sb.append(" ");
        }
        System.out.println(sb.toString());
    }
}