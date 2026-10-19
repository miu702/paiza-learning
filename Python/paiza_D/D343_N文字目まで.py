"""
文字列 S が与えられるので 1 文字目から N 文字目まで出力してください。

入力は 1 行目文字列 S の長さ L 、 2 行目に文字列 S 、 3 行目に出力する範囲 N 文字目が与えられます。
"""

# 文字列の長さ、文字列、切り取る位置を定義する
length = int(input())
word = input()
number = int(input())


# 文字列[左, 右 + 1]で切り取ることができる
output = word[0:number]
print(output)