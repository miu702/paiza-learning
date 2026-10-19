"""
あなたは正月に向けてお餅の用意をしています。

1 人当たり n 個のお餅を m 人分用意します。
合計で何個のお餅が必要か出力してください。
"""

# 入力 → 変数に変換する。
rice_cake = int(input())
people = int(input())


# 合計値を出力する
total = rice_cake * people
print(total)