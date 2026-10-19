"""
あなたは洗剤の詰め替えを購入しようとしています。

詰め替えるための容器の容量 x ミリリットルと購入する詰め替えの量 y ミリリットルが
この順に改行区切りで与えられるので詰め替えるための容器を何本満たせるかと余った量を
改行区切りで出力してください。
"""

# 詰め替えできる量とスペアの量を定義する
container = int(input())
spare = int(input())


# 満たせる本数と余る量を計算し、出力する
unit = spare // container
rest = spare % container
print(unit)
print(rest)