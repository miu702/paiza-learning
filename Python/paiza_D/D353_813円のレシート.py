"""
あなたは x 円のジュースと y 円のお菓子を購入しようとしています。

paizaの日なのでせっかくならばお会計を 813 円にしてレシートを貰おうと考えました。

改行区切りで購入するジュースの値段 x 円とお菓子の値段 y 円が与えられるので
あと何円購入すれば 813 円のお会計になるか出力してください。
"""

# 価格リストを定義する
import sys
prices = list(map(int, sys.stdin.read().split()))


# 後何円なのか計算し、出力する
total = prices[0] + prices[1]
limit = 813
rest = limit - total
print(rest)