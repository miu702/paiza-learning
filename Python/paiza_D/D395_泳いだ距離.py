"""
あなたはプールで泳ぎの練習をしています。

50 メートルのプールを n 往復した時、合計で何メートルになるか出力してください。
"""

# 往復数を定義する
round_trip = int(input())

# 合計の距離を計算する
times = round_trip * 2
unit = 50
total = unit * times

# 結果を出力する
print(total)