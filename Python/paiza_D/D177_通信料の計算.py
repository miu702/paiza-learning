"""
あなたはスマホの通信料金の計算をしています。
1 GBごとの値段 a 円と通信量 n GBが与えられるので通信料金がいくらになるかを出力してください。

"""
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 通信費と通信料を定義
price = numbers[0]
unit = numbers[1]


# 合計金額を定義
total_price = price * unit
print(total_price)