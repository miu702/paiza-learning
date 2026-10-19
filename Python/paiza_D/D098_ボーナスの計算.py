"""
あなたは給与計算のシステムを作っています。
夏のボーナスを算出する仕組みを以下のルールで作成することにしました。

1 ヶ月あたりの給与にボーナス計算のための係数 1 〜 6 を掛け算したものをボーナスの額とします。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))
salary = numbers[0]
coefficient = numbers[1]


total = salary * coefficient
print(total)