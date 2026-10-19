"""
あなたはクリスマスツリーの用意をしています。

n 本のクリスマスツリーそれぞれに m 個の飾りつけを用意することにしました。

クリスマスツリーの本数 n とそれぞれの飾りつけの個数 m が改行区切りで与えられるので
合計で何個の飾りを用意するか出力してください。
"""

# 木の数と飾りの数を定義する
trees = int(input())
decoration = int(input())


# 飾りの合計を計算する
total_decoration = trees * decoration
print(total_decoration)