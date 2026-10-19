"""
あなたはある 1日の 6 時間ごとの気温データから最低気温を出力するプログラムを作成しています。

改行区切りである 1日の 6 時間ごとの気温データが与えられるので最も低い気温を出力してください。
"""

# 入力を配列に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))


# Pythonで配列の最も低い値を出すには、min(配列名)とする
lowest_temperature = min(numbers)
print(lowest_temperature)