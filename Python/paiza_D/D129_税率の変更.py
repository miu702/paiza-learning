"""
あなたは商品の価格にかかる税金の額を計算するプログラムを書いていましたが
ある時期から税率が上がることになりました。

商品の価格、元の税率(％)、新しい税率(％)がスペース区切りで与えられるので
税率が変化することで税込価格が何円変わるのか計算するプログラム作ってください。

"""
import sys
numbers = list(map(int, sys.stdin.read().split()))

price = numbers[0]
tax = numbers[1]
new_tax = numbers[2]

total_price = price * (1 + (tax / 100))
new_price = price * (1 + (new_tax / 100))

difference = int(new_price) - int(total_price)
print(difference)