"""
あなたはお正月飾りを作るために竹を用意しています。

長さ n の竹を 3 等分して使います。 3 等分した竹の 1 つの長さを出力してください。
"""

# 全体の長さを定義する
bamboo = int(input())


# 3等分したときの長さを計算し、出力する
division = 3
unit = bamboo / division
print(int(unit))