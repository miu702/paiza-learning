"""
あなたは n 色のペンを 1 本ずつ用意しようとしています。
各ペンの価格は共通で p 円となっています。

合計でいくらになるか出力してください。
"""
# 色の数と1色の価格を定義する
color = int(input())
price = int(input())

# 合計金額を計算し、出力する
total = color * price
print(total)