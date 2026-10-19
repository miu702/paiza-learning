"""
あなたは 3 日間の気温のデータから最高気温を出力するプログラムを作成しています。

改行区切りで 3 つの気温 t_1, t_2, t_3 が与えられるので最高気温を出力してください。
"""

# 入力を配列に変換する
import sys
temperatures = list(map(int, sys.stdin.read().split()))


# 最高の気温を出力する
high = max(temperatures)
print(high)