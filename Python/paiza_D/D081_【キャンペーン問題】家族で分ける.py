"""
あなたは箱に入ったお菓子を家族 N 人で分けることにしました。

箱には縦に H 個、横に W 個の計 H × W 個のお菓子が入っていますが、
N 人で均等にお菓子を分けた場合あまりが出る事があります。

N 人で均等にできるだけ多く分けた後のあまりのお菓子を出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 人数、お菓子の数を定義する
people = numbers[0]
x = numbers[1]
y = numbers[2]
total_sweets = x * y

# 余りの計算を行う
rest = total_sweets % people
print(rest)

