"""
あなたはポスターを貼り付けるために粘着テープを用意しようとしています。

ポスターの大きさは縦 y cm、横 x cm の長方形で、各辺の両端の長さの粘着テープを 4 枚貼り付けます。
合計で何cmの粘着テープが必要か出力してください。
"""

# 入力を配列に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 縦と横を定義する
col = numbers[0]
row = numbers[1]

# 合計の長さを計算し、出力する
total = (col * 2) + (row * 2)
print(total)