"""
あなたは車の燃費の計算をしています。

走行距離 n キロメートルと使用した燃料 m リットルが改行区切りで与えられるので
燃料 1 リットルあたりの走行距離を小数点以下を切り捨てて出力してください。
"""

# 入力 → 変数に変換する。
fuel = int(input())
ones = int(input())


# 燃費を計算する
fuel_efficiency = fuel // ones
print(fuel_efficiency)