"""
あなたは暖房器具の燃料の購入計画を立てています。

1日に n リットルの燃料を消費します。 m 日分で何リットルになるか出力してください。
"""

# 1日の量と日にちを定義する
unit = int(input())
day = int(input())


# 合計を求めて、出力する
total = unit * day
print(total)