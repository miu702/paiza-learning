"""
あなたは給料のボーナスの額を計算しています。

1 ヶ月の給与 n 円に対してボーナスの額は m 倍の額になります。
"""

# 給料と倍額を定義する
price = int(input())
coefficient = int(input())

# 合計金額を計算し、出力する
total = price * coefficient
print(total)