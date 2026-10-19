"""
あなたは n グラム入りのペットの餌を購入しています。

1回ごとにペットに m グラムずつ与えた場合に何グラムの餌が余るか出力してください。

"""
# 合計量を分けた量を定義する
total = int(input())
unit = int(input())


# 余りの量を計算し、出力する
rest = total % unit
print(rest)