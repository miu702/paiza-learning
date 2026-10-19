"""
ある県には A 市と B 市が存在します。A 市と B 市の人口 X , Y がそれぞれ与えられます。
A 市から B 市に 100 人移住しました。 A 市と B 市の現在の人口を教えてください。

"""

# 移動前の人数を定義する
A = int(input())
B = int(input())


# 人口移動を計算する
move = 100
after_A = A - move
after_B = B + move


# 計算結果を出力する
print(after_A)
print(after_B)

