"""
節分では年齢と同じ数だけの豆を食べる風習がありあなたはその用意をしています。

n 人の子どもたちの年齢が改行区切りで与えられるので合計で何個の豆を用意すれば
いいか出力してください。

"""

# 入力 → 変数に変換する。
import sys
number = int(input())
ages = list(map(int, sys.stdin.read().split()))


# 合計値を計算し、出力する
total_ages = 0
for a in ages:
    total_ages += a

print(total_ages)

