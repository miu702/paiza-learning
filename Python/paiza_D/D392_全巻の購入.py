"""
あなたは漫画を全巻購入しようとしています。

1 巻の値段が p 円の漫画を全 n 巻購入しようとしています。
合計でいくらになるか出力してください。
"""

# 1巻の値段と巻数を定義する
price = int(input())
full_set = int(input())


# 合計の金額を計算し、出力する
total = price * full_set
print(total)