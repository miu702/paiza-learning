"""
あなたはハロウィンに向けてお菓子を用意しています。
n 人に p 円のお菓子を 1 人ごとに m 個用意することにしました。

お菓子を渡す人数 n 人、お菓子の値段 p 円、1 人ごとに用意する
お菓子の個数 m 個が改行区切りで与えられるので合計で何円になるか出力してください。
"""

# 人数、お菓子の値段、個数を定義する
member = int(input())
price = int(input())
sweets = int(input())


# 合計の金額を計算し、出力する
total_price = price * sweets * member
print(total_price)