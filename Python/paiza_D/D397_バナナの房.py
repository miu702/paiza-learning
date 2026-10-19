"""
あなたはバナナを購入しようとしています。

バナナは 1 房に n 本ずつ付いています。 
m 房のバナナを購入した時、合計で何本のバナナになるか出力して下さい。
"""

# 房についている本数と房の数を定義する
unit = int(input())
quantity = int(input())

# 合計の本数を計算し、出力する
total = unit * quantity
print(total)