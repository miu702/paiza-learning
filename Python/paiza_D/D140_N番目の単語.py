"""
1 から 10 の整数 N と 10 個の単語が与えられます。
10の単語の中から N 番目の単語を出力してください。
"""

# 入力 → 変数に変換する。
import sys
number = int(input())
words = sys.stdin.read().split()

# インデックス番号を利用して出力
print(words[number - 1])