"""
あなたは部品の発注をしています。
部品の価格 x 円と発注個数 n 個が改行区切りで与えられるので総額でいくらの発注になるか出力してください。
"""

# 商品の値段と個数を定義する
price = int(input())
items = int(input())


# 合計料金を計算する
total_price = price * items
print(total_price)