"""
あなたは 5 つの数字を足し算するプログラムを作成しています。
しかし、出力したい数字は下一桁のみです。

5 つの数字がスペース区切りで入力されるので、
全てを足した結果の下一桁を出力するプログラムを作成してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 合計を計算する
total = 0
for number in numbers:
    total += number

# 型を変換し、一の位を出力する
ones_place = str(total)
print(ones_place[len(ones_place) - 1])

