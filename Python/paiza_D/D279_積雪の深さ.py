"""
あなたの街では雪が滅多に降りませんが、珍しく二日連続で雪が降りました。
1 日目には A cm、2 日目には B cm、積もりました。

合計の積雪の高さが何 cm になるか出力してください。
"""

# 積雪量を定義する
import sys
numbers = list(map(int, sys.stdin.read().split()))
A = numbers[0]
B = numbers[1]


# 合計量を計算する
total = A + B
print(total)