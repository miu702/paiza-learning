"""
あなたは買い物をしています。

買い物の合計金額 n 円と支払った額 m 円が改行区切りで与えられます。
お釣りがいくらかを出力してください。
"""

# 買い物の金額と支払い額を定義する
price = int(input())
pay = int(input())

# おつりを計算する
change = abs(price - pay)
print(change)