"""
A 君の経験値は a ポイントで、B 君の経験値は b ポイント、C 君の経験値は c ポイントです。
3 人の合計の経験値は何ポイントですか？

"""

# 入力 → 変数に変換する。
import sys
points = list(map(int, sys.stdin.read().split()))


# 配列を活用して、1回ずつループする
total = 0
for N in points:
    total += N
    
print(total)