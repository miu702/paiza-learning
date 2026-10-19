"""
入力される文字数 n と n 文字分の文字が1文字ずつ改行区切りで入力されます。
n 個の文字を全て結合し1つの文字列として1行で出力してください。
"""

# 入力 → 変数に変換する
import sys
number = int(input())
words = sys.stdin.read().split()


# 半角スペースなしで出力
print("".join(words))