"""
あなたは動画の再生数を比較するプログラムを作成しています。

改行区切りで 3 つの動画の再生数が与えられるので一番再生数が多い再生数を出力してください。

"""

# 数値を配列に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 配列の中から最大値を取り出す
max_numbers = max(numbers)
print(max_numbers)