"""
あなたは何周年記念かを確認するプログラムを作成しています。

最初の年 x と確認する年 y が改行区切りで与えられるので何周年かを出力して下さい。

"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 計算し、出力する
between = numbers[1] - numbers[0]
print(between)