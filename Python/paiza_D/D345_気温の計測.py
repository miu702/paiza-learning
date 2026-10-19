"""
あなたは朝、昼、夜の3回の気温を計測しています。

改行区切りで朝、昼、夜の気温が改行区切りで与えられるので最高気温を出力してください。

"""

# 気温リストを作成する
import sys
temperature_list = list(map(int, sys.stdin.read().split()))

# リストの中から、最大値を取り出し、出力する
max_temperature = max(temperature_list)
print(max_temperature)