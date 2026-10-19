"""
あなたはお年玉の用意をしています。

お年玉は 1000 円札で用意することにしました。 n 枚の 1000 円札を用意し m 袋のお年玉袋を用意しました。
各お年玉袋に同じ枚数の 1000 円札を入れたとき余った額が何円かを出力してください。
"""

# 枚数と、袋の数を提議する定義する
number = int(input())
people = int(input())


# 残りのお金を計算する
rest = number % people
unit = 1000
total = rest * unit
print(total)