"""
あなたはお菓子作りをしています。

レシピには大さじで n 杯での分量が書かれています。
大さじ 1 杯を 13 グラムとする時に必要な砂糖のグラム数を出力してください。
"""

# 大さじの数を定義する
spoon = int(input())

# グラムにしたときの量を計算する
coefficient = 13
gram = spoon * coefficient
print(gram)