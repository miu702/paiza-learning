"""
あなたはクリスマスパーティーに向けて用意を進めています。
必要なモノの値段のリストを作ったので合計でいくらか計算することにしました。

必要なモノの個数 n 個とそれぞれの必要なモノの値段 p_i が入力されるので合計でいくらになるかを出力してください。

"""

# 入力 → 変数に変換する。
import sys
number = int(input())
prices = list(map(int, sys.stdin.read().split()))


# 合計値を計算し、出力する
total = 0
for p in prices:
    total += p

print(total)

