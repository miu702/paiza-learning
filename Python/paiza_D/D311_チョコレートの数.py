"""
チョコレートの大袋がひとつあります。
大袋の中にはいくつかのチョコレートが個包装で入っており、
1 個あたりの重さは A グラムです。

大袋の重さが B グラムのとき、大袋にいくつのチョコレートが
入っているか出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))
A = numbers[0]
B = numbers[1]


# チョコの数を計算し、出力する
chocolate = B // A
print(chocolate)