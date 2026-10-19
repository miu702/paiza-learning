"""
あなたはソースコードを読んでいる時に区切り文字として
「_」(アンダースコア)と「-」(ハイフン)が混在している文字列の存在に気が付きました。
そこで「_」か「-」どちらか一方に統一するため以下のルールで変換することにしました。

・「_」と「-」のうち数が多い方に統一
・もし同数の場合は「_」に統一
"""

word = input()

processing = list(word[::1])

countA = 0; # _をカウント
countB = 0; # -をカウント
for p in processing:
    if p == "_":
        countA += 1
    elif p == "-":
        countB += 1

# 置き換えるreplaceは元データを書き換えることができないので、変数に投入して使う
if(countA >= countB):
    output = word.replace("-", "_")
    print(output)
    
elif(countA < countB):
    output = word.replace("_", "-")
    print(output)
    
