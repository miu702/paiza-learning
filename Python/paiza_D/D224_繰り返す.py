"""
ある文字列 S が与えられます、S を 3 回繰り返して出来る文字列を出力してください。

"""

# 入力 → 変数に変換する。
words = input()

# 3回繰り返し
repetition = f"{words}{words}{words}"
print(repetition)