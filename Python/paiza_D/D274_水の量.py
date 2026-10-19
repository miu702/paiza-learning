"""
水が N リットルだけあります。 あなたは a リットルの水が必要です。

必要な分の水を用意できる場合は "Yes" 、用意できない場合は "No" を出力してください。
"""

# 水の量と必要量を定義する
water = int(input())
need = int(input())

# 条件に沿って、出力する
print("Yes" if water >= need else "No")