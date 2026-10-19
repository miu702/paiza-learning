"""
あなたは木製の四角い桶を持っています。この桶は、周囲を囲っている木の板の高さが不揃いで、
一番背の低い木の板のところまでしか水がたまりません。

桶の底面積および周囲の木の板の高さが与えられるので、
貯めることのできる水の体積を求めるプログラムを作成してください。

"""

# 入力 → 変数に変換する。
import sys
base_area = int(input())
side = list(map(int, sys.stdin.read().split()))

# 高さの一番低い場所を見つける
height = min(side)

# 体積を求める
total = base_area * height
print(total)
