"""
あなたは、paiza さんとあるゲームをしています。

このゲームではまず、あなたと paiza さんがそれぞれ 1 から 100 までの整数のうち、
どれか 1 つを選んで紙に書きます。次に、1 から 100 までの整数が書かれた玉の入った箱から
玉を 1 つ取り出し、そこに書かれていた数字が目標の数値となります。

このとき、自分が選んだ数値と目標の数値との差が得点になります。

あなたと paiza さんが書いた数値と、目標の数値があたえられるので、
あなたと paiza さんの得点を求めるプログラムを作成してください。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 数値を定義する
A = numbers[0]
B = numbers[1]
base = numbers[2]


# 計算を実施する
A_point = A - base
B_point = B - base
print(A_point, B_point)

