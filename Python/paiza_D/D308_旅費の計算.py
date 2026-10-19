"""
paiza さんはある街へ旅行に行くことにしました。

paiza さんはまずバスに乗って駅まで行き、そこから新幹線に乗っていくことにしました。

バスの料金が A 円で、新幹線の料金が B 円のとき、paiza さんが街へ行くための費用を出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 合計の計算を実施する
A = numbers[0]
B = numbers[1]
total = A + B
print(total)