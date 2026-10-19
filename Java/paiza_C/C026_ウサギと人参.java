/*
Rabbit社の社長はウサギが大好きで、 社内で1匹のウサギを飼育することにしました。
ウサギが人参を好むことは広く知られています。 また、ウサギに詳しい社員によると、
人参は糖分が多いため与えすぎるのは良くないようです。

そこで、人参は1日1本だけ与えることにし、 特に糖分が許容範囲内で質量が大きい人参を選ぶことにしました。

プログラマーであるあなたはRabbit社の依頼を受け、 1 から N で番号付けられた N 個の人参のデータを入力として、]
糖分が許容範囲内で質量の最も大きい人参を見つけるプログラムを作成することになりました。

糖分には基準値Sと許容誤差 p があり、 糖分が S - p 以上 S + p 以下ならば許容範囲内となります。
また、糖分が許容範囲内で質量の最も大きい人参 が複数ある場合は、
それらのうち番号の最も小さいものを知ることができれば十分です。
*/
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // 人参の基準データを定義する
        Scanner sc = new Scanner(System.in);
        final String[] carrotData = sc.nextLine().split(" ");
        final int carrotInt = Integer.parseInt(carrotData[0]);
        final int allowSugar = Integer.parseInt(carrotData[1]);
        final int allowError = Integer.parseInt(carrotData[2]);
        
        
        // 許可できる人参データを保存する
        Map<Integer, Integer> allowCarrots = new HashMap<>();
        
        // 人参の数だけ、ループ処理する
        for(int i = 0; i < carrotInt; i++) {
            
            // 人参ごとの重さと糖質を定義する
            final String[] carrot = sc.nextLine().split(" ");
            final int weight = Integer.parseInt(carrot[0]);
            final int sugar = Integer.parseInt(carrot[1]);
            
            // 糖質のチェックをして、範囲内の人参のみ記録する
            final int checkSugar = Math.abs(sugar - allowSugar);
            if(checkSugar <= allowError) {
                allowCarrots.put(i + 1, weight);
            }
        }
        
        
        // バリューを参考にソートする。
        /*
        仕組み不明な個所多い
        新しいMap<キーのデータ型, バリューのデータ型> 新しいオブジェクト名 = ソートしたいオブジェクト名.entrySet()(オブジェクトのキーとバリューを1回ずつ取得)
        .stream().sorted(Map.Entry.comparingByValue(Collections.reverseOrder()))
        .collect(Collectors.toMap(
        */
        
        Map<Integer, Integer> sortedMapDesc = allowCarrots.entrySet().stream().sorted(Map.Entry.comparingByValue(Collections.reverseOrder())).collect(Collectors.toMap(
            Map.Entry::getKey,
            Map.Entry::getValue,
            (e1, e2) -> e1,
            LinkedHashMap::new
        ));
        
        // 最初のエントリー（キーと値のペア）を取得
        Map.Entry<Integer, Integer> topEntry = sortedMapDesc.entrySet().stream()
            .findFirst()
            .orElse(null); // Mapが空の場合はnull
        
        
        if(sortedMapDesc.size() > 0) {
            final Integer key = topEntry.getKey();     // 一番多い要素の「キー」
            System.out.println(key);
        } else {
            System.out.println("not found");
        }
        
        
    }
}