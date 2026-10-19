"""
消費税 a % で 税抜き価格 b 円 の買い物をしました。

小数点以下は切り捨てられるものとして、税込価格いくらになるか出力してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

tax = numbers[0]
price = numbers[1]

totalPrice = price * (1 + (tax / 100))

print(int(totalPrice))