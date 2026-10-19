"""
箱の中に飴が N 個あります。この飴を 10 人で分けるとき、1 人何個もらえますか？
"""

# 飴の数と人数を定義
candy = int(input())
people = 10


# 1人分を定義する
ones = candy / people
print(int(ones))