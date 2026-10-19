"""
問題2 〇を取り除く

問題

文字列には o と x が含まれています。

x をすべて取り除いて出力してください。
"""

import copy
word = list(input())


#　調査したremoveは1度しか処理してくれないので、条件に合致しない時は別の配列に投入することで疑似的に削除する
output = []
for c in word:
    if c != "x": output.append(c) 

print("".join(output))
