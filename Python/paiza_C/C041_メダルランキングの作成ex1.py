"""
あなたはゲーム大会のランキングシステムを作っています。

参加者ごとに以下の3つのデータが与えられます。

・score：獲得したスコア
・win：勝利数
・time：クリアまでにかかった時間（秒）

ランキングは以下のルールで決定されます。

・score が高いほうが上位
・score が同じ場合、win が多いほうが上位
・score と win がともに同じ場合、time が短いほうが上位

参加者の情報が与えられるので、
ランキング上位から順番に並べ替えて出力してください。

同着もありえますが、
単純に参加者の情報を並び替えるだけなので区別する必要はありません。

"""
player_int = int(input())

playerData = []
for i in range(player_int):
    name, score, win, time = input().split()
    player = {}
    player["name"] = name
    player["score"] = int(score)
    player["win"] = int(win)
    player["time"] = int(time)
    
    playerData.append(player)


# 新しい配列名 = sorted(ソートしたい配列名, key=lambda(配列を1つずつ取り出す呪文), 変数: (優先度1, 優先度2, 優先度3... マイナスをつけて昇順、降順入れ替え), 降順)
sorted_playerData = sorted(playerData, key=lambda x: (x["score"], x["win"], -x["time"]), reverse=True)


# 順番に出力する
for S in sorted_playerData:
    print(S["name"], S["score"], S["win"], S["time"])
