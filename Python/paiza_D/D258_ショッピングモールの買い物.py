"""
A 君は休日ショッピングモールに行き、商品 A ・商品 B をそれぞれ 2 個ずつ購入しました。
商品 A ・ 商品 B の値段が与えられるので、購入する商品の合計金額を出力してください。

"""

# 商品の値段を定義する
A = int(input())
B = int(input())


# 合計金額を計算する
items = 2
total = (A * items) + (B * items)
print(total)