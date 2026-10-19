"""
あなたは購入金額から値下げされるクーポン券を持っています。

購入金額 x とクーポン券で値下げされる額 y が与えられます。
値下げ後の価格を出力してください。

"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

price = numbers[0]
coupon = numbers[1]

discount = price - coupon
print(discount)