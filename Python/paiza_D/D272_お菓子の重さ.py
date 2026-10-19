"""
お菓子が N 個用意されています。お菓子 1 個の重さは a です。

N と a が改行区切りで与えられるので、全体の重さを出力してください。
"""

# お菓子の個数と1つの重さを定義する
times = int(input())
gram = int(input())


# 合計の重さを計算する
total = gram * times
print(total)