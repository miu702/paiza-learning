"""
あなたの所属している会社は、勉強熱心なエンジニアを表彰するため
書籍購入費の高い人を上から順に並べて可視化する事にしました。
この会社は勉強熱心なエンジニアばかりなので、書籍購入費が同じ社員は存在しません。

例えば、入力例 2 では A さん、 B さん、 C さん という名前の 3 人のエンジニアがおり
それぞれ 1000円, 3000円, 2000円 の書籍購入費を消費しています。
この場合、 B さん が 1位 となり、 C さん が 2位、そして A さんが 3位となります。
"""

people = int(input())
names = input().split()


ranking = {}
for i in range(people):
    player = {}
    player["name"] = names[i]
    player["price"] = 0

    ranking[player["name"]] = player
    
book_int = int(input())
for j in range(book_int):
    name, add_price = input().split()
    if(ranking.get(name)):
        ranking[name]["price"] += int(add_price)
        

sorted_ranking = sorted(
    ranking.values(),
    key=lambda player: player["price"],
    reverse=True
)

for S in sorted_ranking:
    print(S.get("name"))
