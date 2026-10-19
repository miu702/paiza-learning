"""
あなたは住所の入力データを処理しています。

改行区切りで都道府県、市区町村名、番地が与えられるので結合し 1 行で出力してください。
"""

# 住所データを配列に変換する
import sys
datas = sys.stdin.read().split()


# 住所を一列にする
address = []
for D in datas:
    address.append(D)
print("".join(address))