"""
あなたはダイエットをしています。
合計カロリーの目標値 X と朝昼晩の 3 食分のカロリー Y_1, Y_2, Y_3 が与えられます。

3 食分のカロリー合計が目標値以下の場合 "OK" と出力し、
目標値より大きい場合は "NG" と出力してください。
"""

# 入力 → 配列に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 上限値と、3食のカロリーを定義する
limit = numbers[0]
breakfast = numbers[1]
lunch = numbers[2]
dinner = numbers[3]

# 3食の合計と上限を条件に沿って出力する
total = breakfast + lunch + dinner
print("OK" if total <= limit else "NG")

