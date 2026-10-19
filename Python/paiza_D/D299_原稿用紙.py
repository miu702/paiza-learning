"""
1 列が N 字で、 C 列ある原稿用紙があります。
この原稿用紙に最大で何字書くことができるか出力してください。
"""

# 入力を1列の数値配列に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 1列の文字数と何列あるのか定義する
ones = numbers[0]
col = numbers[1]

# 合計の文字数を計算し、出力する
total = ones * col
print(total)