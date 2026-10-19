"""
あなたは花壇に花の種を撒くことにしました。

必要な種の個数 n と種 1 つあたりの値段 p が与えられるので合計でいくらになるか出力してください。
"""

# 必要な種と1つの価格を定義する
times = int(input())
price = int(input())


# 合計金額を計算する
total_price = times * price
print(total_price)