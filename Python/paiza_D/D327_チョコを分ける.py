"""
あなたは個包装のチョコを n 個用意して m 人に配ろうとしています。

全員に同じ個数で最大限配った時に何個のチョコが余るか出力してください。
"""

# チョコの数と人数を定義する
chocolate = int(input())
member = int(input())


# あまりのチョコの数を計算する
rest = chocolate % member
print(rest)