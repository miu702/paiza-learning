"""
あなたは家計簿をつけています。

7 日分の食費が 1 日分ずつ改行区切りで与えられるので合計で食費がいくらかを出力してください。
"""

# 食費を配列に変換する
import sys
prices = list(map(int, sys.stdin.read().split()))


# 配列の合計を求める
total = 0
for p in prices:
    total += p
    
print(total)