"""
オリンピックの国別メダル獲得数ランキングを作成しましょう。

ランキングは以下のルールで決定されます。

・金メダルの獲得数が多いほうが上位となる
・金メダルの獲得数が同じ場合、銀メダルの獲得数が多いほうが上位となる
・金メダル、銀メダルの獲得数ともに同じ場合、銅メダルの獲得数が多いほうが上位となる

下の図の丸の中の数字は左から順に金、銀、銅メダルの獲得数を表しています。


上の例では金メダルの数を比較して A 国が B 国より上位となります。
下の例では、金メダルの数が同じのため、銀メダルの数を比較して C 国が B 国より上位となります。
メダル獲得数のリストが与えられるので、それを上記のルールにそってランキング上位から順に並び替えてください。

同着もありえますが、単純に獲得数のリストを並び替えるのでその両者を区別する必要はありません 
"""

# 国の数を定義する
country = int(input())


# メダルの数をオブジェクトで管理する。全体は配列にすることで、インデックス番号でループできるようにする。
medals = []
for i in range(country):
    medal = {}
    gold, silver, bronze = map(int, input().split())
    medal["gold"] = gold
    medal["silver"] = silver
    medal["bronze"] = bronze
    medals.append(medal)


# 新しい配列名 = sorted(ソートする配列名, key=lambda(1つずつ取り出す呪文), 変数: (ソートする優先度：左のキーが優先), 昇順 or 降順)でオブジェクトの複数条件でソートできる。
sorted_players = sorted(medals, key=lambda x: (x["gold"], x["silver"], x["bronze"]),reverse=True)

# ソートした結果を順番に出力する
for player in sorted_players:
    print(player.get("gold"), player.get("silver"), player.get("bronze"))
    
    